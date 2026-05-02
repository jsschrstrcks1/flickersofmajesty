---
name: analytics-tracking
description: "Guides GA4 setup and conversion tracking for flickersofmajesty.com. Focuses on e-commerce metrics: product views, purchase intent, and print size preferences."
version: 1.0.0
---

# Analytics Tracking — Flickers of Majesty

> Know which images move people to buy.

## When to Fire

- On `/analytics` command
- When adding new products
- When discussing sales, traffic, or conversion

## Key Events

| Event | What it measures |
|-------|-----------------|
| `page_view` | Overall traffic |
| `product_view` | Which prints get viewed |
| `size_select` | Which print sizes are popular |
| `medium_select` | Canvas vs metal vs framed preference |
| `add_to_cart` | Purchase intent |
| `purchase` | Completed sales |
| `gallery_browse` | Collection engagement |
| `scroll_depth` | How far they read product descriptions |

## E-Commerce Tracking

```javascript
gtag('event', 'view_item', {
  currency: 'USD',
  value: 149.00,
  items: [{ item_id: 'mountain-majesty', item_name: 'Mountain Majesty', price: 149.00 }]
});
```

## What Matters Most

1. **Product view → purchase conversion rate** — which images sell?
2. **Size preference** — are people buying small or large?
3. **Medium preference** — canvas, metal, or framed?
4. **Time on product page** — do the descriptions hold attention?

---

*Soli Deo Gloria*
