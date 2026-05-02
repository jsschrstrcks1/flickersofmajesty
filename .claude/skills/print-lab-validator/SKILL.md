---
name: print-lab-validator
description: "Validates product images meet print lab requirements before listing. Checks DPI, color space, file format, and resolution against listed print sizes."
version: 1.0.0
---

# Print Lab Validator

> Don't list a 60x40 print from a 12-megapixel source.

## Purpose

Validates that product images can actually be printed at the sizes listed on the product page. Catches resolution mismatches, color space issues, and format problems before a customer orders.

## When to Fire

- On `/lab` command
- When adding or modifying product pages
- When listing new print sizes
- As part of pre-publish-checklist (Gate 1 enhancement)

## DPI Requirements

### Print Size → Minimum Resolution

| Max Print Size | Min DPI | Min Pixels (Long Edge) |
|---------------|---------|----------------------|
| 8x10 | 300 | 3000 |
| 12x16 | 300 | 4800 |
| 16x24 | 300 | 7200 |
| 20x30 | 240 | 7200 |
| 24x36 | 200 | 7200 |
| 30x40 | 150 | 6000 |
| 40x60 | 150 | 9000 |
| 60x40 (landscape) | 150 | 9000 |

### Rule of Thumb
- **Gallery prints (up to 24")**: 300 DPI minimum
- **Statement pieces (24-40")**: 200 DPI acceptable
- **Mural size (40"+)**: 150 DPI acceptable (viewing distance compensates)

## Color Space

| Context | Required | Notes |
|---------|---------|-------|
| Print lab submission | Adobe RGB or ProPhoto RGB | Wider gamut for print |
| Web display | sRGB | Standard for screens |
| Product page images | sRGB (converted) + original preserved | WebP for web, TIFF/PNG for lab |

## File Format

| Purpose | Format | Notes |
|---------|--------|-------|
| Lab submission | TIFF (uncompressed) or PNG | No JPEG for final print files |
| Web display | WebP (primary), JPEG (fallback) | WebP at 85% quality |
| Archive/source | RAW or TIFF | Never delete the source |

## Validation Checks

1. **Resolution vs. listed sizes**: For each print size listed on the product page, verify the source image has sufficient pixels
2. **Color space**: Web images should be sRGB. Verify no accidental Adobe RGB images on the web (colors will look wrong)
3. **WebP versions exist**: Every product image should have a .webp version for web display
4. **Aspect ratio match**: Listed sizes should match the image's actual aspect ratio (or note cropping)
5. **File size sanity**: Web images >2MB should be flagged for optimization

## Validation Report

```
## Print Lab Validation — [product name]

**Source image:** [filename]
**Resolution:** [width x height] px
**Color space:** [sRGB / Adobe RGB / ProPhoto]

### Size Validation
| Listed Size | Required Pixels | Actual | DPI at Size | Status |
|-------------|----------------|--------|-------------|--------|
| 12x8 | 3600x2400 | 7200x4800 | 600 | ✅ |
| 24x16 | 7200x4800 | 7200x4800 | 300 | ✅ |
| 60x40 | 9000x6000 | 7200x4800 | 120 | ❌ TOO SMALL |

### Format Check
- [ ] WebP version exists
- [ ] TIFF/PNG source available for lab
- [ ] Web image is sRGB

### Overall: [PASS / FAIL — reasons]
```

## Integration

- **pre-publish-checklist** — runs as part of the publish gate
- **standards** — product standards may reference image requirements
- **careful-not-clever** — don't guess resolution. Check the actual file.

---

*Soli Deo Gloria* — The print quality is part of the art.
