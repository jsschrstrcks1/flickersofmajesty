# Product Page Standards - Flickers of Majesty

**Version:** 1.0
**Last Updated:** 2025-11-23
**Applies To:** All product detail pages

---

## 📐 Page Structure

### Required Sections (In Order)

1. Product image gallery
2. Product info (H1, answer line, pricing, selector)
3. Fit-guidance section
4. Product specifications
5. Detailed description
6. FAQ section
7. Related products (minimum 3)

---

## 🖼️ Product Images

### Image Requirements

**Minimum images per product:** 3
- Main product image (hero)
- Detail view (close-up of quality/texture)
- Room view (product in context)

**Optional images:**
- Additional room views
- Different lighting conditions
- Frame/mounting detail shots

### Image Specifications

- **Format:** WebP only
- **Dimensions:** 2400px x 1600px (3:2 ratio) for main images
- **File size:** < 200KB per image
- **Alt text format:** `[Product Name] [Format] - [View Type]`

**Example:**
```html
<img src="https://www.flickersofmajesty.com/images/products/mountain-majesty-main.webp"
     alt="Mountain Majesty canvas print - main view"
     width="2400" height="1600"
     fetchpriority="high">
```

---

## 📄 Product Information Section

### H1 + Answer Line

**H1 Format:** `[Product Name] [Primary Format]`

**Examples:**
- `Mountain Majesty Canvas Print`
- `Coastal Serenity Metal Print`
- `Urban Twilight Framed Print`

**Answer Line Requirements:**
- 150-250 characters
- Include: Subject, available formats, ideal use cases
- Natural language, not keyword-stuffed

**Example:**
```html
<h1>Mountain Majesty Canvas Print</h1>
<p class="answer-line">
  A breathtaking fine art photograph of sunrise over the Rocky Mountains,
  available as museum-quality canvas prints, framed prints, and metal prints.
  Perfect for living rooms, offices, and nature enthusiasts.
</p>
```

### Pricing Display

**Show pricing range:**
```html
<div class="product-pricing">
  <p class="price">From $49.00</p>
  <p class="price-note">Price varies by size and format</p>
</div>
```

**When user selects size:**
```html
<div class="product-pricing">
  <p class="price">$129.00</p>
  <p class="size-selected">24x16" Canvas Print</p>
</div>
```

---

## 🎯 Fit-Guidance Section

### Required Structure

```html
<section class="fit-guidance">
  <h2>Who This Print Is For</h2>

  <div class="fit-guidance-good">
    <h3>This print tends to fit if you:</h3>
    <ul>
      <li><strong>[Characteristic]:</strong> [Explanation]</li>
      <!-- 4-6 items -->
    </ul>
  </div>

  <div class="fit-guidance-poor">
    <h3>Consider different if you:</h3>
    <ul>
      <li><strong>[Characteristic]:</strong> [Explanation]</li>
      <!-- 3-4 items -->
    </ul>
  </div>
</section>
```

### Good For / Not For Guidelines

**Good For items should cover:**
- Color palette preferences
- Space requirements
- Decor style compatibility
- Emotional tone/atmosphere
- Subject matter preferences

**Not For items should cover:**
- Incompatible color schemes
- Space size mismatches
- Conflicting decor styles
- Different aesthetic preferences

**Example:**
```html
<section class="fit-guidance">
  <h2>Who This Print Is For</h2>

  <div class="fit-guidance-good">
    <h3>This print tends to fit if you:</h3>
    <ul>
      <li><strong>Love dramatic landscapes:</strong> Epic mountain vistas with golden hour lighting</li>
      <li><strong>Need large statement pieces:</strong> Best impact at 36x24" or larger</li>
      <li><strong>Prefer warm color palettes:</strong> Rich golds, oranges, deep blues</li>
      <li><strong>Decorating spacious rooms:</strong> Ideal for rooms with 10+ foot ceilings</li>
      <li><strong>Seeking nature-inspired calm:</strong> Creates serene, contemplative atmosphere</li>
    </ul>
  </div>

  <div class="fit-guidance-poor">
    <h3>Consider different if you:</h3>
    <ul>
      <li><strong>Prefer minimalist aesthetics:</strong> This is a bold, dramatic piece</li>
      <li><strong>Need small space art:</strong> Best appreciated at larger sizes</li>
      <li><strong>Want cool color schemes:</strong> Dominated by warm sunrise tones</li>
    </ul>
  </div>
</section>
```

