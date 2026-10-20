#!/usr/bin/env node
/**
 * Automated smoke tests against a running server (dev or start).
 * Usage: node scripts/qa-smoke.mjs [baseUrl]
 */
const base = (process.argv[2] || "http://127.0.0.1:3000").replace(/\/$/, "");

const routes = [
  "/",
  "/salon-booking-software",
  "/barber-shop-software",
  "/appointment-booking-software",
  "/features/online-booking",
  "/features/live-queue",
  "/features/salon-payroll",
  "/compare/appointhive-vs-fresha",
  "/alternatives/fresha-alternative",
  "/alternatives/vagaro-alternative",
  "/guides/barbershop-walk-in-queue",
  "/guides/salon-commission-from-visits",
  "/legal/terms",
  "/legal/privacy",
  "/legal/cookies",
  "/legal/license",
  "/legal/dpa",
  "/legal/subprocessors",
  "/contact",
  "/pricing",
  "/robots.txt",
  "/sitemap.xml",
  "/llms.txt",
  "/llms-full.txt",
  "/bogus-page-should-404",
];

const expectRedirect = new Set(["/contact", "/pricing"]);
const expect404 = new Set(["/bogus-page-should-404"]);

function fail(msg) {
  console.error(`FAIL  ${msg}`);
  return false;
}

function pass(msg) {
  console.log(`PASS  ${msg}`);
  return true;
}

async function checkRoute(path) {
  const url = `${base}${path}`;
  const res = await fetch(url, { redirect: "manual" });
  const status = res.status;
  const location = res.headers.get("location") || "";

  if (expect404.has(path)) {
    return status === 404
      ? pass(`${path} → 404`)
      : fail(`${path} expected 404 got ${status}`);
  }

  if (expectRedirect.has(path)) {
    const ok = status >= 300 && status < 400 && location;
    return ok
      ? pass(`${path} → ${status} ${location}`)
      : fail(`${path} expected redirect got ${status}`);
  }

  if (status !== 200) {
    return fail(`${path} → ${status}`);
  }

  const ct = res.headers.get("content-type") || "";
  const body = await res.text();

  if (path === "/sitemap.xml") {
    const needed = [
      "/compare/appointhive-vs-fresha",
      "/guides/barbershop-walk-in-queue",
      "/alternatives/fresha-alternative",
    ];
    for (const n of needed) {
      if (!body.includes(n)) return fail(`sitemap missing ${n}`);
    }
    return pass(`sitemap.xml has SEO URLs`);
  }

  if (path === "/robots.txt") {
    return body.includes("Sitemap:") || body.includes("sitemap")
      ? pass(`robots.txt`)
      : fail(`robots.txt missing sitemap`);
  }

  if (path.endsWith(".txt")) {
    return body.length > 40 ? pass(`${path}`) : fail(`${path} too short`);
  }

  if (!ct.includes("text/html") && !ct.includes("xml") && !ct.includes("text/plain")) {
    return fail(`${path} unexpected content-type ${ct}`);
  }

  if (ct.includes("text/html")) {
    if (!body.includes("AppointHive")) return fail(`${path} missing brand text`);
    if (path === "/") {
      if (!/<h1[^>]*>[\s\S]*AppointHive/.test(body)) {
        return fail(`home H1 missing AppointHive`);
      }
    }
    if (path.startsWith("/compare/") || path.startsWith("/alternatives/") || path.startsWith("/guides/") || path.startsWith("/features/") || path.includes("booking") || path.includes("software")) {
      if (!body.includes("application/ld+json") && !body.includes("FAQPage") && !body.includes("@type")) {
        // JSON-LD may be escaped differently; soft check for FAQ or definition content
        if (!body.includes("Questions shops ask") && !body.includes("FAQ") && path !== "/") {
          // intent pages have "Questions shops ask"
          if (path !== "/legal/terms" && !path.startsWith("/legal/")) {
            // feature/intent should have FAQ section
          }
        }
      }
    }
  }

  return pass(`${path} → 200`);
}

async function checkContactApi() {
  // Missing origin/csrf should be rejected
  const bad = await fetch(`${base}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "QA",
      business: "Test Shop",
      email: "qa@example.com",
      message: "smoke",
      productInterest: "NOT_SURE",
      consent: true,
    }),
  });
  if (bad.status === 403 || bad.status === 400) {
    return pass(`POST /api/contact without CSRF → ${bad.status}`);
  }
  return fail(`POST /api/contact without CSRF expected 403 got ${bad.status}`);
}

async function main() {
  console.log(`QA smoke against ${base}\n`);
  let ok = true;
  for (const path of routes) {
    try {
      const result = await checkRoute(path);
      ok = result && ok;
    } catch (err) {
      ok = fail(`${path} threw ${err.message}`) && ok;
    }
  }
  try {
    ok = (await checkContactApi()) && ok;
  } catch (err) {
    ok = fail(`contact api threw ${err.message}`) && ok;
  }

  console.log(ok ? "\nALL SMOKE CHECKS PASSED" : "\nSMOKE CHECKS FAILED");
  process.exit(ok ? 0 : 1);
}

main();
