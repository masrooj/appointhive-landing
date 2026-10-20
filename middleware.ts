import { NextResponse, type NextRequest } from "next/server";
import { csrfCookieName, newCsrfToken } from "@/lib/csrf";

function contentSecurityPolicy(nonce: string): string {
  const dev = process.env.NODE_ENV === "development";
  const scriptSrc = ["'self'", `'nonce-${nonce}'`, "'strict-dynamic'"];
  if (dev) scriptSrc.push("'unsafe-eval'");

  // Vercel Analytics / Insights (same-origin /_vercel/insights plus hosted endpoints).
  const connectSrc = [
    "'self'",
    "https://vitals.vercel-insights.com",
    "https://va.vercel-insights.com",
  ];
  if (!dev) {
    scriptSrc.push("https://va.vercel-scripts.com");
  }

  return [
    "default-src 'self'",
    `script-src ${scriptSrc.join(" ")}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' blob: data:",
    "font-src 'self'",
    `connect-src ${connectSrc.join(" ")}`,
    "media-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "frame-src 'none'",
    "worker-src 'none'",
    ...(dev ? [] : ["upgrade-insecure-requests"]),
  ].join("; ");
}

export function middleware(request: NextRequest) {
  const nonce = btoa(crypto.randomUUID());
  const policy = contentSecurityPolicy(nonce);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("Content-Security-Policy", policy);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.headers.set("Content-Security-Policy", policy);

  const existing = request.cookies.get(csrfCookieName)?.value;
  if (!existing || existing.length < 16) {
    response.cookies.set(csrfCookieName, newCsrfToken(), {
      httpOnly: false,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 12,
    });
  }

  return response;
}

export const config = {
  matcher: [
    {
      source: "/((?!_next/static|_next/image|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|avif|txt|mp4)$).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
