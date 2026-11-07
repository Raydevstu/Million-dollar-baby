/**
 * Shared upload limits and validation helpers.
 *
 * Imported by both the browser (dropzone / upload client) and the server
 * (route handlers), so it must stay free of Node-only or DOM-only APIs.
 */

export const UPLOAD_BUCKET = "videos" as const;

/** Max accepted file size — 500 MB, matching the `videos` bucket limit in 001_init.sql. */
export const MAX_FILE_SIZE_BYTES = 500 * 1024 * 1024;

/** Accepted containers: MP4 and MOV. */
export const ACCEPTED_MIME_TYPES = ["video/mp4", "video/quicktime"] as const;

/** Accepted extensions, used when the browser reports an empty/incorrect MIME type. */
export const ACCEPTED_EXTENSIONS = [".mp4", ".mov"] as const;

/** `<input accept>` + dropzone label string. */
export const ACCEPT_ATTRIBUTE = "video/mp4,video/quicktime,.mp4,.mov";

/** Human readable summary for the UI. */
export const MAX_FILE_SIZE_LABEL = "500 MB";
export const ACCEPTED_LABEL = "MP4 · MOV";

/** Signed URLs handed to the browser / worker. */
export const SIGNED_URL_TTL_SECONDS = 60 * 60; // 1 hour

/** How long a signed upload token stays usable before the object must exist. */
export const SIGNED_UPLOAD_TOKEN_TTL_SECONDS = 60 * 30; // 30 minutes

export type UploadErrorCode =
  | "empty_file"
  | "invalid_type"
  | "too_large"
  | "not_authenticated"
  | "missing_project"
  | "storage_error"
  | "cancelled"
  | "network_error"
  | "unknown";

export class UploadError extends Error {
  code: UploadErrorCode;
  constructor(code: UploadErrorCode, message: string) {
    super(message);
    this.name = "UploadError";
    this.code = code;
  }
}

export function extensionOf(filename: string): string {
  const idx = filename.lastIndexOf(".");
  return idx === -1 ? "" : filename.slice(idx).toLowerCase();
}

/**
 * Derives a MIME type from the filename when the browser gives us nothing useful
 * (Safari frequently reports "" for .mov, some OSes report "application/octet-stream").
 */
export function guessMimeType(file: File): string {
  const ext = extensionOf(file.name);
  if (ext === ".mp4") return "video/mp4";
  if (ext === ".mov") return "video/quicktime";
  const type = (file.type || "").toLowerCase();
  if (ACCEPTED_MIME_TYPES.includes(type as (typeof ACCEPTED_MIME_TYPES)[number])) {
    return type;
  }
  return type;
}

export function isAcceptedType(file: File): boolean {
  const ext = extensionOf(file.name);
  if ((ACCEPTED_EXTENSIONS as readonly string[]).includes(ext)) return true;
  const type = (file.type || "").toLowerCase();
  return (ACCEPTED_MIME_TYPES as readonly string[]).includes(type);
}

export interface FileValidationResult {
  ok: boolean;
  error?: { code: UploadErrorCode; message: string };
}

/** Client-side gate run before a single byte is read. */
export function validateFile(file: File): FileValidationResult {
  if (!file || file.size === 0) {
    return {
      ok: false,
      error: { code: "empty_file", message: `"${file?.name ?? "File"}" is empty.` },
    };
  }

  if (!isAcceptedType(file)) {
    return {
      ok: false,
      error: {
        code: "invalid_type",
        message: `"${file.name}" is not supported. Upload an MP4 or MOV file.`,
      },
    };
  }

  if (file.size > MAX_FILE_SIZE_BYTES) {
    return {
      ok: false,
      error: {
        code: "too_large",
        message: `"${file.name}" is ${formatBytes(file.size)}. The maximum upload size is ${MAX_FILE_SIZE_LABEL}.`,
      },
    };
  }

  return { ok: true };
}

export function formatBytes(bytes: number, decimals = 1): string {
  if (!Number.isFinite(bytes) || bytes <= 0) return "0 B";
  const units = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  const value = bytes / Math.pow(1024, i);
  return `${value.toFixed(i === 0 ? 0 : decimals)} ${units[i]}`;
}

/** Strips path separators and characters that could escape the user's storage folder. */
export function sanitizeFilename(name: string): string {
  const base = name.split(/[\\/]/).pop() ?? "video";
  const cleaned = base
    .replace(/[^a-zA-Z0-9._()\[\]-]+/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 120);
  return cleaned.length > 0 ? cleaned : "video";
}

/** Builds the canonical storage path. Always prefixed with the owner's user id. */
export function buildStoragePath(userId: string, filename: string): string {
  const safe = sanitizeFilename(filename);
  const now = Date.now();
  const rand = Math.random().toString(36).slice(2, 8);
  return `${userId}/${now}-${rand}-${safe}`;
}
