#!/usr/bin/env node
/**
 * Submit primary SEO URLs to IndexNow (Bing / partners).
 * Usage: node scripts/indexnow.mjs [baseUrl]
 */
const base = (process.argv[2] || "https://appointhive.com").replace(/\/$/, "");
const key = "3386fadba40c2063b0020f1b2051b75a";
const keyLocation = `${base}/${key}.txt`;

const paths = [
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
];

const urlList = paths.map((p) => `${base}${p === "/" ? "/" : p}`);

const body = {
  host: new URL(base).host,
  key,
  keyLocation,
  urlList,
};

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});

const text = await res.text();
console.log(`IndexNow ${res.status}`, text || "(empty body)");
if (!res.ok && res.status !== 202) process.exit(1);
console.log(`Submitted ${urlList.length} URLs for ${base}`);
