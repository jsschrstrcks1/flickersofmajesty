---
name: content-freshness
version: "1.0.0"
description: "Scans last-reviewed meta tags, flags stale pages, and generates a freshness report — tuned for e-commerce product freshness"
type: audit
triggers:
  - command: "/freshness"
  - session_start: true
---

# Content Freshness Audit — flickersofmajesty

**Purpose**: Identify stale product and content pages before customers encounter outdated pricing, availability, or discontinued items.
**Integrates with**: ICP-2 (which requires `last-reviewed` meta tags on all pages).

**Soli Deo Gloria**

---

## How It Works

When triggered by `/freshness` or at session start, perform the following audit across all HTML pages in the repository.

---

## Step 1: Scan `last-reviewed` Meta Tags

Search every `.html` file for:

```html
<meta name="last-reviewed" content="YYYY-MM-DD">
```

For each page, extract the date and compute days since last review relative to today.

**Missing tags**: Flag any HTML page that lacks a `last-reviewed` meta tag entirely — this is an ICP-2 compliance gap.

---

## Step 2: Apply Staleness Threshold

The default staleness threshold is **90 days**. The user may override this (e.g., `/freshness --threshold 60`).

Flag every page where `days_since_review > threshold`.

---

## Step 3: Prioritize by Content Sensitivity

Each stale page is ranked by its revenue impact:

| Priority | Content Type | Detection | Why |
|----------|-------------|-----------|-----|
| **P0 — Critical** | Product pages | Path contains `/products/`, `/prints/`, `/shop/`, or pages with pricing markup, add-to-cart elements | Directly drives revenue; stale prices or availability cause lost sales or customer complaints |
| **P1 — High** | Gallery pages | Path contains `/gallery/`, `/collections/`, `/portfolio/` | Showcases work that leads to purchases; broken or outdated galleries hurt conversions |
| **P2 — Medium** | About / artist pages | Path contains `/about/`, `/artist/`, `/bio/` | Brand credibility; less volatile but still matters |
| **P3 — Normal** | General content | Everything else | Supporting pages with lower direct revenue impact |

Within each priority tier, sort by staleness (most days since review first).

---

## Step 4: Product Freshness Checks

For every product page (P0), perform these additional checks:

### Pricing Currency
- Look for price elements (`$` amounts, `.price` classes, structured data with `price` or `priceCurrency`).
- If a product page has pricing and `last-reviewed` is older than **60 days**, flag as **price data potentially stale** — prices, print options, and shipping costs can change.

### Availability & Discontinued Items
- Look for availability indicators: "sold out", "discontinued", "limited edition", "out of stock", "no longer available".
- If any of these phrases appear and the page has not been reviewed in >30 days, flag as **availability status needs verification**.
- Look for structured data `availability` fields — cross-check that the status makes sense (e.g., a page saying "In Stock" that hasn't been reviewed in 6 months).

### Print Options
- Look for references to print sizes, framing options, media types (canvas, metal, paper).
- If print options are listed and `last-reviewed` is older than 90 days, flag as **print options may have changed** — suppliers and materials change.

---

## Step 5: Generate Freshness Report

Output a structured report in this format:

```
=== CONTENT FRESHNESS REPORT — flickersofmajesty ===
Generated: [today's date]
Threshold: [N] days
Total HTML pages scanned: [count]
Pages missing last-reviewed tag: [count]
Pages within threshold: [count]
Pages STALE: [count]
Product-specific alerts: [count]

--- P0: CRITICAL (Product Pages) ---
[filepath] — last reviewed [date] ([N] days ago)
  ⚠ price data potentially stale (last reviewed [N] days ago)
  ⚠ availability status needs verification ("sold out" found, not reviewed in [N] days)
...

--- P1: HIGH (Gallery Pages) ---
[filepath] — last reviewed [date] ([N] days ago)
...

--- P2: MEDIUM (About / Artist Pages) ---
...

--- P3: NORMAL (General Content) ---
...

--- MISSING TAGS (ICP-2 Compliance Gap) ---
[filepath] — no last-reviewed meta tag found
...
```

---

## Step 6: Actionable Summary

After the report, provide a brief summary:

1. **Top 5 most urgent pages** to review, with reason.
2. **Revenue-impact note** — how many product pages are stale, since each one directly affects sales.
3. **Discontinued item check** — list any pages that mention "discontinued" or "sold out" and haven't been verified recently.
4. **ICP-2 compliance note** — count of pages missing `last-reviewed` tags.
5. **Recommended next action** — e.g., "Review the 3 product pages with stale pricing first — they directly affect revenue."

---

## Configuration

Users can customize behavior:

- `/freshness` — Run with defaults (90-day threshold, all priorities).
- `/freshness --threshold 60` — Use a 60-day threshold.
- `/freshness --priority P0` — Only show Critical items.
- `/freshness --products-only` — Only show product page alerts.
- `/freshness --missing-only` — Only show pages missing `last-reviewed` tags.
- `/freshness --discontinued` — Only show pages with discontinued/sold-out indicators.

---

**Soli Deo Gloria**
