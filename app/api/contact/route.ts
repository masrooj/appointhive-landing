import { NextResponse } from "next/server";
import { csrfMatches } from "@/lib/csrf";
import { siteOrigin } from "@/lib/links";
import { sendContactMail, smtpReady } from "@/lib/smtp";

const INTERESTS = new Set(["SAAS", "STANDALONE", "NOT_SURE"]);
const WINDOW_MS = 60 * 60 * 1000;
const PER_IP_LIMIT = 5;
const GLOBAL_LIMIT = 80;
const MAX_KEYS = 1000;
const MAX_BODY = 16_384;

const hits = new Map<string, number[]>();

const interestLabel: Record<string, string> = {
  STANDALONE: "Standalone install",
  SAAS: "Hosted",
  NOT_SURE: "Not sure",
};

function json(body: { ok?: true; error?: string }, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return (forwarded || "local").slice(0, 64);
}

function limited(ip: string): boolean {
  const now = Date.now();
  let total = 0;
  for (const [key, stamps] of hits) {
    const recent = stamps.filter((stamp) => now - stamp < WINDOW_MS);
    if (recent.length === 0) {
      hits.delete(key);
      continue;
    }
    hits.set(key, recent);
    total += recent.length;
  }

  if (total >= GLOBAL_LIMIT) return true;

  const recent = hits.get(ip) ?? [];
  if (recent.length >= PER_IP_LIMIT) return true;

  recent.push(now);
  if (!hits.has(ip) && hits.size >= MAX_KEYS) {
    const oldest = hits.keys().next().value;
    if (oldest) hits.delete(oldest);
  }
  hits.set(ip, recent);
  return false;
}

function sameSite(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  let sent: URL;
  try {
    sent = new URL(origin);
  } catch {
    return false;
  }
  const host = request.headers.get("host");
  if (host && sent.host === host) return true;
  try {
    return sent.origin === new URL(siteOrigin()).origin;
  } catch {
    return false;
  }
}

function field(value: unknown, max: number, multiline = false): string | null {
  if (typeof value !== "string") return null;
  const cleaned = (
    multiline ? value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "") : value.replace(/[\u0000-\u001F\u007F]/g, "")
  ).trim();
  if (!cleaned || cleaned.length > max) return null;
  return cleaned;
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type")?.toLowerCase() ?? "";
  if (contentType.includes("multipart/form-data")) {
    return json({ error: "Uploads are not accepted." }, 415);
  }
  if (!contentType.includes("application/json")) {
    return json({ error: "Invalid request." }, 415);
  }

  const declared = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(declared) && declared > MAX_BODY) {
    return json({ error: "Invalid request." }, 413);
  }
  if (!sameSite(request)) {
    return json({ error: "Invalid request." }, 403);
  }
  if (!csrfMatches(request)) {
    return json({ error: "Invalid request." }, 403);
  }
  if (limited(clientKey(request))) {
    return json({ error: "Too many notes. Email hello@appointhive.com." }, 429);
  }

  let raw: string;
  try {
    raw = await request.text();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }
  if (raw.length > MAX_BODY) {
    return json({ error: "Invalid request." }, 413);
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ error: "Invalid request." }, 400);
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return json({ error: "Invalid request." }, 400);
  }

  const record = body as Record<string, unknown>;
  if (typeof record.companyWebsite === "string" && record.companyWebsite.trim()) {
    return json({ ok: true });
  }

  const name = field(record.name, 200);
  const business = field(record.business, 200);
  const email = field(record.email, 200);
  const message = field(record.message, 5000, true);
  const productInterest = field(record.productInterest, 20)?.toUpperCase() ?? "";

  if (!name || !business || !email || !message || !INTERESTS.has(productInterest)) {
    return json({ error: "Please fill in the shop, your name, email, and a note." }, 400);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "Please enter a valid email address." }, 400);
  }
  if (record.consent !== true) {
    return json({ error: "Please accept the privacy note." }, 400);
  }

  if (!smtpReady()) {
    return json({ error: "Mail is not configured yet. Email hello@appointhive.com directly." }, 503);
  }

  try {
    await sendContactMail({
      name,
      business,
      email,
      interest: interestLabel[productInterest],
      message,
    });
  } catch {
    return json({ error: "The note did not send. Email hello@appointhive.com directly." }, 502);
  }

  return json({ ok: true });
}
