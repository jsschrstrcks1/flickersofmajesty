# Flickers of Majesty

**Fine-art photography e-commerce site.**
**Domain:** [flickersofmajesty.com](https://flickersofmajesty.com)

A dropship photography storefront featuring fine-art prints in canvas,
framed, and metal formats across multiple sizes — built on the
**FOM-Lite Protocol**, a content protocol that makes photography
listings discoverable by AI assistants without compromising the human
shopping experience.

---

## Table of Contents

- [Overview](#overview)
- [FOM-Lite Protocol](#fom-lite-protocol)
- [Implementation levels](#implementation-levels)
- [Directory structure](#directory-structure)
- [Page types](#page-types)
- [Standards & requirements](#standards--requirements)
- [Schema.org structured data](#schemaorg-structured-data)
- [CSS architecture](#css-architecture)
- [AI breadcrumbs](#ai-breadcrumbs)
- [Quick start](#quick-start)
- [Deployment](#deployment)
- [Testing checklist](#testing-checklist)
- [Roadmap](#roadmap)
- [Documentation](#documentation)
- [Branch & contribution workflow](#branch--contribution-workflow)
- [Credits](#credits)
- [License](#license)

---

## Overview

Flickers of Majesty is a static photography storefront. Each photograph
gets:

- A product page with images, sizing/format selector, fit-guidance, and
  full specifications.
- Accurate Schema.org structured data so search engines and AI
  assistants render the listing correctly.
- AI-facing breadcrumbs and meta tags that are invisible to users but
  let assistants describe the print accurately ("Good for north-light
  living rooms; less ideal for south-facing rooms with strong glare").

The site is fully static (HTML + CSS + vanilla JS). No build step; no
framework. Drop the directory on any static host and it works.

---

## FOM-Lite Protocol

**FOM-Lite** is the content protocol governing this site, adapted from
the **ITW-Lite** protocol developed for
[cruisinginthewake.com](https://github.com/jsschrstrcks1/InTheWake).

### Core principles

1. **AI-first** — Structure content so AI assistants can accurately
   understand and recommend products.
2. **Human-first** — Never compromise the user experience for AI
   optimization. When the two conflict, humans win.
3. **Progressive enhancement** — All AI features are additive.
4. **Hidden by design** — AI-facing elements (meta tags, breadcrumbs)
   are invisible to users.

### What this means in practice

- An assistant asked "Show me a calming photograph for a small
  bedroom" should be able to find a print here, with size guidance and
  a price range, *without* ever needing to scrape pixel data.
- A human user should be able to buy that print without ever seeing the
  AI scaffolding.

---

## Implementation levels

### Level 1 — Meta tags (foundational)

| Tag | Purpose |
|---|---|
| `content-protocol` | Declares ICP-Lite v1.0 compliance |
| `ai:summary` | Brief product / page summary for AI |
| `ai:product-category` | Product categorization |
| `ai:use-cases` | Recommended use cases |
| `last-reviewed` | Content review date |

### Level 2 — Content structure (core)

- **H1 + Answer Line** — clear page topic with summary.
- **Fit-guidance sections** — who products are for / not for.
- **Product specifications** — structured product details.
- **FAQ sections** — common questions with `FAQPage` Schema.org markup.
- **AI breadcrumbs** — HTML comments providing AI context.

### Level 3 — Progressive enhancement (planned)

- No-JS baseline functionality.
- Static fallbacks for dynamic content.
- Graceful degradation on older browsers.

---

## Directory structure

```
flickersofmajesty/
├── admin/
│   └── claude/
│       └── FOM-LITE_PROTOCOL.md       # Full protocol documentation
├── standards/
│   ├── main-standards.md              # Global standards (URLs, images, accessibility)
│   ├── product-standards.md           # Product page requirements
│   └── category-standards.md          # Category page requirements
├── css/
│   └── main.css                       # Main stylesheet with FOM-Lite components
├── images/                            # Product and site images (WebP only)
│   ├── products/
│   ├── categories/
│   └── ...
├── products/                          # Product detail pages
│   └── mountain-majesty.html          # Sample product page
├── categories/                        # Category pages
│   └── mountain-landscapes.html       # Sample category page
├── index.html                         # Homepage
├── CNAME                              # Custom domain config
├── TODO.md                            # Active task list
└── README.md                          # This file
```

---

## Page types

### Homepage (`index.html`)

- Hero section with site introduction.
- Featured collections.
- Site-wide fit-guidance.
- FAQ section.

### Product pages (`products/*.html`)

Example: [`products/mountain-majesty.html`](products/mountain-majesty.html)

Required sections:

1. Product images (WebP).
2. H1 + answer line.
3. Pricing and format selector.
4. Fit-guidance (who it's for / not for).
5. Product specifications.
6. Detailed description.
7. FAQ section.
8. Related products.

### Category pages (`categories/*.html`)

Example: [`categories/mountain-landscapes.html`](categories/mountain-landscapes.html)

Required sections:

1. Category hero (H1 + answer line + image).
2. Fit-guidance (who shops this category).
3. Product grid.
4. Category description.
5. FAQ section.

---

## Standards & requirements

### Absolute URLs everywhere

All internal links use absolute URLs starting with
`https://www.flickersofmajesty.com/`. **Why:** improves AI scraping,
prevents broken links, supports CDN deployment.

### WebP images only

All images are WebP — both for performance and consistent quality across
devices. The only exception is the favicon.

### Accessibility (non-negotiable)

- Lighthouse accessibility score: **100**.
- Keyboard navigation required.
- Screen reader support mandatory.
- WCAG AA color contrast minimum.

### Performance targets

| Metric | Target |
|---|---|
| LCP (Largest Contentful Paint) | < 2.5 s |
| FID (First Input Delay) | < 100 ms |
| CLS (Cumulative Layout Shift) | < 0.1 |

---

## Schema.org structured data

| Page type | Schema |
|---|---|
| Product pages | `Product` schema with pricing, availability |
| Category pages | `CollectionPage` schema |
| FAQ sections | `FAQPage` schema |
| All pages | `BreadcrumbList` schema |

---

## CSS architecture

### CSS variables

All styling uses CSS custom properties defined in `:root`:

- **Colors** — `--text-primary`, `--accent`, `--success`, `--warning`, …
- **Typography** — `--font-sans`, `--font-serif`.
- **Spacing** — `--space-xs` through `--space-3xl`.
- **Layout** — `--max-width-content`, `--max-width-container`.

### FOM-Lite CSS classes

- `.answer-line` — Page summaries below H1.
- `.fit-guidance` — Who-it's-for sections.
- `.fit-guidance-good` — Good-fit items (green).
- `.fit-guidance-poor` — Poor-fit items (orange).
- `.product-specs` — Product specifications.
- `.faq` — FAQ sections.
- `.product-grid` — Responsive product grids.
- `.product-card` — Individual product cards.

### Responsive design

Mobile-first with breakpoints:

- **Base:** mobile (< 640 px).
- **Tablet:** 640 px+.
- **Desktop:** 1024 px+.

---

## AI breadcrumbs

Each page includes HTML comments that provide context for AI assistants:

```html
<!-- ai-breadcrumbs: product | landscape-photography | mountain-photography -->
<!-- ai-content-type: product-detail-page -->
<!-- ai-product-category: fine-art-photography, wall-art, landscape -->
<!-- ai-answer: Brief product summary -->
<!-- ai-fit-guidance: Good for: X. Not for: Y -->
<!-- ai-use-cases: living-room, office, bedroom -->
<!-- ai-price-range: $X - $Y USD -->
```

These comments are stripped from view but parsed by AI assistants. They
must always reflect the truth of the page — never use them to inflate
or game search.

---

## Quick start

### View locally

```bash
# Python (recommended)
python3 -m http.server 8000

# or Node.js
npx serve .
```

Open <http://localhost:8000>.

### Edit a product page

1. Copy an existing page in `products/` to a new slug.
2. Update the H1, answer line, images, specifications, and FAQ.
3. Refresh meta tags (`ai:summary`, `ai:product-category`,
   `ai:use-cases`, `last-reviewed`).
4. Refresh AI breadcrumbs to match the new content.
5. Validate per the [Testing checklist](#testing-checklist).

### Edit a category page

Same flow as product pages, but in `categories/`. The product grid
should reference real product pages — never link to a placeholder.

---

## Deployment

Static site, recommended hosts:

- **Cloudflare Pages** — fast global edge, free tier covers this size.
- **Netlify** — simplest "drag-and-drop" workflow.
- **Vercel** — same idea, equally fast.

The `CNAME` file pins the custom domain `flickersofmajesty.com`.

---

## Testing checklist

Before deploying any page:

- [ ] Lighthouse score 90+ across all categories.
- [ ] W3C HTML validation passes.
- [ ] Google Rich Results Test validates the schema.
- [ ] Mobile responsiveness tested at all breakpoints.
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge).
- [ ] Keyboard navigation works for every interactive element.
- [ ] Screen reader pass completed.
- [ ] All images are WebP.
- [ ] All internal links use absolute URLs.
- [ ] FOM-Lite meta tags present.
- [ ] AI breadcrumbs present and accurate.

---

## Roadmap

The active task list is in [`TODO.md`](TODO.md). Highlights:

### Short term

- Add real product images (WebP).
- Implement product selector (JavaScript).
- Add shopping-cart functionality.
- Create additional category pages.
- Expand product catalog.

### Medium term

- Implement Level 3 progressive enhancement.
- Add customer reviews.
- Create About page.
- Add contact / support pages.
- Integrate with the dropshipping provider.

### Long term

- Advanced filtering and search.
- User accounts and wishlists.
- Gift-registry functionality.
- Artist collaboration pages.
- Blog / content marketing.

---

## Documentation

| File | Purpose |
|---|---|
| [`admin/claude/FOM-LITE_PROTOCOL.md`](admin/claude/FOM-LITE_PROTOCOL.md) | Complete FOM-Lite protocol specification |
| [`standards/main-standards.md`](standards/main-standards.md) | Global standards: URLs, images, accessibility, SEO |
| [`standards/product-standards.md`](standards/product-standards.md) | Product page structure & requirements |
| [`standards/category-standards.md`](standards/category-standards.md) | Category page structure & requirements |
| [`TODO.md`](TODO.md) | Active task list |

---

## Branch & contribution workflow

- Feature branches follow the pattern
  `claude/<topic>-<id>` (e.g.
  `claude/apply-itc-lite-protocol-019NHZ3mA4kiUq2SEyEV7LkP`).
- Open a PR into `main` once the page passes the
  [Testing checklist](#testing-checklist).
- Never push directly to `main`.
- Never include placeholder images, lorem ipsum, or "coming soon"
  pages in production.

---

## Credits

**FOM-Lite Protocol** is adapted from the **ITW-Lite Protocol** built
for [In the Wake](https://github.com/jsschrstrcks1/InTheWake) — the
Christ-shaped cruise planning site at cruisinginthewake.com. The
underlying philosophy of "AI-first, human-first, hidden by design"
carries over wholesale; the application to photography e-commerce is
specific to this site.

---

## License

All rights reserved © 2025–2026 Flickers of Majesty. Photographs and
prints are sold under their own purchase terms. Site source code is
internal and not currently open-licensed.

For protocol questions, see
[`admin/claude/FOM-LITE_PROTOCOL.md`](admin/claude/FOM-LITE_PROTOCOL.md).
