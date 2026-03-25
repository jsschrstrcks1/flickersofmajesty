---
name: seo-schema-audit
description: "Validates JSON-LD structured data, Open Graph, Twitter Cards, and AI meta tags for photography e-commerce content"
version: 1.0.0
---

# SEO Schema Audit — Photography E-Commerce

## Purpose

Audit and validate structured data markup across Flickers of Majesty photography e-commerce pages. This skill ensures JSON-LD schemas, Open Graph tags, Twitter Cards, and AI-oriented meta tags are complete, accurate, and compliant with schema.org specifications and ICP-2 requirements.

## When to Fire

- When creating or editing any HTML page or template
- When adding or modifying JSON-LD structured data
- When updating Open Graph or Twitter Card meta tags
- When reviewing pages for SEO compliance
- When prompted with `/seo-schema-audit` or asked to audit structured data
- Before any page goes live or is merged to production
- When adding or updating product listings

## Instructions

### 1. JSON-LD Structured Data Validation

Validate all JSON-LD `<script type="application/ld+json">` blocks against schema.org specs. Focus on these schema types relevant to photography e-commerce:

#### Product Schema
**Required properties:**
- `@type`: "Product"
- `name`: Must match the visible product title on the page
- `image`: At least one image URL (photography products should have multiple high-quality images)
- `description`: Must be present and match visible product description
- `sku`: Unique product identifier
- `brand`: Must include `@type: "Brand"` and `name`

**Required nested Offer schema:**
- `@type`: "Offer"
- `price`: Numeric value, no currency symbols
- `priceCurrency`: Must be valid ISO 4217 code (e.g., "USD")
- `availability`: Must use schema.org enumeration (e.g., "https://schema.org/InStock")
- `url`: Must match the canonical URL of the product page
- `priceValidUntil`: ISO 8601 date format, must not be in the past
- `seller`: Should reference the organization

**Recommended properties:**
- `aggregateRating`: If reviews are displayed, must include `ratingValue`, `reviewCount`, `bestRating`
- `review`: Individual reviews with `author`, `datePublished`, `reviewBody`, `reviewRating`
- `material`: For prints (e.g., "Canvas", "Metallic Paper", "Acrylic")
- `size`: Dimensions of the print or product
- `color`: If applicable to the product variant
- `category`: Photography genre (e.g., "Landscape Photography", "Nature Photography")

#### Product Variant Handling
- Each product variant (size, material, frame option) should have its own `Offer` within the `offers` array
- Each variant Offer must have distinct `sku`, `price`, and `availability`
- Use `additionalProperty` with `PropertyValue` to describe variant attributes

#### Article Schema (for blog/portfolio content)
**Required properties:**
- `@type`: "Article" or "BlogPosting"
- `headline`: Must match visible heading
- `author`: Must include `@type` and `name`
- `datePublished`: ISO 8601 format
- `dateModified`: ISO 8601 format, must be >= `datePublished`
- `publisher`: Must include `@type: "Organization"`, `name`, and `logo`
- `image`: At least one image URL

**Recommended properties:**
- `description`: 50-160 characters
- `mainEntityOfPage`: Should reference canonical URL
- `articleSection`: E.g., "Photography Tips", "Behind the Lens", "Gallery"

### 2. Nested Schema Handling

- Product pages with multiple Offers must wrap them in an `offers` array or `AggregateOffer`
- If `AggregateOffer` is used, `lowPrice`, `highPrice`, `priceCurrency`, and `offerCount` are required
- When a Product page also contains Article-like content (e.g., the story behind the photo), use `@graph` to properly separate and link schemas via `@id`
- Validate that nested schemas do not duplicate or contradict parent schema data
- ImageGallery or ImageObject schemas should reference actual displayed images

### 3. Open Graph Validation

Check for all required `<meta property="og:...">` tags:

- `og:title` — Must be present, 60-90 characters recommended
- `og:description` — Must be present, 100-200 characters recommended
- `og:image` — Must be a valid, absolute URL; minimum 1200x630px recommended; for products use the primary product image
- `og:url` — Must match the canonical URL exactly
- `og:type` — Must be "product" for product pages, "article" for blog posts, "website" for other pages
- `og:site_name` — Should be "Flickers of Majesty" or the site's proper name
- `og:price:amount` — Required on product pages
- `og:price:currency` — Required on product pages, ISO 4217 code

### 4. Twitter Card Validation

Check for all required `<meta name="twitter:...">` tags:

- `twitter:card` — Must be "summary_large_image" (preferred for photography) or "summary"
- `twitter:title` — Must be present
- `twitter:description` — Must be present
- `twitter:image` — Must be a valid, absolute URL; use high-quality product/portfolio image

### 5. AI Meta Tags — ICP-2 Compliance

Validate presence and quality of AI-oriented meta tags:

- `<meta name="ai:summary">` — Must be present; concise summary of page content (1-2 sentences)
- `<meta name="ai:target-audience">` — Must be present; should describe the intended buyer (e.g., "art collectors seeking fine art nature photography prints")
- Content of these tags must accurately reflect the page's actual content

### 6. Stale Content Detection

Check for `<meta name="last-reviewed">` or `dateModified` in JSON-LD:

- Flag any page where `last-reviewed` or `dateModified` is older than 90 days from the current date
- Report the exact date found and how many days stale it is
- Product pages with `priceValidUntil` in the past must be flagged as critical
- Seasonal collections should be reviewed before and after their relevant season

### 7. Canonical URL Verification

- `<link rel="canonical">` must be present on every page
- The canonical URL must match the actual file path / route of the page
- `og:url` must match the canonical URL
- `mainEntityOfPage` in JSON-LD should reference the canonical URL
- Product variant pages should use the main product page as canonical unless variants have unique content
- No trailing slashes unless the site convention uses them consistently

### 8. Data Type Validation

- **Dates**: All dates must be valid ISO 8601 (YYYY-MM-DD or full datetime)
- **URLs**: All URLs in schema must be absolute and reachable
- **Currency**: Must use ISO 4217 codes (e.g., "USD"); price must be numeric with no symbols
- **Ratings**: `ratingValue` must be within `bestRating`/`worstRating` bounds
- **Availability**: Must use full schema.org URL (e.g., "https://schema.org/InStock", not just "InStock")

### 9. Semantic Accuracy Checks

- Schema `name` must match the visible product title or page heading
- Schema `description` should align with meta description and visible content
- Schema `image` URLs should reference images actually displayed on the page
- Product `price` in schema must match the displayed price exactly
- Product `availability` must reflect actual stock status
- Author information must match any visible byline or photographer credit
- Watch for conflicting information between schema markup and displayed page content
- Photography products: verify `image` references are high-resolution originals, not thumbnails

### 10. Reporting Format

For each page audited, produce a report structured as:

```
## Schema Audit: [Page Title]

### Schemas Found
- [List each schema type detected]

### Errors (must fix)
- [ ] [Error description with line reference]

### Warnings (should fix)
- [ ] [Warning description with recommendation]

### Passed Checks
- [x] [Check description]
```

Prioritize errors over warnings. Group findings by schema type. For Product pages, always verify the complete Offer chain.

---

*Soli Deo Gloria*
