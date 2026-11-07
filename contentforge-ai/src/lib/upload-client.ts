"use client";

import { createClient } from "@/lib/supabase/client";
import { UPLOAD_BUCKET, UploadError, guessMimeType, validateFile } from "@/lib/upload-config";

export type UploadPhase =
  | "idle"
  | "validating"
  | "preparing"
  | "uploading"
  | "finalizing"
  | "done"
  | "error"
  | "cancelled";

export interface UploadProgress {
  /** 0–100 */
  percent: number;
  loadedBytes: number;
  totalBytes: number;
  /** bytes/second, exponentially smoothed */
  bytesPerSecond: number;
  /** seconds remaining, null until a speed sample exists */
  etaSeconds: number | null;
}

export interface UploadCallbacks {
  onPhase?: (phase: UploadPhase) => void;
  onProgress?: (progress: UploadProgress) => void;
}

interface SessionResponse {
  videoId: string;
  path: string;
  token: string;
}

/** Retry only transient failures — never validation or cancellation. */
const RETRYABLE_CODES: ReadonlySet<string> = new Set(["network_error", "storage_error"]);
const MAX_ATTEMPTS = 2;
const RETRY_DELAY_MS = 1500;
const PROGRESS_INTERVAL_MS = 250;

/**
 * Uploads one video into Supabase Storage and returns its `videos` row id.
 *
 * Flow:
 *   1. validateFile()              — extension / MIME / size gate in the browser
 *   2. POST /api/uploads           — server re-validates, reserves the row, mints a
 *                                    signed upload URL for `{userId}/{file}`
 *   3. PUT to the signed URL       — bytes go straight to Storage (never through the
 *                                    Next.js function), with real byte-level progress
 *   4. POST /api/uploads/complete  — verifies the object, flips the row to `uploaded`
 *                                    and enqueues the extract_audio job
 *
 * Cancelling aborts the transfer and calls the complete endpoint with `action: cancel`
 * so the reserved row and any partial object are cleaned up.
 */
export async function uploadVideo(
  file: File,
  callbacks: UploadCallbacks = {},
  signal?: AbortSignal
): Promise<{ videoId: string; path: string }> {
  const { onPhase, onProgress } = callbacks;
  const setPhase = (phase: UploadPhase) => onPhase?.(phase);

  // 1 — validation --------------------------------------------------------------
  setPhase("validating");
  const check = validateFile(file);
  if (!check.ok) {
    throw new UploadError(check.error!.code, check.error!.message);
  }
  throwIfAborted(signal);

  // 2 — signed session ----------------------------------------------------------
  setPhase("preparing");
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.access_token) {
    throw new UploadError("not_authenticated", "You are signed out. Sign in to upload a video.");
  }
  const accessToken = session.access_token;
  const mimeType = guessMimeType(file);

  const sessionData = await postJson<SessionResponse>(
    "/api/uploads",
    { filename: file.name, mimeType, fileSizeBytes: file.size },
    accessToken,
    signal,
    "Could not reach the upload service."
  );

  // The signed token is single-use: mint a fresh session for every retry attempt.
  let lastError: UploadError | null = null;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    throwIfAborted(signal);

    if (attempt > 1) {
      const refreshed = await postJson<SessionResponse>(
        "/api/uploads",
        { filename: file.name, mimeType, fileSizeBytes: file.size },
        accessToken,
        signal,
        "Could not reach the upload service."
      ).catch(() => null);

      if (!refreshed) {
        throw lastError ?? new UploadError("unknown", "The upload failed.");
      }
      // Drop the previous reservation so cancel/complete targets the live row.
      await cancelSession(sessionData.videoId, accessToken);
      sessionData.videoId = refreshed.videoId;
      sessionData.path = refreshed.path;
      sessionData.token = refreshed.token;
    }

    setPhase("uploading");
    try {
      await putToStorage(sessionData.path, sessionData.token, file, mimeType, onProgress, signal);

      setPhase("finalizing");
      await postJson(
        "/api/uploads/complete",
        { videoId: sessionData.videoId, action: "complete" },
        accessToken,
        signal,
        "The file uploaded but could not be registered."
      );

      setPhase("done");
      return { videoId: sessionData.videoId, path: sessionData.path };
    } catch (err) {
      const uploadError = toUploadError(err);

      if (uploadError.code === "cancelled") {
        await cancelSession(sessionData.videoId, accessToken);
        throw uploadError;
      }

      lastError = uploadError;
      if (attempt < MAX_ATTEMPTS && RETRYABLE_CODES.has(uploadError.code)) {
        await delay(RETRY_DELAY_MS);
        continue;
      }
      break;
    }
  }

  throw lastError ?? new UploadError("unknown", "The upload failed.");
}

/**
 * PUTs the whole file to Storage with XHR — fetch() cannot report upload progress,
 * and aborting mid-stream needs a handle on the request itself.
 */
