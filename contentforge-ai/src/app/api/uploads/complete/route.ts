import { NextResponse, type NextRequest } from "next/server";
import { createAnonClient, createUserClient, removeStorageObject } from "@/lib/supabase/server";
import { SIGNED_URL_TTL_SECONDS, UPLOAD_BUCKET } from "@/lib/upload-config";

export const runtime = "nodejs";

/**
 * POST /api/uploads/complete
 *
 * Body: { videoId: string, action: "complete" | "cancel" }
 *
 * `complete` verifies the object really exists in Storage, flips the video to
 * `uploaded` and enqueues the first pipeline job (`extract_audio`).
 * `cancel` deletes the reserved row and removes any partial object.
 */
export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { videoId, action } = (body ?? {}) as { videoId?: unknown; action?: unknown };

  if (typeof videoId !== "string" || videoId.length === 0) {
    return NextResponse.json({ error: "`videoId` is required." }, { status: 400 });
  }
  if (action !== "complete" && action !== "cancel") {
    return NextResponse.json({ error: "`action` must be 'complete' or 'cancel'." }, { status: 400 });
  }

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

  // RLS restricts this to the caller's own row.
  const { data: video, error: fetchError } = await userClient
    .from("videos")
    .select("id, storage_path, processing_status")
    .eq("id", videoId)
    .maybeSingle();

  if (fetchError) {
    console.error("[uploads/complete] lookup failed", fetchError.message);
    return NextResponse.json({ error: "Could not load the video.", code: "storage_error" }, { status: 500 });
  }
  if (!video) {
    return NextResponse.json({ error: "Video not found." }, { status: 404 });
  }

  // --- Cancel -----------------------------------------------------------------
  if (action === "cancel") {
    await removeStorageObject(video.storage_path);
    const { error: deleteError } = await userClient.from("videos").delete().eq("id", video.id);
    if (deleteError) {
      console.error("[uploads/complete] cancel delete failed", deleteError.message);
      return NextResponse.json({ error: "Could not cancel the upload.", code: "storage_error" }, { status: 500 });
    }
    return NextResponse.json({ ok: true, status: "cancelled" });
  }

  // --- Complete ---------------------------------------------------------------
  if (video.processing_status !== "pending_upload") {
    // Idempotent: a retry after a completed upload is a no-op.
    return NextResponse.json({ ok: true, status: video.processing_status });
  }

  // Verify the object actually landed in Storage before flipping the status.
  const storage = createAnonClient().storage.from(UPLOAD_BUCKET);
  const infoResult = await storage.info(video.storage_path);

  if (infoResult.error) {
    console.error("[uploads/complete] storage verification failed", infoResult.error.message);
    return NextResponse.json(
      { error: "The file was not found in storage. Upload it again.", code: "storage_error" },
      { status: 409 }
    );
  }

  const { error: updateError } = await userClient
    .from("videos")
    .update({ processing_status: "uploaded", error: null })
    .eq("id", video.id)
    .eq("processing_status", "pending_upload");

  if (updateError) {
    console.error("[uploads/complete] status update failed", updateError.message);
    return NextResponse.json({ error: "Could not mark the video as uploaded.", code: "storage_error" }, { status: 500 });
  }

  // Enqueue the pipeline head. The unique idempotency key makes a double-click a no-op.
  const { error: jobError } = await userClient.from("jobs").insert({
    owner_id: user.id,
    video_id: video.id,
    step: "extract_audio",
    status: "queued",
    idempotency_key: `extract_audio:${video.id}`,
  });

  if (jobError && !/duplicate key/i.test(jobError.message)) {
    console.error("[uploads/complete] job enqueue failed", jobError.message);
  }

  const { data: signedUrl } = await storage.createSignedUrl(video.storage_path, {
    expiresIn: SIGNED_URL_TTL_SECONDS,
  });

  return NextResponse.json({
    ok: true,
    status: "uploaded",
    videoId: video.id,
    previewUrl: signedUrl?.signedUrl ?? null,
  });
}
