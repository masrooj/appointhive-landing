const COOKIE = "ah_csrf";
const HEADER = "x-csrf-token";

export const csrfCookieName = COOKIE;
export const csrfHeaderName = HEADER;

export function newCsrfToken(): string {
  return btoa(crypto.randomUUID()).replace(/[^a-zA-Z0-9]/g, "").slice(0, 32);
}

export function readCsrfCookie(request: Request): string | null {
  const raw = request.headers.get("cookie") ?? "";
  for (const part of raw.split(";")) {
    const [name, ...rest] = part.trim().split("=");
    if (name === COOKIE) {
      const value = decodeURIComponent(rest.join("=")).trim();
      return value.length >= 16 ? value : null;
    }
  }
  return null;
}

export function readCsrfHeader(request: Request): string | null {
  const value = request.headers.get(HEADER)?.trim() ?? "";
  return value.length >= 16 ? value : null;
}

export function csrfMatches(request: Request): boolean {
  const cookie = readCsrfCookie(request);
  const header = readCsrfHeader(request);
  if (!cookie || !header || cookie.length !== header.length) return false;
  let diff = 0;
  for (let i = 0; i < cookie.length; i += 1) {
    diff |= cookie.charCodeAt(i) ^ header.charCodeAt(i);
  }
  return diff === 0;
}
