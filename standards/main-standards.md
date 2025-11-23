# Main Standards - Flickers of Majesty

**Version:** 1.0
**Last Updated:** 2025-11-23
**Applies To:** All pages site-wide

---

## 🌐 URLs and Linking

### Absolute URLs Required

**ALL internal links must use absolute URLs:**
```html
<!-- CORRECT -->
<a href="https://www.flickersofmajesty.com/products/mountain-majesty/">Mountain Majesty</a>
<link rel="stylesheet" href="https://www.flickersofmajesty.com/css/main.css">
<img src="https://www.flickersofmajesty.com/images/logo.webp" alt="Flickers of Majesty">

<!-- INCORRECT -->
<a href="/products/mountain-majesty/">Mountain Majesty</a>
<a href="../categories/landscapes/">Landscapes</a>
<img src="/images/logo.webp" alt="Flickers of Majesty">
```

**Why:** Improves AI scraping, prevents broken links in feeds, supports CDN deployment

---

## 🖼️ Images

### WebP Required

**ALL images must be WebP format:**
```html
<img src="https://www.flickersofmajesty.com/images/products/mountain-majesty.webp"
     alt="Mountain Majesty fine art photograph"
     width="1200" height="800">
```

### Image Optimization

- **Maximum dimensions:** 2400px wide for product images
- **Compression:** 80-85% quality for WebP
- **File size target:** < 200KB for product images, < 100KB for thumbnails
- **Loading:** Use `loading="lazy"` for below-fold images, `fetchpriority="high"` for hero images

### Alt Text Standards

**Product images:**
```html
<img src="..." alt="[Product Name] [Format] - [View/Angle]">
<!-- Example: -->
<img src="..." alt="Mountain Majesty canvas print - room view">
<img src="..." alt="Mountain Majesty fine art photograph - detail view">
```

**Decorative images:**
```html
<img src="..." alt="" role="presentation">
```

---

## ♿ Accessibility

### Non-Negotiable Requirements

- **Lighthouse score:** 100 for accessibility
- **Keyboard navigation:** All interactive elements must be keyboard accessible
- **Screen reader support:** Semantic HTML required
- **Color contrast:** WCAG AA minimum (4.5:1 for normal text, 3:1 for large text)
- **Focus indicators:** Visible focus states on all interactive elements

### Semantic HTML

**Required structure:**
```html
<header>
  <nav aria-label="Main navigation">...</nav>
</header>

<main id="main">
  <h1>Page Title</h1>
  <!-- Content -->
</main>

<footer>
  <!-- Footer content -->
</footer>
```

### Skip Links

**All pages must include skip link:**
```html
<a href="#main" class="skip-link">Skip to main content</a>
```

---

## 🏷️ Meta Tags

### Required on ALL Pages

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="[Page-specific description, 120-160 chars]">

<!-- FOM-Lite Protocol -->
<meta name="content-protocol" content="ICP-Lite v1.0">
<meta name="ai:summary" content="[Brief summary for AI, 150-200 chars]">
<meta name="last-reviewed" content="2025-11-23">

<!-- Open Graph -->
<meta property="og:title" content="[Page Title]">
<meta property="og:description" content="[Same as meta description]">
<meta property="og:image" content="https://www.flickersofmajesty.com/images/og-image.webp">
<meta property="og:url" content="https://www.flickersofmajesty.com/[page-path]/">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Page Title]">
<meta name="twitter:description" content="[Same as meta description]">
<meta name="twitter:image" content="https://www.flickersofmajesty.com/images/twitter-card.webp">
```

### Optional Meta Tags (Page-Specific)

**Product pages:**
```html
<meta name="ai:target-audience" content="Home decorators, art collectors, gift shoppers">
<meta name="ai:product-category" content="landscape, nature, mountain">
<meta name="ai:use-cases" content="living room, office, bedroom, gift">
```

**Category pages:**
```html
<meta name="ai:primary-topics" content="Fine art photography, wall art, home decor">
<meta name="ai:product-category" content="[category-name]">
```

---

## 🎨 CSS Architecture

### CSS Variables Required

**All colors, spacing, and typography must use CSS variables:**
```css
:root {
  /* Colors */
  --text-primary: #1a1a1a;
  --text-secondary: #4a4a4a;
  --text-muted: #888;
  --bg-primary: #ffffff;
  --bg-subtle: #f8f8f8;
  --accent: #0066cc;
  --success: #22c55e;
  --warning: #f59e0b;
  --error: #ef4444;
  --border: #e5e5e5;

  /* Typography */
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-serif: Georgia, 'Times New Roman', serif;

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;

  /* Layout */
  --max-width-content: 70ch;
  --max-width-container: 1200px;
}
```

### Mobile-First Required

**All CSS must be mobile-first:**
```css
/* Base (mobile) styles */
.product-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

