# AppointHive SEO + AEO off-site playbook

Follow this after deploying the Phase 1–3 site changes. Keep product facts identical everywhere: **no client login**, **live queue for bookings + walk-ins**, **commission/payslip from the same visit**, **Hosted or Standalone**.

Canonical facts live in:

- `public/llms.txt`
- `public/llms-full.txt`
- `content/seo.ts` / homepage FAQs

---

## Status board (update as you go)

| Item | Status | Notes |
|------|--------|-------|
| Live deploy + SEO URLs 200 | Done | Spot-checked Oct 2026 |
| Sitemap / robots / llms live | Done | |
| Contact SMTP on production | Done | Form API returns ok with CSRF |
| Google DNS TXT | Done | `google-site-verification=52pkoc9…` live |
| Google HTML meta fallback | Code ready | Ships in `homeMetadata` after next deploy |
| GSC property verified | **You** | Click Verify, then submit sitemap |
| Bing Webmaster + sitemap | **You** | |
| IndexNow key hosted | Code ready | `/{key}.txt` + `npm run seo:indexnow` after deploy |
| Directories / sameAs URLs | Open | LinkedIn, PH, Capterra, G2 |
| Case studies / reviews | Open | Month 2+ |

---

## Week 0 — Prerequisites (same day as deploy)

- [x] Confirm production origin is `https://appointhive.com`
- [x] Confirm env `NEXT_PUBLIC_SITE_URL=https://appointhive.com` (canonicals resolve to production)
- [x] Open and verify 200:
  - https://appointhive.com/sitemap.xml
  - https://appointhive.com/robots.txt
  - https://appointhive.com/llms.txt
  - https://appointhive.com/llms-full.txt
- [x] Spot-check new URLs (status 200, canonical, FAQ visible):
  - `/compare/appointhive-vs-fresha`
  - `/alternatives/fresha-alternative`
  - `/alternatives/vagaro-alternative`
  - `/guides/barbershop-walk-in-queue`
  - `/guides/salon-commission-from-visits`
- [x] View page source on home + one intent page: Organization / SoftwareApplication / FAQ JSON-LD present

---

## Week 1 — Measurement foundation

### Google Search Console

1. Add property `appointhive.com` (Domain) or `https://appointhive.com` (URL-prefix).
2. Verify:
   - **DNS TXT** is already published — click **Verify** again.
   - Backup: HTML meta ships in site metadata after deploy (`google-site-verification`).
3. Sitemaps → submit `https://appointhive.com/sitemap.xml`.
4. URL Inspection → Request indexing for:
   - `/`
   - `/salon-booking-software`
   - `/barber-shop-software`
   - `/appointment-booking-software`
   - all five new compare / alternatives / guides URLs
5. Export or screenshot: Coverage / Pages, brand query impressions (may be empty at first).

### Bing Webmaster Tools

1. Import from Google Search Console, or verify the site separately.
2. Submit the same sitemap.
3. After deploy, run IndexNow from a machine with network:
   ```bash
   npm run seo:indexnow
   ```
   Key file: `https://appointhive.com/3386fadba40c2063b0020f1b2051b75a.txt`
4. Optional: set `NEXT_PUBLIC_BING_SITE_VERIFICATION` from Bing’s HTML meta tag, redeploy.

### Analytics

- Keep Vercel Analytics.
- Optional: create GA4 and link to Search Console; set a conversion event on contact form success later.

### Baseline log

| Date | Brand impressions | Mid-tail impressions | Indexed new URLs | Notes |
|------|-------------------|----------------------|------------------|-------|
|      |                   |                      |                  |       |

---

## Week 2 — Brand SERP + entity signals

- [ ] Instagram `@appointhive` bio: one-line wedge + link to `https://appointhive.com`
  - Suggested bio: `Booking, live floor queue & staff pay for barber shops & salons. Hosted or Standalone.`
- [ ] Create or complete LinkedIn Company page (About = brand description from site; website = appointhenive.com → **appointhive.com**)
- [ ] Google Business Profile **only** if you have a real public office/address — do not invent a local listing
- [ ] Email signatures and invoices: `AppointHive` + `https://appointhive.com`
- [ ] When LinkedIn (and any other live profiles) exist → paste URLs into sameAs hooks (below) and commit

---

## Week 3–4 — Software directories

Create vendor profiles with the **same facts** as `llms-full.txt`. Never invent star ratings in on-site schema to match directory scores.

| Directory | Action | Status | Live URL |
|-----------|--------|--------|----------|
| Product Hunt | Launch or upcoming; Appointment Scheduling / Beauty | | |
| Capterra | Salon/barber scheduling; note Hosted vs Standalone | | |
| G2 | Same category; plan to request 3–5 real shop reviews | | |
| AlternativeTo | Tag as alternative to Fresha / Vagaro / Booksy; link compare pages | | |
| GetApp / Software Advice | Only if distinct from Capterra | | |

