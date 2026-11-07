# ClipMVP

30-day video-to-clips MVP. One Next.js app, one Supabase project, one worker process. No NestJS, no Redis, no BullMQ, no ECS.

What it does:

1. Signed upload of one video (max 500 MB, max 60 minutes).
2. Worker extracts 16 kHz mono MP3, chunks it, and transcribes with `whisper-1` word timestamps.
3. One model call returns scored clip candidates. Code checks quotes, snaps times to words, and ranks them.
4. User exports a clip. Worker cuts 9:16, burns ASS karaoke captions, uploads an MP4.
5. Stripe Checkout sets `free`, `creator`, or `pro`. Free exports are watermarked.

## Hard limits

| Limit | Value | Why |
| --- | --- | --- |
| Upload size | 500 MB | Cost control. Supabase Free cannot store this (50 MB cap). Use Pro. |
| Duration | 60 minutes | Same reason. Enforced again with ffprobe before any paid API call. |
| Whisper request | 25 MB whole multipart body | OpenAI transcription limit. Audio is chunked to 10 minutes at 64 kbps, well under 20 MB. |
| Word timestamps | `whisper-1` only | `timestamp_granularities` is documented for `whisper-1`, not for `gpt-4o-transcribe` / `gpt-transcribe`. |
| `whisper-1` shutdown | 2027-02-26 | Announced removal. Do not switch models until the replacement returns word start/end. |

## Layout

```
001_init.sql          database, RLS, storage buckets, claim_next_job()
package.json
tsconfig.json
.env.example
src/limits.ts         shared caps and plan quotas
src/score.ts          quote check, snap-to-word, clip_score
src/highlight.ts      prompt + OpenAI call
src/captions.ts       ASS karaoke from word times
src/media.ts          ffmpeg / ffprobe
src/jobs.ts           one step of the pipeline
src/worker.ts         poll, claim, run, chain
src/http.ts           request handlers used by the Next routes
app/page.tsx          upload, scores, export
app/api/**            thin route wrappers
```

## Setup

1. Create a Supabase project on Pro. In Storage settings set the global file size limit to at least 500 MB. Free projects cannot.
2. Run `001_init.sql` in the SQL editor. It creates private buckets `videos` and `exports`.
3. Copy `.env.example` to `.env.local` (Next.js) and `.env` (worker). Fill in the service role key on the worker only. Never ship that key to the browser.
4. Install ffmpeg and ffprobe on the worker machine (`ffmpeg -version`).
5. `npm install`
6. `npx tsx src/worker.ts` on a small always-on host (Railway, Fly, a VPS). Not on Vercel.
7. `npx next dev` for the app. Deploy the Next app to Vercel. Deploy only the worker where ffmpeg exists.

Stripe: create two recurring prices, put their IDs in `STRIPE_PRICE_CREATOR` and `STRIPE_PRICE_PRO`. Point the webhook at `/api/stripe/webhook` for `checkout.session.completed`.

## Job chain

`extract_audio` → `transcribe` → `highlight` → (user clicks Export) → `render_clip`

State lives in Postgres. The worker is replaceable. A crash retries the same idempotency key. See `JOBS.md`.

## What this is not

No teams, agency plan, brand kit, voice cloning, scheduling, publishing, analytics, or GitHub login. Add a second worker only when this one falls behind, not before ten paying users.
