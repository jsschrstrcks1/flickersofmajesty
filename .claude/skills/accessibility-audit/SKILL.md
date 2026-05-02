---
name: accessibility-audit
description: "Audits WCAG 2.1 AA compliance across photography e-commerce pages — validates image alt text for photographs, color contrast, heading hierarchy, ARIA labels, keyboard-accessible purchase flows, and screen reader compatibility"
version: 1.0.0
---

# Accessibility Audit — Photography E-Commerce

## Purpose

Audit and enforce WCAG 2.1 AA compliance across all flickersofmajesty pages. This skill validates image alt text (critical for a photography site where images are the product), color contrast ratios, heading hierarchy, ARIA labeling, keyboard-accessible purchase flows, form accessibility, and screen reader compatibility.

## When to Fire

- When creating or editing any HTML page or template
- When adding or modifying product images, gallery pages, or print option forms
- When building or updating purchase flows, cart, or checkout components
- When reviewing pages for accessibility compliance
- When prompted with `/accessibility-audit` or asked to check accessibility
- Before any page goes live or is merged to production
- When editing CSS that affects color, font size, or focus styles

## Instructions

### 1. Image Alt Text Validation

On a photography e-commerce site, images ARE the product. Alt text must describe what the photograph actually depicts so that a screen reader user can make an informed purchase decision.

**Rules:**
- Every `<img>` MUST have an `alt` attribute — missing `alt` is a WCAG failure
- Product photography alt text must describe the actual photograph content: subject, setting, mood, and key visual elements (e.g., "Golden hour light filtering through oak trees along a forest path in autumn, warm amber and deep green tones" not "nature photo" or "print-017")
- Alt text must serve as a purchase-worthy description — a customer who cannot see the image should understand what they are buying
- Alt text should not begin with "Image of" or "Photo of" — screen readers already announce it as an image
- Gallery thumbnails must have alt text that distinguishes each photograph from its neighbors
- Decorative UI elements (borders, spacing images, background textures) must use `alt=""`
- For photographs with text overlays, the alt text must include the overlay text content

**Product page specifics:**
- Hero/featured photograph: detailed description including subject, composition, lighting, and color palette (40-120 characters)
- Thumbnail variants (if showing the same print in different sizes/frames): alt text should indicate the variant (e.g., "Forest path photograph displayed in 16x20 white matte frame")
- Lifestyle/mockup images showing prints in room settings: describe the room context and the print placement
- If a photograph is available in multiple crops or orientations, each variant needs distinct alt text

**Flag these violations:**
- `<img>` with no `alt` attribute — **Critical**
- Product image with generic alt text ("photo", "print", "image-1") — **Critical**
- Product image with filename as alt text ("DSC_4829.jpg", "IMG_0372.png") — **Critical**
- Alt text that does not describe the photograph's visual content — **Critical** (this is a purchase-blocking accessibility failure)
- Alt text exceeding 150 characters without an `aria-describedby` companion for extended description — **Warning**

### 2. Color Contrast Ratio Validation

Validate that all text meets WCAG 2.1 AA contrast requirements against its background.

**Minimum ratios:**
- **Normal text** (below 18pt / 14pt bold): **4.5:1** contrast ratio
- **Large text** (18pt+ or 14pt+ bold): **3:1** contrast ratio
- **UI components and graphical objects**: **3:1** contrast ratio against adjacent colors

**What to check in CSS:**
- `color` against `background-color` on the same element or nearest ancestor with a background
- Text over background images or gradients — ensure sufficient contrast across all areas where text appears
- Hover, focus, and active states — contrast must be maintained in all interactive states
- Disabled states are exempt but should still be distinguishable

