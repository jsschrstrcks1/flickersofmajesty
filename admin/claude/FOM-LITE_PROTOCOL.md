# FOM-Lite Protocol v1.0

**Flickers of Majesty Content Protocol**
**Version:** v1.0.lite
**Last Updated:** 2025-11-23
**Status:** Initial implementation

---

## 📖 Overview

**FOM-Lite** (Flickers of Majesty - Lite Protocol) is an AI-first, human-first content protocol designed to make photography and art e-commerce content more discoverable and useful for both AI assistants (ChatGPT, Claude, Gemini) and human customers.

### Core Philosophy

1. **AI-First:** Structure content so AI can accurately understand, cite, and recommend products
2. **Human-First:** NEVER compromise user experience for AI optimization
3. **Progressive Enhancement:** All AI features are additive, content works without them
4. **Hidden by Design:** AI-facing elements are invisible to users (meta tags, comments, JSON-LD)

### Relationship to ICP (Informed Consent Protocol)

FOM-Lite implements the principles of ICP-Lite v1.0 while being tailored specifically for photography e-commerce content. It extends ICP with domain-specific elements like:

- **Fit-guidance sections:** Who this product/style is for
- **Product specifications:** Dimensions, materials, framing options
- **Use case recommendations:** Room types, decor styles, gift occasions
- **Artist context:** Photography style, inspiration, technique

---

## 🎯 Implementation Levels

FOM-Lite has three progressive implementation levels. Each level builds on the previous one.

### Level 1: Meta Tags (FOUNDATIONAL)

**Required meta tags:**
```html
<meta name="content-protocol" content="ICP-Lite v1.0">
<meta name="ai:summary" content="Brief, factual summary for AI assistants (150-200 chars)">
<meta name="last-reviewed" content="2025-11-23">
```

**Optional meta tags:**
```html
<meta name="ai:target-audience" content="Home decorators, art collectors, gift shoppers">
<meta name="ai:primary-topics" content="Fine art photography, wall art, home decor">
<meta name="ai:product-category" content="landscape, portrait, abstract, nature, cityscape">
<meta name="ai:use-cases" content="living room, bedroom, office, gift">
```

**Implementation:**
```bash
# Add these meta tags to <head> section
# Between viewport and Open Graph tags
```

---

### Level 2: Content Structure (CORE IMPLEMENTATION)

#### Required Elements

**1. H1 with Answer Line**

Every page needs exactly ONE H1 that clearly states the page topic, followed by an "answer line" that summarizes what the page offers.

```html
<main id="main">
  <h1>Mountain Majesty Canvas Print</h1>
  <p class="answer-line">
    A breathtaking fine art photograph of sunrise over the Rocky Mountains,
    available as museum-quality canvas prints, framed prints, and metal prints.
    Perfect for living rooms, offices, and nature enthusiasts.
  </p>
</main>
```

**Purpose:**
- AI can extract the core product immediately
- Users understand offering within 3 seconds
- Search engines get clear content signals

**2. Fit-Guidance Section**

A dedicated section explaining WHO this product is for and who should look elsewhere.

```html
<section class="fit-guidance">
  <h2>Who This Print Is For</h2>

  <div class="fit-guidance-good">
    <h3>This print tends to fit if you:</h3>
    <ul>
      <li><strong>Love dramatic landscapes:</strong> Epic mountain vistas with golden hour lighting</li>
      <li><strong>Need large statement pieces:</strong> Available up to 60x40 inches</li>
      <li><strong>Prefer warm color palettes:</strong> Rich golds, oranges, deep blues</li>
      <li><strong>Decorating spacious rooms:</strong> Best impact in rooms with 10+ foot ceilings</li>
      <li><strong>Seeking nature-inspired calm:</strong> Creates serene, contemplative atmosphere</li>
    </ul>
  </div>

  <div class="fit-guidance-poor">
    <h3>Consider different if you:</h3>
    <ul>
      <li><strong>Prefer minimalist aesthetics:</strong> This is a bold, dramatic piece</li>
      <li><strong>Need small space art:</strong> Best appreciated at larger sizes</li>
      <li><strong>Want cool color schemes:</strong> Dominated by warm sunrise tones</li>
      <li><strong>Prefer abstract or modern:</strong> This is realistic landscape photography</li>
    </ul>
  </div>
</section>
```

