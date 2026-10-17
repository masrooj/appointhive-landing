import { NextResponse } from "next/server";
import { sendContactMail, smtpReady } from "@/lib/smtp";

const INTERESTS = new Set(["SAAS", "STANDALONE", "NOT_SURE"]);

const hits = new Map<string, number[]>();

function limited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((stamp) => now - stamp < 60 * 60 * 1000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 8;
}

const interestLabel: Record<string, string> = {
  STANDALONE: "Standalone install",
  SAAS: "Hosted",
  NOT_SURE: "Not sure",
};

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (limited(ip)) {
    return NextResponse.json({ error: "Too many notes. Email hello@appointhive.com." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof body.companyWebsite === "string" && body.companyWebsite.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const business = typeof body.business === "string" ? body.business.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const productInterest = typeof body.productInterest === "string" ? body.productInterest.trim().toUpperCase() : "";

  if (!name || !business || !email || !message || !INTERESTS.has(productInterest)) {
    return NextResponse.json({ error: "Please fill in the shop, your name, email, and a note." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (body.consent !== true) {
    return NextResponse.json({ error: "Please accept the privacy note." }, { status: 400 });
  }
  if (name.length > 200 || business.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "One of the fields is too long." }, { status: 400 });
  }

  if (!smtpReady()) {
    return NextResponse.json(
      { error: "Mail is not configured yet. Email hello@appointhive.com directly." },
      { status: 503 },
    );
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
    return NextResponse.json(
      { error: "The note did not send. Email hello@appointhive.com directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
