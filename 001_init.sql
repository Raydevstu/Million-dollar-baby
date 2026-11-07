-- ClipMVP v1 schema. Run in the Supabase SQL editor.
-- Storage file_size_limit of 500 MB requires the Supabase Pro plan or higher.
-- Free projects cap uploads at 50 MB and this insert will fail there.

create extension if not exists pgcrypto;

do $$ begin
  create type public.plan_tier as enum ('free', 'creator', 'pro');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.video_status as enum ('pending_upload', 'uploaded', 'processing', 'ready', 'failed');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.job_step as enum ('extract_audio', 'transcribe', 'highlight', 'render_clip');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.job_status as enum ('queued', 'running', 'succeeded', 'failed');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.clip_status as enum ('proposed', 'rendering', 'ready', 'failed');
exception when duplicate_object then null;
end $$;

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  plan public.plan_tier not null default 'free',
  stripe_customer_id text,
  created_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.profiles (id) on delete cascade,
  name text not null default 'My videos',
  created_at timestamptz not null default now()
);

create table if not exists public.videos (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects (id) on delete cascade,
  owner_id uuid not null references public.profiles (id) on delete cascade,
  storage_path text not null unique,
  original_filename text not null,
  file_size_bytes bigint not null check (file_size_bytes > 0 and file_size_bytes <= 524288000),
  duration_seconds numeric,
  processing_status public.video_status not null default 'pending_upload',
  error text,
  created_at timestamptz not null default now()
);

create table if not exists public.transcripts (
  video_id uuid primary key references public.videos (id) on delete cascade,
  text text not null,
  words jsonb not null,
  model text not null default 'whisper-1',
  created_at timestamptz not null default now()
);

create table if not exists public.clips (
  id uuid primary key default gen_random_uuid(),
  video_id uuid not null references public.videos (id) on delete cascade,
  owner_id uuid not null references public.profiles (id) on delete cascade,
  start_seconds numeric not null,
  end_seconds numeric not null,
  hook_score int not null check (hook_score between 0 and 100),
  payoff_score int not null check (payoff_score between 0 and 100),
  emotion_score int not null check (emotion_score between 0 and 100),
  clarity_score int not null check (clarity_score between 0 and 100),
  clip_score int not null check (clip_score between 0 and 100),
  hook_type text not null check (hook_type in ('contrarian', 'story', 'number', 'advice', 'emotion', 'other')),
  reason text not null,
  first_line text not null,
  risk text,
  quote text not null,
  rank int not null check (rank between 1 and 5),
  status public.clip_status not null default 'proposed',
  export_path text,
  thumbnail_path text,
  created_at timestamptz not null default now(),
  check (end_seconds > start_seconds),
  check (end_seconds - start_seconds >= 15 and end_seconds - start_seconds <= 60)
);

create unique index if not exists clips_video_rank_idx on public.clips (video_id, rank);

create table if not exists public.jobs (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.profiles (id) on delete cascade,
  video_id uuid not null references public.videos (id) on delete cascade,
  clip_id uuid references public.clips (id) on delete cascade,
  step public.job_step not null,
  status public.job_status not null default 'queued',
  idempotency_key text not null unique,
  attempt int not null default 0 check (attempt >= 0),
  error text,
  locked_at timestamptz,
  locked_by text,
  run_after timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create index if not exists jobs_claim_idx on public.jobs (status, run_after, created_at);

create table if not exists public.usage_monthly (
  owner_id uuid not null references public.profiles (id) on delete cascade,
  period text not null check (period ~ '^[0-9]{4}-[0-9]{2}$'),
  seconds_processed int not null default 0 check (seconds_processed >= 0),
  exports_count int not null default 0 check (exports_count >= 0),
  primary key (owner_id, period)
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id) values (new.id) on conflict (id) do nothing;
  insert into public.projects (owner_id, name) values (new.id, 'My videos');
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

create or replace function public.claim_next_job(p_worker text)
returns public.jobs
language plpgsql
security definer
set search_path = public
as $$
declare
  claimed public.jobs;
begin
  select * into claimed
  from public.jobs
  where status = 'queued'
    and run_after <= now()
  order by created_at
  for update skip locked
  limit 1;

  if not found then
    return null;
  end if;

  update public.jobs
  set status = 'running',
      locked_at = now(),
      locked_by = p_worker,
      attempt = attempt + 1
  where id = claimed.id
  returning * into claimed;

  return claimed;
end;
$$;

revoke all on function public.claim_next_job(text) from public, anon, authenticated;
grant execute on function public.claim_next_job(text) to service_role;

alter table public.profiles enable row level security;
alter table public.projects enable row level security;
alter table public.videos enable row level security;
alter table public.transcripts enable row level security;
alter table public.clips enable row level security;
alter table public.jobs enable row level security;
alter table public.usage_monthly enable row level security;

drop policy if exists profiles_select_own on public.profiles;
create policy profiles_select_own on public.profiles
  for select to authenticated using (id = auth.uid());

drop policy if exists projects_select_own on public.projects;
create policy projects_select_own on public.projects
  for select to authenticated using (owner_id = auth.uid());

drop policy if exists videos_select_own on public.videos;
create policy videos_select_own on public.videos
  for select to authenticated using (owner_id = auth.uid());

drop policy if exists transcripts_select_own on public.transcripts;
create policy transcripts_select_own on public.transcripts
  for select to authenticated using (
    exists (
      select 1 from public.videos v
      where v.id = video_id and v.owner_id = auth.uid()
    )
  );

drop policy if exists clips_select_own on public.clips;
create policy clips_select_own on public.clips
  for select to authenticated using (owner_id = auth.uid());

-- No client insert/update policies. Writes go through the service role in the API
-- so a user cannot raise their own plan, quota, or clip score.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values
  ('videos', 'videos', false, 524288000, array['video/mp4', 'video/quicktime', 'video/webm']),
  ('exports', 'exports', false, 209715200, array['video/mp4', 'image/jpeg'])
on conflict (id) do update
set file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists videos_owner_read on storage.objects;
create policy videos_owner_read on storage.objects
  for select to authenticated
  using (
    bucket_id in ('videos', 'exports')
    and (storage.foldername(name))[1] = auth.uid()::text
  );