**Purpose:**
- Helps customers self-select appropriately
- Reduces returns from mismatched expectations
- AI can accurately recommend based on customer needs
- Improves customer satisfaction

**3. Product Specifications**

Clear, structured product information for both humans and AI.

```html
<section class="product-specs">
  <h2>Product Specifications</h2>

  <dl class="specs-list">
    <dt>Available Formats:</dt>
    <dd>Canvas Print, Framed Print, Metal Print, Fine Art Paper</dd>

    <dt>Sizes:</dt>
    <dd>12x8", 18x12", 24x16", 36x24", 48x32", 60x40"</dd>

    <dt>Orientation:</dt>
    <dd>Horizontal (Landscape)</dd>

    <dt>Dominant Colors:</dt>
    <dd>Gold, Orange, Deep Blue, Warm Browns</dd>

    <dt>Style:</dt>
    <dd>Fine Art Landscape Photography</dd>

    <dt>Subject:</dt>
    <dd>Rocky Mountains at Sunrise</dd>

    <dt>Best For:</dt>
    <dd>Living Room, Office, Bedroom, Waiting Room</dd>
  </dl>
</section>
```

**4. FAQ Section**

3-5 substantive questions with comprehensive answers, using FAQ schema.

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

  <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">What's the difference between canvas and metal prints?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p><strong>Canvas:</strong> Traditional fine art feel, textured surface, warm tones. Best for classic/traditional decor.</p>
        <p><strong>Metal:</strong> Ultra-modern, vibrant colors, glossy finish, waterproof. Best for contemporary/modern spaces.</p>
      </div>
    </div>
  </div>

  <!-- 1-3 more FAQ items -->
</section>
```

**FAQ Schema in JSON-LD:**
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What size should I choose for my space?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For best visual impact, choose a size where the print occupies 50-75% of your available wall width. Small walls (4-6 feet): 24x16 or 36x24. Medium walls (6-8 feet): 36x24 or 48x32. Large walls (8+ feet): 48x32 or 60x40."
    }
  }]
}
</script>
```

**5. AI Breadcrumbs (HTML Comments)**

Invisible-to-humans context markers that help AI understand page structure.

```html
<!-- ai-breadcrumbs: product | landscape-photography | mountain-photography -->
<!-- ai-content-type: product-detail-page -->
<!-- ai-product-category: fine-art-photography, wall-art, home-decor -->
<!-- ai-answer: Mountain Majesty is a fine art landscape photograph of Rocky Mountain sunrise, available as canvas, framed, and metal prints -->
<!-- ai-fit-guidance: Good for: dramatic landscapes, warm palettes, large spaces, nature lovers. Not for: minimalist decor, small spaces, cool color schemes -->
<!-- ai-use-cases: living-room, office, bedroom, waiting-room, gift-for-nature-lover -->
```

---

### Level 3: Progressive Enhancement (PLANNED)

#### No-JS Baseline

Ensure all pages work with JavaScript disabled using `.no-js` pattern:

```html
<html class="no-js" lang="en">
<head>
  <script>document.documentElement.classList.remove('no-js');</script>
  <style>
    .no-js .fallback { display: block; }
    .no-js .js-only { display: none; }
  </style>
</head>
```

#### Static Fallbacks for Dynamic Content

**Size Selector (JavaScript-enhanced):**
```html
<div class="size-selector">
  <!-- Static fallback -->
  <div class="fallback no-js-visible">
    <form action="/cart/add" method="post">
      <label for="size">Choose Size:</label>
      <select name="size" id="size">
        <option value="12x8">12x8" - $49</option>
        <option value="18x12">18x12" - $79</option>
        <option value="24x16">24x16" - $129</option>
        <option value="36x24">36x24" - $249</option>
        <option value="48x32">48x32" - $399</option>
        <option value="60x40">60x40" - $599</option>
      </select>
      <button type="submit">Add to Cart</button>
    </form>
  </div>

  <!-- Enhanced version loads via JavaScript -->
  <div class="js-only" data-product-selector="mountain-majesty"></div>
</div>
```

