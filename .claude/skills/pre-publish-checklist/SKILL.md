---
name: pre-publish-checklist
description: "Unified pre-publish quality gate that combines all existing skills into a single ship-it workflow. Standards compliance, emotional hook, voice audit, SEO, accessibility, links, and freshness — all in one pass."
version: 1.0.0
---

# Pre-Publish Checklist

> One gate. Every check. Ship with confidence.

## Purpose

Before any product page, gallery page, or collection page goes live, run every quality gate in sequence. This skill orchestrates all existing quality skills into a single pre-publish workflow.

## When to Fire

- On `/publish` or `/checklist` command
- Before committing content changes to product or gallery pages
- When asking "is this ready to ship?"

## The Seven Gates

### Gate 1: Standards Compliance
Check against `standards/main-standards.md`, `standards/product-standards.md`, `standards/category-standards.md`.
- [ ] Page structure matches the applicable standard
- [ ] Required sections present (hero, description, pricing, specs)
- [ ] CSS classes follow naming conventions
- [ ] Images follow format and sizing requirements

### Gate 2: Emotional Hook Test
Run the existing `emotional-hook-test` skill.
- [ ] PRESENCE: Image commands the space (0-5s)
- [ ] TRUST: Feels like a real photographer's work (5-10s)
- [ ] SEEN: Description reveals something new about the image (10-15s)
- [ ] DESIRE: Viewer can imagine it on their wall (15-20s)
- [ ] EASE: Clear path to purchase (20-30s)
- **Minimum: 4/5 PASS to ship**

### Gate 3: Voice Audit
Run the existing `voice-audit` skill.
- [ ] No AI-overrepresented vocabulary
- [ ] No art-world clichés
- [ ] Photographer's eye present (specific visual details)
- [ ] Restraint (more unsaid than said)
- [ ] No promotional drift
- **Authenticity Risk must be LOW to ship**

### Gate 4: SEO Schema Validation
Run the existing `seo-schema-audit` skill.
- [ ] JSON-LD Product schema valid and complete
- [ ] Open Graph tags present and correct
- [ ] Twitter Card tags present
- [ ] ai:summary and ai:target-audience meta tags present
- [ ] last-reviewed date set to today

### Gate 5: Accessibility
Run the existing `accessibility-audit` skill.
- [ ] All images have meaningful alt text
- [ ] Color contrast meets WCAG 2.1 AA (4.5:1)
- [ ] Heading hierarchy is correct
- [ ] Purchase flow is keyboard-accessible
- [ ] ARIA labels on interactive elements

### Gate 6: Link Integrity
Run the existing `link-integrity` skill.
- [ ] All internal links resolve
- [ ] All image paths valid
- [ ] Product → category and category → product links bidirectional
- [ ] No broken anchor references

### Gate 7: Content Freshness
Update the `last-reviewed` meta tag.
- [ ] Set last-reviewed to today's date
- [ ] Verify pricing is current
- [ ] Verify product availability

## Report Format

```
## Pre-Publish Report — [page name] — [date]

| # | Gate | Result | Notes |
|---|------|--------|-------|
| 1 | Standards | PASS/FAIL | [details] |
| 2 | Emotional Hook | 4/5 PASS | [which failed] |
| 3 | Voice Audit | LOW risk | [flags] |
| 4 | SEO Schema | PASS/FAIL | [issues] |
| 5 | Accessibility | PASS/FAIL | [violations] |
| 6 | Links | PASS/FAIL | [broken] |
| 7 | Freshness | Updated | last-reviewed = [date] |

**Overall: SHIP IT / HOLD — [reason]**
```

## Ship Criteria

- **SHIP IT**: All gates PASS (emotional hook 4/5+, voice LOW risk, all others PASS)
- **SHIP WITH NOTES**: One non-critical gate has minor issues (note what to improve)
- **HOLD**: Any critical failure (broken links, FAIL voice audit, missing schema, a11y violation)

---

*Soli Deo Gloria* — Ship with excellence. Every page is worship.