**Profile copy checklist**

- [ ] Customers never create a login
- [ ] Live queue for bookings and walk-ins
- [ ] Commission / payslip from the visit
- [ ] Hosted SaaS or Standalone license
- [ ] Website: https://appointhive.com
- [ ] Support email: hello@appointhive.com

After each listing is live → update sameAs hooks and `llms.txt` / `llms-full.txt`.

---

## Month 2 — Mentions and light outreach

### Case studies (content follow-up)

- [ ] Get 1–2 shops willing to be named
- [ ] Capture: chair count, Hosted vs Standalone, one before/after quote
- [ ] Later: add a case study page and quote on compare pages

### Outreach (5–10 emails)

Targets: salon/barber blogs, “tools for shop owners” roundups, association newsletters.

**Pitch angle:** booking + live walk-in queue + staff pay from one visit; Hosted or Standalone; no client login.

**Link to:** guides and compare pages, not only the homepage.

| Date | Target | Sent | Reply | Link live? |
|------|--------|------|-------|------------|
|      |        |      |       |            |

### Communities

- [ ] Answer queue/payroll questions in relevant Reddit / Facebook shop-owner groups
- [ ] Link only when it helps; no spam blasts

### Press one-pager

- [ ] One-page PDF matching `llms-full.txt` facts for journalists and partners

---

## Month 2–3 — Review velocity (honest)

- [ ] After a successful week of use, ask paying/trial shops for Capterra/G2 reviews
- [ ] Respond to every review
- [ ] Do **not** add AggregateRating JSON-LD until you have a written policy and enough reviews you are willing to surface on-site

---

## Recurring — Monthly AEO + SEO review (30 min)

### Search (GSC)

- [ ] Brand queries for “AppointHive”
- [ ] Mid-tail: salon/barber booking, walk-in queue, commission, Fresha/Vagaro alternative
- [ ] CTR and impressions on new URLs
- [ ] Coverage: fix soft-404 / excluded new routes if any

### Answer engines (same prompts every month)

Paste answers into the Results log.

1. What is AppointHive?
2. Salon booking software with walk-in queue and payroll
3. Fresha alternative for barber shops that want standalone install
4. Best barber shop software for commission from visits

**Pass criteria:** Mentions AppointHive with: no client login, queue + pay, Hosted/Standalone.

If missing: tighten FAQs, add a third-party citation (directory/case study), refresh `llms.txt`.

### Results log

| Month | GSC brand pos | New URLs indexed | AI: “What is AppointHive?” | AI: queue + payroll | Actions |
|-------|---------------|------------------|----------------------------|---------------------|---------|
|       |               |                  |                            |                     |         |

---

## sameAs / llms URL hooks

When a profile goes live, do all three:

### 1. `lib/seo.ts` — `ORGANIZATION_SAME_AS`

Uncomment or append the real URL:

```ts
const ORGANIZATION_SAME_AS = [
  "https://www.instagram.com/appointhive/",
  "https://www.linkedin.com/company/appointhive/", // example
  // Product Hunt, Capterra, G2, AlternativeTo…
];
```

### 2. `public/llms.txt` — Directory profiles section

Replace `(paste … URL)` lines with live links.

### 3. `public/llms-full.txt` — sameAs / directory slots

Replace `(pending)` with live URLs so answer engines can cite them.

**Do not** publish placeholder or invented directory URLs in JSON-LD.

---

## Off-site success criteria (90 days)

- [ ] Brand query: AppointHive owns position 1; sitelinks starting to form
- [ ] All 5 new pages indexed in GSC
- [ ] At least 2 directory profiles live with matching copy
- [ ] At least one third-party mention (directory counts; article/case study is better)
- [ ] AI tools correctly state: no client login, queue + pay, Hosted/Standalone

---

## IndexNow (Week 1 add-on — implemented)

- Key: `3386fadba40c2063b0020f1b2051b75a`
- Public file: `/3386fadba40c2063b0020f1b2051b75a.txt`
- After each SEO deploy: `npm run seo:indexnow`
- Not required for Google; helps Bing / Copilot surfaces.

---

## Keyword tracker sheet (optional)

Track monthly (position + notes):

**Brand:** AppointHive, AppointHive booking, AppointHive salon  

**Mid-tail:** barber shop queue software, salon booking software with payroll, salon commission software, Fresha alternative, Vagaro alternative, barbershop walk-in queue  

**Head (long game):** salon booking software, barber shop software, appointment booking software
