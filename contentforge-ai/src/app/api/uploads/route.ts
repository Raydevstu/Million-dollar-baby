import { NextResponse, type NextRequest } from "next/server";
import { createAnonClient, createUserClient } from "@/lib/supabase/server";
import {
  ACCEPTED_MIME_TYPES,
  MAX_FILE_SIZE_BYTES,
  SIGNED_UPLOAD_TOKEN_TTL_SECONDS,
  UPLOAD_BUCKET,
  buildStoragePath,
} from "@/lib/upload-config";

export const runtime = "nodejs";

/**
 * POST /api/uploads
 *
 * Body: { filename: string, mimeType: string, fileSizeBytes: number }
 * Returns: { videoId, path, token, upsertOnUpload }
 *
 * Server-side validation is the authority — the browser check is only UX. The API
 * never touches the file bytes: it mints a signed upload URL and the browser PUTs
 * straight to Supabase Storage.
 */
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { filename, mimeType, fileSizeBytes } = (body ?? {}) as Record<string, unknown>;

  if (typeof filename !== "string" || filename.trim().length === 0) {
    return NextResponse.json({ error: "`filename` is required." }, { status: 400 });
  }
  if (typeof mimeType !== "string") {
    return NextResponse.json({ error: "`mimeType` is required." }, { status: 400 });
  }
  const size = Number(fileSizeBytes);
  if (!Number.isFinite(size) || size <= 0) {
    return NextResponse.json({ error: "`fileSizeBytes` must be a positive number." }, { status: 400 });
  }

  // --- Validation -------------------------------------------------------------
  const normalizedType = mimeType.toLowerCase();
  if (!(ACCEPTED_MIME_TYPES as readonly string[]).includes(normalizedType)) {
    return NextResponse.json(
      { error: "Unsupported file type. Upload an MP4 or MOV file.", code: "invalid_type" },
      { status: 415 }
    );
  }

  if (size > MAX_FILE_SIZE_BYTES) {
    return NextResponse.json(
      {
        error: `File is ${(size / 1024 / 1024).toFixed(1)} MB. The maximum upload size is ${
          MAX_FILE_SIZE_BYTES / 1024 / 1024
        } MB.`,
        code: "too_large",
      },
      { status: 413 }
    );
  }

  // --- Auth -------------------------------------------------------------------
  const authHeader = request.headers.get("authorization") ?? "";
  const accessToken = authHeader.replace(/^Bearer\s+/i, "").trim();
  if (!accessToken) {
    return NextResponse.json({ error: "Not authenticated.", code: "not_authenticated" }, { status: 401 });
  }

  const userClient = createUserClient(accessToken);
  const {
    data: { user },
    error: userError,
  } = await userClient.auth.getUser();

  if (userError || !user) {
    return NextResponse.json({ error: "Session expired. Sign in again.", code: "not_authenticated" }, { status: 401 });
  }

  // --- Project row (videos.project_id is NOT NULL) ----------------------------
  const { data: project, error: projectError } = await userClient
    .from("projects")
    .select("id")
    .eq("owner_id", user.id)
    .order("created_at", { ascending: true })
    .limit(1)
    .maybeSingle();

  if (projectError) {
    console.error("[uploads] project lookup failed", projectError.message);
    return NextResponse.json({ error: "Could not load your workspace.", code: "storage_error" }, { status: 500 });
  }
  if (!project) {
    return NextResponse.json({ error: "No project found for this account.", code: "missing_project" }, { status: 500 });
  }

  // --- Reserve the video row + mint the signed upload URL ---------------------
  const path = buildStoragePath(user.id, filename);

  const { data: video, error: videoInsertError } = await userClient
    .from("videos")
    .insert({
      project_id: project.id,
      owner_id: user.id,
      storage_path: path,
      original_filename: filename.slice(0, 255),
      file_size_bytes: Math.trunc(size),
      processing_status: "pending_upload",
    })
    .select("id")
    .single();

  if (videoInsertError) {
    console.error("[uploads] video insert failed", videoInsertError.message);
    return NextResponse.json(
      { error: videoInsertError.message, code: "storage_error" },
      { status: 500 }
    );
  }

  const storage = createAnonClient().storage.from(UPLOAD_BUCKET);
  const { data: signed, error: signError } = await storage.createSignedUploadUrl(path);

  if (signError || !signed) {
    console.error("[uploads] signed url failed", signError?.message);
    // Roll back the reservation so the row does not linger in pending_upload.
    await userClient.from("videos").delete().eq("id", video.id);
    return NextResponse.json(
      { error: "Could not create an upload session. Check the Storage bucket settings.", code: "storage_error" },
      { status: 502 }
    );
  }

  return NextResponse.json({
    videoId: video.id,
    path: signed.path ?? path,
    token: signed.token,
    expiresInSeconds: SIGNED_UPLOAD_TOKEN_TTL_SECONDS,
    maxSizeBytes: MAX_FILE_SIZE_BYTES,
  });
}