/* Tablet and up */
@media (min-width: 640px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

## 📱 Performance

### Core Web Vitals Targets

- **LCP (Largest Contentful Paint):** < 2.5 seconds
- **FID (First Input Delay):** < 100 milliseconds
- **CLS (Cumulative Layout Shift):** < 0.1

### Performance Checklist

- [ ] Hero images use `fetchpriority="high"`
- [ ] Below-fold images use `loading="lazy"`
- [ ] CSS is minified
- [ ] JavaScript is minified and deferred
- [ ] No render-blocking resources
- [ ] Fonts are preloaded if custom fonts used

---

## 🔍 SEO

### Title Tags

**Format:** `[Page Title] | Flickers of Majesty`

**Examples:**
```html
<title>Mountain Majesty Canvas Print | Flickers of Majesty</title>
<title>Mountain Landscape Photography | Flickers of Majesty</title>
<title>Fine Art Photography Prints | Flickers of Majesty</title>
```

**Length:** 50-60 characters total

### Meta Descriptions

**Length:** 120-160 characters
**Format:** Descriptive, actionable, includes target keyword

**Examples:**
```html
<meta name="description" content="Mountain Majesty fine art photograph available as canvas, framed, and metal prints. Museum-quality prints from $49.">
```

### Heading Hierarchy

**Rules:**
- Exactly ONE H1 per page
- No skipping levels (H1 → H2 → H3, never H1 → H3)
- Headings describe content structure, not styling

---

## 🔒 Security

### External Links

**All external links must include security attributes:**
```html
<a href="https://external-site.com" target="_blank" rel="noopener noreferrer">Link Text</a>
```

### Forms

**All forms must include CSRF protection:**
```html
<form action="/cart/add" method="post">
  <input type="hidden" name="csrf_token" value="[token]">
  <!-- Form fields -->
</form>
```

---

## 📦 Caching Strategy

### Cache Headers

**Static assets (images, CSS, JS):** 1 year
```
Cache-Control: public, max-age=31536000, immutable
```

**HTML pages:** 1 hour with revalidation
```
Cache-Control: public, max-age=3600, must-revalidate
```

**API responses:** No cache
```
Cache-Control: no-cache, no-store, must-revalidate
```

---

## 🧪 Testing Requirements

### Before Deploying ANY Page

- [ ] Lighthouse score: 90+ (all categories)
- [ ] W3C HTML validation: No errors
- [ ] Google Rich Results Test: Valid schema
- [ ] Mobile responsiveness test: All breakpoints
- [ ] Cross-browser test: Chrome, Firefox, Safari, Edge
- [ ] Keyboard navigation test: All interactive elements accessible
- [ ] Screen reader test: Content makes sense

---

## 📝 File Naming Conventions

### HTML Files

- Use hyphens for multi-word names: `mountain-majesty.html`
- All lowercase
- Descriptive names

### Images

**Format:** `[product-slug]-[view].webp`

**Examples:**
- `mountain-majesty-main.webp`
- `mountain-majesty-detail.webp`
- `mountain-majesty-room-view.webp`

### CSS Files

- `main.css` - Global styles
- `product.css` - Product page styles
- `category.css` - Category page styles
- `utilities.css` - Utility classes

### JavaScript Files

- `main.js` - Global functionality
- `product-selector.js` - Product size/format selector
- `cart.js` - Cart functionality

---

## 🚫 Prohibited Practices

### NEVER Do These

❌ Use relative URLs
❌ Use formats other than WebP for images
❌ Skip accessibility requirements
❌ Use inline styles (except for dynamic values)
❌ Use !important in CSS (except for utilities)
❌ Compromise semantic HTML for visual styling
❌ Add content without meta tags
❌ Deploy without testing

---

**Questions?** See `/admin/claude/FOM-LITE_PROTOCOL.md` for comprehensive protocol guidance.
