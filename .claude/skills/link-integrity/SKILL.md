---
name: link-integrity
description: "Validates internal links, image paths, and product-to-category connectivity across the photography e-commerce site. Broken links lose sales."
version: 1.0.0
---

# Link Integrity Audit

> A broken link between a product and its category is a lost sale.

## Purpose

Flickers of Majesty is a fine art photography e-commerce site. Products link to categories, categories link to products. The site is smaller than InTheWake but every broken link directly impacts revenue.

## When to Fire

- After Edit/Write of any `.html` file
- On `/links` command
- When renaming or moving product/category pages
- Before deployment

## Site Structure

```
products/       — Product pages (e.g., mountain-majesty.html)
categories/     — Category/collection pages
css/            — Stylesheets
admin/          — Admin tools
standards/      — Design and content standards
images/         — Product photos and site assets
```

## Check Categories

### 1. Product ↔ Category Links
- Every product page should link to its parent category
- Every category page should list and link to its products
- Bidirectional: if A links to B, B should link to A

### 2. Image Paths
- Product images are critical — verify every `<img src>` resolves
- Check `srcset` and `<source>` elements for responsive images
- WebP fallbacks should have corresponding files

### 3. Navigation Links
- Main nav links to all major sections
- Footer links are valid
- Breadcrumb links resolve

### 4. Internal vs External
- Links to the site's own domain should be internal (relative), not absolute
- External links (print labs, shipping) are expected but should be flagged for review

## Audit Report Format

```
## Link Integrity — [date]
**Files checked:** [count]
**Broken:** [count]

| Source | Link | Issue |
|---|---|---|
```

---

*Soli Deo Gloria* — Excellence as worship means no broken paths to beauty.
