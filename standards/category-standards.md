# Category Page Standards - Flickers of Majesty

**Version:** 1.0
**Last Updated:** 2025-11-23
**Applies To:** All category and collection pages

---

## 📐 Page Structure

### Required Sections (In Order)

1. Category hero section (H1 + answer line + hero image)
2. Fit-guidance section (who shops this category)
3. Product grid
4. Category description
5. FAQ section

---

## 📄 Hero Section

### H1 + Answer Line

**H1 Format:** `[Category Name] [Content Type]`

**Examples:**
- `Mountain Landscape Photography`
- `Abstract Fine Art Prints`
- `Coastal Photography Collection`
- `Black and White Photography`

**Answer Line Requirements:**
- 150-250 characters
- Include: Category theme, available formats, ideal customers/uses
- Natural language, descriptive

**Example:**
```html
<section class="category-hero">
  <div class="hero-content">
    <h1>Mountain Landscape Photography</h1>
    <p class="answer-line">
      Dramatic fine art photographs of majestic mountain ranges, alpine sunrises,
      and rugged peaks. Available as canvas prints, framed prints, and metal prints
      in sizes from 12x8" to 60x40". Perfect for creating bold, inspiring spaces.
    </p>
  </div>
  <img src="https://www.flickersofmajesty.com/images/categories/mountain-landscapes-hero.webp"
       alt="Mountain landscape photography collection"
       class="hero-image"
       fetchpriority="high">
</section>
```

---

## 🎯 Fit-Guidance Section

### Required Structure

```html
<section class="fit-guidance">
  <h2>Who Shops [Category Name]</h2>

  <div class="fit-guidance-good">
    <h3>This category tends to fit if you:</h3>
    <ul>
      <li><strong>[Characteristic]:</strong> [Explanation]</li>
      <!-- 4-6 items -->
    </ul>
  </div>

  <div class="fit-guidance-poor">
    <h3>Explore other categories if you:</h3>
    <ul>
      <li><strong>[Characteristic]:</strong> [Recommended category]</li>
      <!-- 3-4 items -->
    </ul>
  </div>
</section>
```

### Fit-Guidance Guidelines

**Good For items should cover:**
- Decor style preferences
- Color palette tendencies
- Emotional tone/atmosphere
- Space types (residential, commercial)
- Typical use cases

**Not For items should:**
- Redirect to more suitable categories
- Explain why different category might fit better
- Link to alternative categories

**Example:**
```html
<section class="fit-guidance">
  <h2>Who Shops Mountain Landscape Photography</h2>

  <div class="fit-guidance-good">
    <h3>This category tends to fit if you:</h3>
    <ul>
      <li><strong>Love bold natural landscapes:</strong> Dramatic vistas, epic scale, powerful compositions</li>
      <li><strong>Prefer warm earth tones:</strong> Sunrise golds, sunset oranges, deep blues and greens</li>
      <li><strong>Decorating larger spaces:</strong> These images shine at 36x24" and larger</li>
      <li><strong>Seeking inspiration and calm:</strong> Nature's majesty creates contemplative atmosphere</li>
      <li><strong>Outfitting offices or lobbies:</strong> Professional, universally appealing subjects</li>
    </ul>
  </div>

  <div class="fit-guidance-poor">
    <h3>Explore other categories if you:</h3>
    <ul>
      <li><strong>Prefer coastal scenes:</strong> See our <a href="https://www.flickersofmajesty.com/categories/coastal/">Coastal Photography</a> collection</li>
      <li><strong>Want abstract or artistic:</strong> Browse <a href="https://www.flickersofmajesty.com/categories/abstract/">Abstract Fine Art</a></li>
      <li><strong>Need black and white:</strong> Check our <a href="https://www.flickersofmajesty.com/categories/black-white/">Black & White</a> collection</li>
    </ul>
  </div>
</section>
```

---

## 🖼️ Product Grid

### Grid Requirements

- **Minimum products:** 6 per category
- **Optimal products:** 12-24 per category
- **Grid layout:** Responsive (1 column mobile, 2 tablet, 3-4 desktop)
- **Image aspect ratio:** Consistent within category when possible

### Product Card Structure

