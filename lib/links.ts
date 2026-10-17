const PRODUCTION_ORIGIN = "https://appointhive.com";

export function siteOrigin(): string {
  const fallback = process.env.NODE_ENV === "production" ? PRODUCTION_ORIGIN : "http://localhost:3000";
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  try {
    const url = new URL(configured || fallback);
    if (url.protocol !== "http:" && url.protocol !== "https:") return fallback;
    return url.origin;
  } catch {
    return fallback;
  }
}