---

## 📋 Product Specifications

### Required Specifications

```html
<section class="product-specs">
  <h2>Product Specifications</h2>

  <dl class="specs-list">
    <dt>Available Formats:</dt>
    <dd>[Canvas Print, Framed Print, Metal Print, Fine Art Paper]</dd>

    <dt>Sizes:</dt>
    <dd>[List all available sizes]</dd>

    <dt>Orientation:</dt>
    <dd>[Horizontal/Vertical/Square]</dd>

    <dt>Dominant Colors:</dt>
    <dd>[List 3-5 dominant colors]</dd>

    <dt>Style:</dt>
    <dd>[Photography style/genre]</dd>

    <dt>Subject:</dt>
    <dd>[Primary subject matter]</dd>

    <dt>Best For:</dt>
    <dd>[Room types/use cases]</dd>
  </dl>
</section>
```

### Standard Size Options

**Landscape orientation (3:2 ratio):**
- 12x8"
- 18x12"
- 24x16"
- 36x24"
- 48x32"
- 60x40"

**Portrait orientation (2:3 ratio):**
- 8x12"
- 12x18"
- 16x24"
- 24x36"
- 32x48"
- 40x60"

**Square (1:1 ratio):**
- 12x12"
- 16x16"
- 24x24"
- 36x36"
- 48x48"

---

## ❓ FAQ Section

### Required FAQs (Minimum 3)

**Standard FAQs for all products:**
1. "What size should I choose for my space?"
2. "What's the difference between canvas and metal prints?"
3. "How long does shipping take?"

**Product-specific FAQs:**
- Subject matter questions
- Color/lighting questions
- Framing recommendations
- Care instructions

### FAQ Structure

```html
<section class="faq">
  <h2>Frequently Asked Questions</h2>

  <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">What size should I choose for my space?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>For best visual impact, choose a size where the print occupies 50-75% of your available wall width:</p>
        <ul>
          <li><strong>Small walls (4-6 feet):</strong> 24x16" or 36x24"</li>
          <li><strong>Medium walls (6-8 feet):</strong> 36x24" or 48x32"</li>
          <li><strong>Large walls (8+ feet):</strong> 48x32" or 60x40"</li>
          <li><strong>Over furniture:</strong> Print should be 2/3 the width of furniture below</li>
        </ul>
      </div>
    </div>
  </div>

  <!-- Additional FAQ items -->
</section>
```

### FAQ Schema (Required)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What size should I choose for my space?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For best visual impact, choose a size where the print occupies 50-75% of your available wall width. Small walls (4-6 feet): 24x16 or 36x24. Medium walls (6-8 feet): 36x24 or 48x32. Large walls (8+ feet): 48x32 or 60x40."
      }
    }
  ]
}
</script>
```

---

## 📐 Product Schema

### Required Product Schema

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "[Product Name]",
  "description": "[Product description from answer line]",
  "image": [
    "https://www.flickersofmajesty.com/images/products/[product]-main.webp",
    "https://www.flickersofmajesty.com/images/products/[product]-detail.webp",
    "https://www.flickersofmajesty.com/images/products/[product]-room.webp"
  ],
  "brand": {
    "@type": "Brand",
    "name": "Flickers of Majesty"
  },
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "[Lowest price]",
    "highPrice": "[Highest price]",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://www.flickersofmajesty.com/products/[product-slug]/"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "1"
  },
  "category": "[Category] > [Subcategory]"
}
</script>
```

---

## 🔗 Related Products

### Requirements