```html
<div class="product-grid">
  <article class="product-card">
    <a href="https://www.flickersofmajesty.com/products/mountain-majesty/">
      <div class="product-image">
        <img src="https://www.flickersofmajesty.com/images/products/mountain-majesty-thumb.webp"
             alt="Mountain Majesty fine art photograph"
             width="400" height="267"
             loading="lazy">
      </div>
      <div class="product-info">
        <h3>Mountain Majesty</h3>
        <p class="product-description">Rocky Mountains at sunrise</p>
        <p class="price">From $49.00</p>
      </div>
    </a>
  </article>
  <!-- More product cards -->
</div>
```

### Product Sorting/Filtering (Optional Enhancement)

**If implementing filters:**
- By size (all sizes, small, medium, large)
- By price range
- By color palette (warm, cool, neutral)
- By orientation (landscape, portrait, square)

---

## 📝 Category Description

### Requirements

- **Length:** 200-400 words
- **Placement:** Below product grid
- **Content:** Expand on category theme, photography style, use cases

**Example:**
```html
<section class="category-description">
  <h2>About Mountain Landscape Photography</h2>

  <p>
    Mountain landscapes represent some of nature's most awe-inspiring scenes.
    This collection features dramatic photographs of mountain ranges from around
    the world, capturing the interplay of light, shadow, and atmosphere that makes
    these environments so compelling.
  </p>

  <p>
    Each photograph in this collection is carefully composed to emphasize the
    grand scale and raw beauty of mountain environments. Whether it's the golden
    glow of sunrise illuminating distant peaks or the mysterious drama of
    storm clouds gathering over alpine ridges, these images bring the majesty
    of the mountains into your space.
  </p>

  <h3>Perfect For</h3>
  <ul>
    <li>Living rooms and great rooms that benefit from bold, inspiring focal points</li>
    <li>Office environments seeking professional, universally appealing art</li>
    <li>Mountain homes and cabins connecting interior spaces to surrounding landscapes</li>
    <li>Waiting rooms and reception areas creating calm, contemplative atmospheres</li>
    <li>Gifts for hiking enthusiasts, nature lovers, and outdoor adventurers</li>
  </ul>

  <h3>Print Recommendations</h3>
  <p>
    Mountain landscapes are best appreciated at larger sizes (36x24" and above)
    where the epic scale and fine details can be fully experienced. Canvas prints
    offer a traditional fine art feel, while metal prints provide exceptional
    sharpness and modern aesthetic. For maximum impact, consider framed prints
    in complementary wood tones.
  </p>
</section>
```

---

## ❓ FAQ Section

### Required FAQs (Minimum 3)

**Category-specific questions:**

1. "What size works best for [category] prints?"
2. "What rooms are [category] prints best suited for?"
3. "What print format do you recommend for [category]?"

**Example:**
```html
<section class="faq">
  <h2>Frequently Asked Questions</h2>

  <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">What size works best for mountain landscape prints?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>
          Mountain landscapes are most impactful at larger sizes (36x24" and above)
          where viewers can appreciate the grand scale and fine details. For rooms
          with high ceilings (10+ feet), consider our largest sizes (48x32" or 60x40")
          to create a truly immersive focal point. Smaller sizes (24x16" or under)
          work well for office spaces or as part of gallery walls.
        </p>
      </div>
    </div>
  </div>

  <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
    <h3 itemprop="name">What rooms are mountain landscape prints best suited for?</h3>
    <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
      <div itemprop="text">
        <p>
          Mountain landscapes excel in living rooms, offices, and lobbies where they
          create inspiring focal points. The warm earth tones work beautifully in
          spaces with natural wood finishes or stone accents. These prints are also
          ideal for waiting rooms, conference rooms, and hotel lobbies where they
          project professionalism and natural serenity.
        </p>
      </div>
    </div>
  </div>

  <!-- Additional FAQ -->
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
      "name": "What size works best for mountain landscape prints?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mountain landscapes are most impactful at larger sizes (36x24 and above) where viewers can appreciate the grand scale and fine details..."
      }
    }
  ]
}
</script>
```

---

## 📐 Category Schema