**Photography e-commerce specific checks:**
- Product titles and prices overlaid on or adjacent to photographs — contrast must be maintained regardless of the photograph's tonal range
- If text overlays a photograph directly, ensure a semi-transparent background or text shadow provides reliable contrast
- Print option labels (size, frame, matte) against their container backgrounds
- Cart item names and prices
- Checkout form labels and input text
- Sale/discount badges and promotional text
- Gallery navigation controls against their backgrounds
- "Add to cart" and "Buy now" button text against button backgrounds

**Flag these violations:**
- Any normal text below 4.5:1 ratio — **Critical**
- Any large text below 3:1 ratio — **Critical**
- Text overlaid on photographs without a contrast-ensuring background layer — **Critical**
- Placeholder text with insufficient contrast — **Warning**
- Focus indicators that do not meet 3:1 against adjacent colors — **Critical**

### 3. Heading Hierarchy Validation

Verify that heading levels follow a logical, sequential order with no skipped levels.

**Rules:**
- Each page must have exactly one `<h1>`
- Headings must not skip levels: `h1` → `h2` → `h3` is valid; `h1` → `h3` is a **violation**
- Heading levels can decrease by more than one at section boundaries but must not skip going deeper
- Headings must not be used solely for visual styling — if text looks like a heading but is a `<p>` with large font, flag it
- If text is styled as a heading visually but uses `<div>` or `<span>`, flag as a violation

**Product page heading structure:**
- `h1` = photograph title or collection name
- `h2` = major sections (Print Options, About This Photograph, Shipping, Reviews)
- `h3` = subsections within those areas (Size Options, Frame Options, Matte Options under Print Options)
- Print option groups must not use `h4` or `h5` directly under `h1` — maintain the hierarchy through `h2` → `h3`
- Gallery/collection pages: `h1` = collection name, `h2` = individual photograph titles within the gallery

**Flag these violations:**
- Multiple `<h1>` elements on a single page — **Critical**
- Skipped heading level (e.g., `h1` → `h3`, `h2` → `h4`) — **Critical**
- Heading used purely for styling without semantic meaning — **Warning**
- Print options section lacking proper heading structure — **Warning**

### 4. ARIA Labels on Interactive Elements

Validate that all interactive components have proper ARIA labeling for assistive technology.

**Rules for all interactive elements:**
- Every interactive element must have an accessible name via `aria-label`, `aria-labelledby`, or visible `<label>`
- `aria-label` must describe the action, not the element type
- `aria-labelledby` must reference an existing element `id` on the page
- `role` attributes must be used correctly per WAI-ARIA spec
- Custom widgets must declare `role`, `aria-label`, and relevant states

**Purchase flow — mandatory checks:**
- Print size selector: must use proper `role="radiogroup"` or `role="listbox"` with `aria-label="Select print size"`
- Frame option selector: must have `aria-label` and proper selection state (`aria-selected` or `aria-checked`)
- Quantity controls: increment/decrement buttons must have `aria-label` ("Increase quantity", "Decrease quantity") and the quantity value must be announced
- "Add to cart" button: must have clear accessible name; if it updates dynamically, use `aria-live` to announce the update
- Cart: item list must be structured for screen readers; removal buttons must identify which item they remove (e.g., `aria-label="Remove Forest Path print from cart"`)
- Checkout form: all steps must be labeled; progress indicators must use `aria-current="step"`

**Image gallery interactions:**
- Gallery navigation (next/previous) must have `aria-label` ("Next photograph", "Previous photograph")
- Lightbox/modal must use `role="dialog"` and `aria-modal="true"` with `aria-label`
- Zoom controls must have accessible names
- Gallery filter/sort controls must have labels and announce results

**Flag these violations:**
- Interactive element with no accessible name — **Critical**
- `aria-labelledby` referencing a nonexistent `id` — **Critical**
- Cart/checkout dynamic updates without `aria-live` — **Critical**
- Incorrect `role` usage — **Warning**

### 5. Keyboard Navigation Paths

Verify that the entire purchase flow and all gallery interactions are fully operable via keyboard alone.