- Minimum 3 related products
- Maximum 6 related products
- Choose products with complementary subjects or similar color palettes
- Link to full product pages

### Related Products Structure

```html
<section class="related-products">
  <h2>You May Also Like</h2>

  <div class="product-grid">
    <article class="product-card">
      <a href="https://www.flickersofmajesty.com/products/[product-slug]/">
        <img src="https://www.flickersofmajesty.com/images/products/[product]-thumb.webp"
             alt="[Product Name]"
             width="400" height="267"
             loading="lazy">
        <h3>[Product Name]</h3>
        <p class="price">From $49.00</p>
      </a>
    </article>
    <!-- More product cards -->
  </div>
</section>
```

---

## 🏷️ Meta Tags (Product-Specific)

### Required Meta Tags

```html
<!-- Standard meta -->
<meta name="description" content="[Product Name] fine art photograph available as canvas, framed, and metal prints. Museum-quality prints from $[lowest-price].">

<!-- FOM-Lite Protocol -->
<meta name="content-protocol" content="ICP-Lite v1.0">
<meta name="ai:summary" content="[Product summary including subject, formats, ideal uses]">
<meta name="last-reviewed" content="2025-11-23">
<meta name="ai:product-category" content="[categories]">
<meta name="ai:use-cases" content="[room types, occasions]">

<!-- Open Graph -->
<meta property="og:title" content="[Product Name] | Flickers of Majesty">
<meta property="og:description" content="[Same as meta description]">
<meta property="og:image" content="https://www.flickersofmajesty.com/images/products/[product]-main.webp">
<meta property="og:url" content="https://www.flickersofmajesty.com/products/[product-slug]/">
<meta property="og:type" content="product">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Product Name]">
<meta name="twitter:description" content="[Same as meta description]">
<meta name="twitter:image" content="https://www.flickersofmajesty.com/images/products/[product]-main.webp">
```

---

## 💬 AI Breadcrumbs

### Required HTML Comments

```html
<!-- ai-breadcrumbs: product | [category] | [subject-matter] -->
<!-- ai-content-type: product-detail-page -->
<!-- ai-product-category: [categories] -->
<!-- ai-answer: [Product Name] is [description] available as [formats] -->
<!-- ai-fit-guidance: Good for: [list]. Not for: [list] -->
<!-- ai-use-cases: [room-types, occasions] -->
<!-- ai-price-range: $[low] - $[high] USD -->
```

**Example:**
```html
<!-- ai-breadcrumbs: product | landscape-photography | mountain-photography -->
<!-- ai-content-type: product-detail-page -->
<!-- ai-product-category: fine-art-photography, wall-art, landscape, mountain -->
<!-- ai-answer: Mountain Majesty is a fine art landscape photograph of Rocky Mountain sunrise, available as canvas, framed, and metal prints -->
<!-- ai-fit-guidance: Good for: dramatic landscapes, warm palettes, large spaces, nature lovers. Not for: minimalist decor, small spaces, cool color schemes -->
<!-- ai-use-cases: living-room, office, bedroom, waiting-room, gift-for-nature-lover -->
<!-- ai-price-range: $49 - $599 USD -->
```

---

## ✅ Product Page Checklist

Before publishing any product page:

- [ ] Minimum 3 product images (main, detail, room view)
- [ ] H1 + answer line present
- [ ] Fit-guidance section complete (good for / not for)
- [ ] Product specifications complete
- [ ] Minimum 3 FAQ items with schema
- [ ] 3-6 related products linked
- [ ] Product schema validated
- [ ] FAQ schema validated
- [ ] All meta tags present
- [ ] AI breadcrumbs present
- [ ] All images are WebP
- [ ] All links are absolute URLs
- [ ] Lighthouse score 90+
- [ ] Mobile responsive tested
- [ ] Keyboard navigation works

---

**See Also:**
- `/admin/claude/FOM-LITE_PROTOCOL.md` - Full protocol documentation
- `/standards/main-standards.md` - Global standards
- `/standards/category-standards.md` - Category page standards