### Required CollectionPage Schema

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "[Category Name]",
  "description": "[Category description from answer line]",
  "url": "https://www.flickersofmajesty.com/categories/[category-slug]/",
  "image": "https://www.flickersofmajesty.com/images/categories/[category]-hero.webp",
  "breadcrumb": {
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
        "name": "Categories",
        "item": "https://www.flickersofmajesty.com/categories/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "[Category Name]",
        "item": "https://www.flickersofmajesty.com/categories/[category-slug]/"
      }
    ]
  }
}
</script>
```

---

## 🏷️ Meta Tags (Category-Specific)

### Required Meta Tags

```html
<!-- Standard meta -->
<meta name="description" content="[Category Name] fine art photography prints. Browse [number] stunning [subject] photographs available as canvas, framed, and metal prints.">

<!-- FOM-Lite Protocol -->
<meta name="content-protocol" content="ICP-Lite v1.0">
<meta name="ai:summary" content="[Category summary including theme, number of products, formats available]">
<meta name="last-reviewed" content="2025-11-23">
<meta name="ai:primary-topics" content="Fine art photography, [category theme]">
<meta name="ai:product-category" content="[category-keywords]">

<!-- Open Graph -->
<meta property="og:title" content="[Category Name] | Flickers of Majesty">
<meta property="og:description" content="[Same as meta description]">
<meta property="og:image" content="https://www.flickersofmajesty.com/images/categories/[category]-hero.webp">
<meta property="og:url" content="https://www.flickersofmajesty.com/categories/[category-slug]/">
<meta property="og:type" content="website">
```

---

## 💬 AI Breadcrumbs

### Required HTML Comments

```html
<!-- ai-breadcrumbs: category | [category-name] | [theme-keywords] -->
<!-- ai-content-type: category-page -->
<!-- ai-product-count: [number] -->
<!-- ai-answer: [Category name] features [number] fine art photographs of [subject] available as [formats] -->
<!-- ai-fit-guidance: Good for: [list]. Consider alternatives: [list with links] -->
<!-- ai-use-cases: [room-types, decor-styles, occasions] -->
```

**Example:**
```html
<!-- ai-breadcrumbs: category | mountain-landscapes | landscape-photography -->
<!-- ai-content-type: category-page -->
<!-- ai-product-count: 18 -->
<!-- ai-answer: Mountain Landscape Photography features 18 dramatic fine art photographs of mountain ranges available as canvas, framed, and metal prints -->
<!-- ai-fit-guidance: Good for: bold natural landscapes, warm earth tones, larger spaces, inspiring atmospheres. Alternatives: coastal (ocean), abstract (artistic), black-white (classic) -->
<!-- ai-use-cases: living-room, office, lobby, waiting-room, conference-room, mountain-home -->
```

---

## 🗂️ Standard Categories

### Recommended Category Structure

**By Subject:**
- Mountain Landscapes
- Coastal Photography
- Forest & Woodland
- Desert & Arid Landscapes
- Urban & Cityscape
- Wildlife & Nature

**By Style:**
- Abstract Fine Art
- Black & White Photography
- Minimalist Photography
- Dramatic Landscapes

**By Color:**
- Warm Tones Collection
- Cool Tones Collection
- Neutral & Monochrome

**By Use Case:**
- Large Format Prints (36"+ wide)
- Office & Commercial Spaces
- Bedroom Art
- Living Room Statement Pieces

---

## ✅ Category Page Checklist

Before publishing any category page:

- [ ] H1 + answer line present
- [ ] Category hero image (WebP, optimized)
- [ ] Fit-guidance section complete
- [ ] Minimum 6 products in grid
- [ ] Product cards link to product pages
- [ ] Category description (200-400 words)
- [ ] Minimum 3 FAQ items with schema
- [ ] CollectionPage schema validated
- [ ] FAQ schema validated
- [ ] All meta tags present
- [ ] AI breadcrumbs present
- [ ] All images are WebP
- [ ] All links are absolute URLs
- [ ] Lighthouse score 90+
- [ ] Mobile responsive tested
- [ ] Product grid responsive at all breakpoints

---

**See Also:**
- `/admin/claude/FOM-LITE_PROTOCOL.md` - Full protocol documentation
- `/standards/main-standards.md` - Global standards
- `/standards/product-standards.md` - Product page standards