**Image Gallery (JavaScript-enhanced):**
```html
<section class="product-images">
  <!-- Static fallback -->
  <div class="fallback no-js-visible">
    <figure>
      <img src="/images/products/mountain-majesty-main.webp"
           alt="Mountain Majesty fine art photograph - main view"
           width="1200" height="800">
      <figcaption>Mountain Majesty - Main View</figcaption>
    </figure>
    <p><em>Enable JavaScript for image gallery with zoom.</em></p>
  </div>

  <!-- Enhanced gallery loads via JavaScript -->
  <div class="js-only" data-image-gallery="mountain-majesty"></div>
</section>
```

---

## 📋 Content Patterns by Page Type

### Product Detail Pages

**Required sections (in order):**
1. Product image gallery
2. H1 + answer line
3. Price and size selector
4. Fit-guidance section
5. Product specifications
6. Detailed description
7. FAQ section
8. Related products
9. Customer reviews (when available)

**Example structure:**
```html
<main id="main">
  <!-- Product images -->
  <section class="product-images">...</section>

  <!-- Product info -->
  <div class="product-info">
    <h1>Mountain Majesty Canvas Print</h1>
    <p class="answer-line">...</p>

    <!-- Pricing -->
    <div class="product-pricing">
      <p class="price">From $49.00</p>
    </div>

    <!-- Size/format selector -->
    <div class="product-options">...</div>
  </div>

  <!-- Fit-guidance -->
  <section class="fit-guidance">...</section>

  <!-- Product specs -->
  <section class="product-specs">...</section>

  <!-- Description -->
  <section class="product-description">...</section>

  <!-- FAQ -->
  <section class="faq">...</section>

  <!-- Related products -->
  <section class="related-products">...</section>
</main>
```

### Category Pages

**Required sections:**
1. H1 + answer line (what this category offers)
2. Category hero image
3. Fit-guidance (who shops this category)
4. Product grid
5. Category description
6. FAQ section

**Example for "Mountain Landscapes":**
```html
<main id="main">
  <h1>Mountain Landscape Photography</h1>
  <p class="answer-line">
    Dramatic fine art photographs of majestic mountain ranges, alpine sunrises,
    and rugged peaks. Available as canvas prints, framed prints, and metal prints
    in sizes from 12x8" to 60x40". Perfect for creating bold, inspiring spaces.
  </p>

  <section class="fit-guidance">
    <h2>Who Shops Mountain Landscapes</h2>
    <!-- Good for/Not for lists -->
  </section>

  <!-- Product grid -->
  <section class="product-grid">
    <!-- Product cards -->
  </section>

  <!-- Category description -->
  <section class="category-description">...</section>

  <section class="faq">
    <h2>Frequently Asked Questions</h2>
    <!-- FAQ items -->
  </section>
</main>
```

### Homepage

**Required sections:**
1. Hero section with featured image
2. H1 + answer line (what the site offers)
3. Featured collections
4. Best sellers
5. About section (brief)
6. FAQ section (general questions)

### About Page

**Required sections:**
1. H1 + answer line
2. Artist bio
3. Photography philosophy
4. Production quality commitment
5. FAQ section

---

## 🎨 CSS Classes for FOM-Lite

Standard CSS classes for Level 2 implementation:

```css
/* Answer line styling */
.answer-line {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 1rem 0 2rem;
  max-width: 70ch;
}

/* Fit-guidance section */
.fit-guidance {
  background: var(--bg-subtle);
  border-left: 4px solid var(--accent);
  padding: 1.5rem;
  margin: 2rem 0;
  border-radius: 4px;
}

.fit-guidance-good h3 {
  color: var(--success);
}

.fit-guidance-poor h3 {
  color: var(--warning);
}

/* Product specs */
.product-specs {
  margin: 2rem 0;
}

.specs-list {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0.5rem 1.5rem;
  max-width: 600px;
}

.specs-list dt {
  font-weight: 600;
  color: var(--text-primary);
}

.specs-list dd {
  color: var(--text-secondary);
  margin: 0;
}

/* FAQ section */
.faq {
  margin: 3rem 0;
}

.faq-item {
  margin: 2rem 0;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-item h3 {
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
  color: var(--heading);
}

/* Progressive enhancement */
.no-js .fallback {
  display: block;
}

.no-js .js-only {
  display: none;
}

.no-js-visible {
  display: none;
}

.no-js .no-js-visible {
  display: block;
}
```