**Rules:**
- Every interactive element must be reachable via `Tab` key (or `Arrow` keys within widget groups)
- Focus order must follow a logical reading sequence
- No keyboard traps: the user must be able to `Tab` away from every element
- `Escape` must close modals, lightboxes, and overlay panels
- Custom interactive elements must handle `Enter` and `Space` for activation
- `tabindex` usage:
  - `tabindex="0"` to add to natural tab order — acceptable
  - `tabindex="-1"` for programmatic focus management — acceptable
  - Positive `tabindex` values — **always a violation**

**Purchase flow keyboard path (must work end-to-end):**
1. Browse gallery → `Tab` to photograph → `Enter` to open product page
2. Select print size → `Arrow` keys within size group, `Space`/`Enter` to select
3. Select frame option → same pattern
4. Set quantity → `Tab` to quantity, `Arrow` or type a number
5. Add to cart → `Tab` to button, `Enter` to add → confirmation must be announced
6. Open cart → `Tab` to cart icon/link, `Enter` to open
7. Review cart → `Tab` through items, modify quantities, remove items
8. Checkout → `Tab` through form fields, submit order

**Image gallery keyboard specifics:**
- Gallery grid: arrow keys to navigate between thumbnails, `Enter` to open lightbox
- Lightbox: `Arrow` keys for next/previous, `Escape` to close, focus trapped within lightbox while open
- Zoom: keyboard shortcut or focusable control

**Flag these violations:**
- Element with `onclick` but no keyboard equivalent and no native keyboard behavior — **Critical**
- Positive `tabindex` values — **Critical**
- Lightbox or modal without focus trapping — **Critical**
- Purchase flow step unreachable via keyboard — **Critical**
- Missing focus management after dynamic updates — **Warning**

### 6. Form Labels and Error States

Validate that all forms — especially the purchase and checkout forms — are accessible.

**Rules:**
- Every `<input>`, `<select>`, and `<textarea>` must have an associated `<label>` or `aria-label`
- Labels must be visible — `aria-label` alone only when visual design makes purpose obvious
- Required fields must use `aria-required="true"` and a visible indicator
- Error messages must be:
  - Programmatically associated with the field via `aria-describedby` or `aria-errormessage`
  - Announced to screen readers (via `aria-live` or `role="alert"`)
  - Specific about the problem ("Enter a valid email address" not "Invalid input")
- Form submission errors must move focus to the first error or an error summary

**E-commerce form checks:**
- Checkout fields: name, email, shipping address, payment — all must have proper labels and autocomplete attributes
- Shipping address: use `autocomplete` attributes (`autocomplete="shipping street-address"`, `autocomplete="shipping postal-code"`, etc.)
- Payment fields: properly labeled, errors specific (e.g., "Card number must be 16 digits")
- Print option forms: size/frame selectors must communicate their current selection and any constraints
- Contact form: all fields labeled, error handling accessible
- Email signup: proper label, error handling, success confirmation announced

**Flag these violations:**
- Input with no associated label or `aria-label` — **Critical**
- Error message not programmatically linked to its field — **Critical**
- Checkout field missing `autocomplete` attribute — **Warning**
- Required field with no accessible indication — **Warning**
- Error message that lacks specificity — **Warning**

### 7. Skip-to-Content Links and Focus Indicators

**Skip navigation:**
- Every page must have a "Skip to main content" link as the first focusable element
- The link may be visually hidden but must become visible on focus
- The link must target a valid `id` on the `<main>` element or primary content area
- On gallery pages with extensive navigation, a skip link is critical

**Focus indicators:**
- Every focusable element must have a visible focus indicator
- The default browser outline is acceptable, but if overridden (`outline: none`), a custom focus style must be provided
- Focus indicators must have at least 3:1 contrast against adjacent backgrounds
- `:focus-visible` is preferred over `:focus` to avoid showing focus rings on mouse clicks
- On dark-themed gallery pages, ensure focus indicators are visible against dark backgrounds

