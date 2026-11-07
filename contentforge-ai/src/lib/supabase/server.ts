import "server-only";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client for API route handlers.
 *
 * The upload flow authenticates the caller with their own bearer token (anon key +
 * user JWT), so RLS still applies to `profiles` / `projects`. The returned client is
 * only ever used to mint a short-lived signed *upload* URL, which Storage authorises
 * by token rather than by RLS — that is how a browser can PUT a 500 MB file without
 * the API process ever buffering it.
 */

interface EnvCheck {
  url: string;
  anonKey: string;
}

function readEnv(): EnvCheck {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY in the environment."
    );
  }
  return { url, anonKey };
}

/** Client scoped to the incoming request's user (RLS enforced). */
export function createUserClient(accessToken: string): SupabaseClient {
  const { url, anonKey } = readEnv();
  return createClient(url, anonKey, {
    global: { headers: { Authorization: `Bearer ${accessToken}` } },
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

/** Unsigned client used only for storage.createSignedUploadUrl(). */
export function createAnonClient(): SupabaseClient {
  const { url, anonKey } = readEnv();
  return createClient(url, anonKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

/**
 * Best-effort cleanup of an orphaned object after a failed/cancelled upload.
 * Requires SUPABASE_SERVICE_ROLE_KEY; silently no-ops when it is absent so that
 * local development without the key still works.
 */
export async function removeStorageObject(path: string): Promise<void> {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceRoleKey) return;

  const { url } = readEnv();
  const admin = createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { error } = await admin.storage.from("videos").remove([path]);
  if (error) console.error("[uploads] failed to remove orphaned object", path, error.message);
}