function putToStorage(
  path: string,
  token: string,
  file: File,
  mimeType: string,
  onProgress: UploadCallbacks["onProgress"],
  signal: AbortSignal | undefined
): Promise<void> {
  const url = buildSignedPutUrl(path, token);

  return new Promise<void>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", url);
    xhr.setRequestHeader("Content-Type", mimeType || "application/octet-stream");
    xhr.responseType = "text";

    const startedAt = Date.now();
    let lastEmit = 0;
    let lastTime = startedAt;
    let lastLoaded = 0;
    let speed = 0;

    xhr.upload.onprogress = (event) => {
      if (!event.lengthComputable || !event.total) return;
      const now = Date.now();
      const interval = (now - lastTime) / 1000;

      if (interval > 0.1) {
        const instant = (event.loaded - lastLoaded) / interval;
        // Smooth so the ETA does not jitter between packets.
        speed = speed === 0 ? instant : speed * 0.7 + instant * 0.3;
        lastTime = now;
        lastLoaded = event.loaded;
      }

      const finished = event.loaded >= event.total;
      if (!finished && now - lastEmit < PROGRESS_INTERVAL_MS) return;
      lastEmit = now;

      const remaining = Math.max(0, event.total - event.loaded);
      const elapsed = (now - startedAt) / 1000;

      onProgress?.({
        percent: Math.min(99, Math.round((event.loaded / event.total) * 100)),
        loadedBytes: event.loaded,
        totalBytes: event.total,
        bytesPerSecond: speed,
        etaSeconds: speed > 10_000 && elapsed > 0.5 ? Math.ceil(remaining / speed) : null,
      });
    };

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        onProgress?.({
          percent: 100,
          loadedBytes: file.size,
          totalBytes: file.size,
          bytesPerSecond: speed,
          etaSeconds: 0,
        });
        resolve();
        return;
      }
      if (xhr.status === 413) {
        reject(new UploadError("too_large", "Storage rejected the file: it exceeds the bucket size limit."));
        return;
      }
      reject(new UploadError("storage_error", `Storage rejected the upload (HTTP ${xhr.status}).`));
    };

    xhr.onerror = () =>
      reject(new UploadError("network_error", "Connection lost during upload. Try again."));
    xhr.ontimeout = () => reject(new UploadError("network_error", "The upload timed out."));
    xhr.onabort = () => reject(new UploadError("cancelled", "Upload cancelled."));

    if (signal) {
      if (signal.aborted) {
        reject(new UploadError("cancelled", "Upload cancelled."));
        return;
      }
      signal.addEventListener("abort", () => xhr.abort(), { once: true });
    }

    xhr.send(file);
  });
}

/**
 * Rebuilds the signed upload endpoint. Mirrors storage-js, which turns
 * `/object/upload/sign/{bucket}/{path}?token=...` into the writable PUT URL
 * `/object/upload/index/{bucket}/{path}?token=...`.
 */
function buildSignedPutUrl(supabase: ReturnType<typeof createClient>, path: string, token: string): string {
  const base = getSupabaseUrl(supabase);
  const encodedPath = path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
  return `${base}/storage/v1/object/upload/index/${UPLOAD_BUCKET}/${encodedPath}?token=${encodeURIComponent(token)}`;
}

function getSupabaseUrl(supabase: unknown): string {
  const candidate = supabase as { supabaseUrl?: string };
  if (candidate?.supabaseUrl) return candidate.supabaseUrl.replace(/\/$/, "");
  const envUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!envUrl) {
    throw new UploadError("unknown", "NEXT_PUBLIC_SUPABASE_URL is not configured.");
  }
  return envUrl.replace(/\/$/, "");
}

async function postJson<T = Record<string, unknown>>(
  url: string,
  body: Record<string, unknown>,
  accessToken: string,
  signal: AbortSignal | undefined,
  networkMessage: string
): Promise<T> {
  throwIfAborted(signal);

  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
      body: JSON.stringify(body),
      signal,
    });
  } catch (err) {
    if (isAbort(err)) throw new UploadError("cancelled", "Upload cancelled.");
    throw new UploadError("network_error", networkMessage);
  }

  const payload = (await response.json().catch(() => ({}))) as T & {
    error?: string;
    code?: string;
  };

  if (!response.ok) {
    throw new UploadError(
      (payload.code as UploadError["code"]) ?? "unknown",
      payload.error ?? networkMessage
    );
  }
  return payload;
}

async function cancelSession(videoId: string, accessToken: string): Promise<void> {
  await fetch("/api/uploads/complete", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
    body: JSON.stringify({ videoId, action: "cancel" }),
  }).catch(() => undefined);
}

function toUploadError(err: unknown): UploadError {
  if (err instanceof UploadError) return err;
  if (isAbort(err)) return new UploadError("cancelled", "Upload cancelled.");
  const message = err instanceof Error ? err.message : String(err);
  return new UploadError("unknown", message || "The upload failed.");
}

function isAbort(err: unknown): boolean {
  return (
    typeof err === "object" &&
    err !== null &&
    "name" in err &&
    (err as { name: string }).name === "AbortError"
  );
}

function throwIfAborted(signal?: AbortSignal): void {
  if (signal?.aborted) throw new UploadError("cancelled", "Upload cancelled.");
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