**Flag these violations:**
- No skip-to-content link — **Critical**
- `outline: none` or `outline: 0` without a replacement focus style — **Critical**
- Skip link targeting a nonexistent `id` — **Critical**
- Focus indicator with insufficient contrast — **Warning**

### 8. Screen Reader Compatibility

**Landmark regions:**
- Page must use semantic landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>`
- If multiple `<nav>` elements exist, each must have a distinguishing `aria-label` (e.g., "Main navigation", "Gallery filters", "Footer links")
- `<main>` must be present exactly once per page

**Content structure:**
- Product option tables must use `<th>` with `scope` — do not use tables for layout
- Lists of photographs, sizes, or frames must use `<ul>` or `<ol>` — not styled `<div>` sequences
- Links must have descriptive text — no bare "click here" or "view" without context
- Icons used as links/buttons (cart icon, zoom icon, favorite/heart icon) must have screen reader text via `aria-label` or visually hidden `<span>`

**Photography e-commerce specific checks:**
- Product pages: screen reader should encounter photograph description, then title, then price, then options in a logical order
- Gallery pages: each photograph card should announce the photograph title and price (if shown)
- Cart: each item must be identifiable by product name, selected options, and price
- Checkout progress: current step must be identifiable via `aria-current`
- Order confirmation: all order details must be accessible in reading order

### 9. WCAG 2.1 AA Specific Checks

These additional WCAG 2.1 criteria often get overlooked:

- **1.3.4 Orientation**: Content must not be locked to portrait or landscape — photograph viewing especially must work in both orientations
- **1.3.5 Identify Input Purpose**: Checkout form fields must use `autocomplete` attributes for personal data
- **1.4.10 Reflow**: Content must reflow at 320px width without horizontal scrolling — gallery grid must reflow to single column; product pages must stack vertically
- **1.4.11 Non-text Contrast**: UI components (add-to-cart button borders, form field borders, gallery nav arrows) must have 3:1 contrast
- **1.4.12 Text Spacing**: Content must remain functional when text spacing is increased (line-height 1.5x, paragraph spacing 2x, letter spacing 0.12em, word spacing 0.16em) — print option labels must not overlap or truncate
- **1.4.13 Content on Hover or Focus**: Tooltips showing print details or shipping info must be dismissible, hoverable, and persistent
- **4.1.3 Status Messages**: "Added to cart" confirmations, cart count updates, and checkout step completions must be announced to screen readers without receiving focus

### 10. Reporting Format

For each page or component audited, produce a report structured as:

```
## Accessibility Audit: [Page Title or Component Name]

### WCAG 2.1 AA Compliance Summary
- **Critical Violations**: [count]
- **Warnings**: [count]
- **Passed Checks**: [count]

### Critical Violations (must fix)
- [ ] [WCAG criterion number] [Description] — [Specific fix suggestion]

### Warnings (should fix)
- [ ] [WCAG criterion number] [Description] — [Recommendation]

### Passed Checks
- [x] [Check description]

### Purchase Flow Accessibility Status
| Step | Keyboard Nav | ARIA Labels | Focus Mgmt | Error Handling |
|------|-------------|-------------|------------|----------------|
| Gallery Browse | Pass/Fail | Pass/Fail | Pass/Fail | N/A |
| Product Page | Pass/Fail | Pass/Fail | Pass/Fail | Pass/Fail |
| Cart | Pass/Fail | Pass/Fail | Pass/Fail | Pass/Fail |
| Checkout | Pass/Fail | Pass/Fail | Pass/Fail | Pass/Fail |
```

Prioritize critical violations. Always provide the specific WCAG criterion number (e.g., 1.1.1, 1.4.3) and a concrete fix suggestion — not just "fix contrast" but "Change `.product-price` color from `#aaa` to `#767676` to achieve 4.54:1 against white background."

---

*Soli Deo Gloria*