---

## 📐 Schema.org Structured Data

### Product Schema

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Mountain Majesty Canvas Print",
  "description": "Fine art photograph of sunrise over the Rocky Mountains, available as museum-quality canvas prints.",
  "image": "https://www.flickersofmajesty.com/images/products/mountain-majesty-main.webp",
  "brand": {
    "@type": "Brand",
    "name": "Flickers of Majesty"
  },
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "49.00",
    "highPrice": "599.00",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "category": "Fine Art Photography > Landscape > Mountain"
}
</script>
```

### FAQPage Schema

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
        "text": "For best visual impact, choose a size where the print occupies 50-75% of your available wall width..."
      }
    }
  ]
}
</script>
```

### BreadcrumbList Schema

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.flickersofmajesty.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Mountain Landscapes",
      "item": "https://www.flickersofmajesty.com/categories/mountain-landscapes/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Mountain Majesty",
      "item": "https://www.flickersofmajesty.com/products/mountain-majesty/"
    }
  ]
}
</script>
```

---

## ✅ Implementation Plan

### Phase 1: Foundation (Week 1)

**Create:**
- [ ] Base HTML template with Level 1 meta tags
- [ ] CSS for FOM-Lite components
- [ ] Homepage with protocol applied
- [ ] One sample product page (full Level 2 implementation)
- [ ] One category page

### Phase 2: Product Pages (Week 2-3)

**Apply Level 2 to:**
- [ ] All product pages
- [ ] Product image galleries
- [ ] Size/format selectors
- [ ] FAQ sections for each product

### Phase 3: Category & Info Pages (Week 4)

**Complete:**
- [ ] All category pages
- [ ] About page
- [ ] Contact page
- [ ] Shipping/Returns policy pages

### Phase 4: Progressive Enhancement (Week 5-6)

**Implement:**
- [ ] No-JS baseline
- [ ] Static fallbacks for all interactive elements
- [ ] Test with JavaScript disabled
- [ ] Verify AI can scrape all content

---

## 📊 Success Metrics

### AI Citation Tracking

**Monitor:**
- ChatGPT product recommendations
- Google SGE shopping results
- AI assistant gift suggestions
- Citation accuracy

### User Engagement

**Measure:**
- Time on product pages
- Fit-guidance scroll depth
- FAQ interaction
- Bounce rate
- Add-to-cart conversion

### Search Performance

**Monitor:**
- Impressions for product queries
- Rich snippet appearances
- Click-through rate
- Product ranking

### Technical Health

**Verify:**
- Page load time (<2.5s LCP)
- Accessibility score (100 Lighthouse)
- Schema validation
- Mobile responsiveness

---

## 🚫 What NOT to Do

### Content Mistakes

❌ **DON'T optimize for AI at expense of humans**
- No keyword stuffing
- Keep language natural and helpful
- Maintain conversational FAQ answers

❌ **DON'T add visible AI-facing content**
- No "optimized for AI" badges
- No redundant summaries
- No SEO-style clutter

❌ **DON'T compromise accessibility**
- Maintain semantic HTML
- Keep keyboard navigation working
- Support screen readers

### Technical Mistakes

❌ **DON'T break existing functionality**
- Validate all schema changes
- Don't break product selectors
- Don't block checkout process

❌ **DON'T add blocking scripts**
- Keep JavaScript async/deferred
- Maintain progressive enhancement
- Support no-JS scenarios

❌ **DON'T bloat page weight**
- Optimize images (WebP)
- Keep meta tags concise
- Minimize unnecessary code

---

## 📚 Related Documentation

### Internal Resources
- **Main standards:** `/standards/main-standards.md`
- **Product standards:** `/standards/product-standards.md`
- **Category standards:** `/standards/category-standards.md`

### External References
- **Schema.org Product:** https://schema.org/Product
- **Schema.org FAQPage:** https://schema.org/FAQPage
- **Google Product guidelines:** https://developers.google.com/search/docs/appearance/structured-data/product

---

**Remember:** FOM-Lite exists to serve both AI assistants AND human customers. If ever in conflict, **humans win**. Every time.

---

**Domain:** flickersofmajesty.com
**Last Updated:** 2025-11-23
