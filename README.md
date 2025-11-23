# Flickers of Majesty

**Fine Art Photography E-Commerce Site**
**Domain:** flickersofmajesty.com

---

## Overview

Flickers of Majesty is a dropship photography e-commerce website featuring fine art photography prints available in multiple formats (canvas, framed, metal) and sizes.

This site implements the **FOM-Lite Protocol** (Flickers of Majesty - Lite Protocol), an AI-first, human-first content protocol adapted from ITW-Lite, designed to make photography e-commerce content discoverable and useful for both AI assistants and human customers.

---

## FOM-Lite Protocol Implementation

### What is FOM-Lite?

FOM-Lite is a content protocol that structures photography e-commerce content for optimal discovery by AI assistants (ChatGPT, Claude, Gemini, etc.) while maintaining exceptional user experience for human visitors.

**Core Principles:**
1. **AI-First:** Structure content so AI can accurately understand and recommend products
2. **Human-First:** NEVER compromise user experience for AI optimization
3. **Progressive Enhancement:** All AI features are additive
4. **Hidden by Design:** AI-facing elements are invisible to users

### Implementation Levels

**Level 1: Meta Tags (FOUNDATIONAL)**
- `content-protocol`: Declares ICP-Lite v1.0 compliance
- `ai:summary`: Brief product/page summary for AI
- `ai:product-category`: Product categorization
- `ai:use-cases`: Recommended use cases
- `last-reviewed`: Content review date

**Level 2: Content Structure (CORE)**
- H1 + Answer Line: Clear page topic with summary
- Fit-Guidance Sections: Who products are for/not for
- Product Specifications: Structured product details
- FAQ Sections: Common questions with schema.org markup
- AI Breadcrumbs: HTML comments for AI context

**Level 3: Progressive Enhancement (PLANNED)**
- No-JS baseline functionality
- Static fallbacks for dynamic content
- Graceful degradation

---

## Directory Structure

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
├── js/                                # JavaScript files (future)
├── images/                            # Product and site images (WebP only)
│   ├── products/
│   ├── categories/
│   └── ...
├── products/                          # Product detail pages
│   └── mountain-majesty.html          # Sample product page
├── categories/                        # Category pages
│   └── mountain-landscapes.html       # Sample category page
├── index.html                         # Homepage
└── README.md                          # This file
```

---

## Standards & Requirements

### Absolute URLs Required

ALL internal links must use absolute URLs starting with `https://www.flickersofmajesty.com/`

**Why:** Improves AI scraping, prevents broken links, supports CDN deployment

### WebP Images Only

ALL images must be WebP format for optimal performance and quality.

### Accessibility Non-Negotiable

- Lighthouse accessibility score: 100
- Keyboard navigation required
- Screen reader support mandatory
- WCAG AA color contrast minimum

### Performance Targets

- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

---

## Page Types

### Homepage (`index.html`)
- Hero section with site introduction
- Featured collections
- Fit-guidance for overall site
- FAQ section

### Product Pages (`products/*.html`)
**Example:** `products/mountain-majesty.html`

**Required sections:**
1. Product images
2. H1 + answer line
3. Pricing and format selector
4. Fit-guidance (who it's for/not for)
5. Product specifications
6. Detailed description
7. FAQ section
8. Related products

### Category Pages (`categories/*.html`)
**Example:** `categories/mountain-landscapes.html`

**Required sections:**
1. Category hero (H1 + answer line + image)
2. Fit-guidance (who shops this category)
3. Product grid
4. Category description
5. FAQ section

---

## Schema.org Structured Data

All pages include appropriate schema.org markup:

- **Product pages:** Product schema with pricing, availability
- **Category pages:** CollectionPage schema
- **FAQ sections:** FAQPage schema
- **All pages:** BreadcrumbList schema

---

## CSS Architecture

### CSS Variables

All styling uses CSS variables defined in `:root`:
- Colors: `--text-primary`, `--accent`, `--success`, `--warning`, etc.
- Typography: `--font-sans`, `--font-serif`
- Spacing: `--space-xs` through `--space-3xl`
- Layout: `--max-width-content`, `--max-width-container`

### FOM-Lite CSS Classes

- `.answer-line` - Page summaries below H1
- `.fit-guidance` - Who it's for sections
- `.fit-guidance-good` - Good fit items (green)
- `.fit-guidance-poor` - Poor fit items (orange)
- `.product-specs` - Product specifications
- `.faq` - FAQ sections
- `.product-grid` - Responsive product grids
- `.product-card` - Individual product cards

### Responsive Design

Mobile-first approach with breakpoints:
- Base: Mobile (< 640px)
- Tablet: 640px+
- Desktop: 1024px+

---

## AI Breadcrumbs

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

---

## Documentation

### Protocol Documentation
- **`admin/claude/FOM-LITE_PROTOCOL.md`** - Complete FOM-Lite protocol specification

### Standards Documentation
- **`standards/main-standards.md`** - Global standards (URLs, images, accessibility, SEO)
- **`standards/product-standards.md`** - Product page structure and requirements
- **`standards/category-standards.md`** - Category page structure and requirements

---

## Testing Checklist

Before deploying any page:

- [ ] Lighthouse score 90+ (all categories)
- [ ] W3C HTML validation passes
- [ ] Google Rich Results Test validates schema
- [ ] Mobile responsiveness tested at all breakpoints
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)
- [ ] Keyboard navigation works for all interactive elements
- [ ] Screen reader test completed
- [ ] All images are WebP format
- [ ] All internal links use absolute URLs
- [ ] FOM-Lite meta tags present
- [ ] AI breadcrumbs present

---

## Future Enhancements

### Short Term
- Add real product images (WebP)
- Implement product selector (JavaScript)
- Add shopping cart functionality
- Create additional category pages
- Expand product catalog

### Medium Term
- Implement Level 3 progressive enhancement
- Add customer reviews
- Create About page
- Add contact/support pages
- Integrate with dropshipping provider

### Long Term
- Advanced filtering and search
- User accounts and wishlists
- Gift registry functionality
- Artist collaboration pages
- Blog/content marketing

---

## Development Notes

### Branch Strategy
Development branch: `claude/apply-itc-lite-protocol-019NHZ3mA4kiUq2SEyEV7LkP`

### Deployment
To be determined (static hosting recommended: Netlify, Vercel, Cloudflare Pages)

---

## Credits

**FOM-Lite Protocol** adapted from **ITW-Lite Protocol** (In the Wake - Lite Protocol)
Original ITW-Lite designed for cruising content at cruisinginthewake.com

---

## License

All rights reserved © 2025 Flickers of Majesty

---

## Contact

For questions about FOM-Lite protocol implementation, see `/admin/claude/FOM-LITE_PROTOCOL.md`
