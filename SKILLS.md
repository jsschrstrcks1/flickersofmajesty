# Skills — flickersofmajesty

> The storefront. 25 skills configured — the photography e-commerce stack: accessibility, SEO schema, voice, link integrity, print-lab validation, pre-publish checklist, and the FOM-Lite Protocol scaffolding.

This document is the human-facing index of all Claude Code skills configured in this repository. The agent-facing pointer lives in [`CLAUDE.md`](CLAUDE.md). Skills follow the agent-skills-spec format and live under `.claude/skills/`.

**Total skills configured: 25.** This is the second-largest skill surface in the household (after InTheWake). The repo's job is real-money commerce + accessibility + AI-discoverability via FOM-Lite, so the skill stack is dense.

---

## Quick reference

| Skill | Activation | Default | Domain |
|---|---|---|---|
| [`pre-publish-checklist`](#pre-publish-checklist) | explicit before deploy | on | Quality gate (combines all skills) |
| [`accessibility-audit`](#accessibility-audit) | automatic on page edits | on | WCAG 2.1 AA compliance |
| [`seo-schema-audit`](#seo-schema-audit) | automatic on page edits | on | JSON-LD / Open Graph / AI meta tags |
| [`link-integrity`](#link-integrity) | automatic on link/image edits | on | Internal links + product↔category |
| [`print-lab-validator`](#print-lab-validator) | automatic on product image | on | DPI / color space / file format |
| [`publication-proofreader`](#publication-proofreader) | automatic post-draft | on | Curly quotes, em-dashes, alt text, prices |
| [`voice-audit`](#voice-audit) | automatic post-draft | on | Voice authenticity / machine tells |
| [`voice-dna`](#voice-dna) | explicit | on | Voice pattern discovery |
| [`like-a-human`](#like-a-human) | automatic during writing | on | Voice during writing |
| [`emotional-hook-test`](#emotional-hook-test) | explicit pre-publish | on | Buyer emotional resonance |
| [`audience-profiles`](#audience-profiles) | automatic when writing buyer copy | on | Fine-art photography buyer personas |
| [`content-freshness`](#content-freshness) | explicit | on | Stale page detection |
| [`analytics-tracking`](#analytics-tracking) | explicit | on | GA4 + e-commerce conversion tracking |
| [`frontend-design`](#frontend-design) | automatic on UI work | on | Distinctive frontend aesthetics |
| [`frontend-dev-guidelines`](#frontend-dev-guidelines) | automatic on React/TS work | on | React/TypeScript patterns |
| [`web-artifacts-builder`](#web-artifacts-builder) | explicit | on | Multi-component HTML artifacts |
| [`pdf`](#pdf) | explicit | on | PDF manipulation toolkit |
| [`icp-2`](#icp-2) | automatic on content writing | on | Human-First SEO/AEO 2026 |
| [`consult`](#multi-llm-orchestrator) | explicit | on | Multi-LLM second opinion |
| [`orchestrate`](#multi-llm-orchestrator) | explicit | on | Multi-LLM pipeline (cruising mode) |
| [`orchestra`](#multi-llm-orchestrator) | explicit | on | Multi-LLM round-robin |
| `cognitive-memory` | automatic on session start | on | Cross-session knowledge (scope `/flickersofmajesty`) |
| `session-checkpoint` | automatic + explicit | on | Atomic commits, rate-limit recovery |
| `skill-creator` | explicit | on | Anthropic skill-creation guide |
| `skill-developer` | explicit | on | Skill authoring (household pattern) |

---

## How invocation works

Claude Code skills can fire three ways:

**1. Automatic activation** via YAML `keywords:` and surrounding context.

**2. Explicit invocation:**

```
"Run the pre-publish-checklist before I deploy this product page."
/skill pre-publish-checklist
```

**3. Implicit invocation by task shape** — product-page edits trigger `accessibility-audit` + `seo-schema-audit` + `link-integrity` + `print-lab-validator`; product image uploads trigger `print-lab-validator`; etc.

**The pre-publish-checklist is the unified ship-it gate** — invoke it before any deploy and it chains the relevant audits in order.

---

## Quality-gate skills (FOM-Lite enforcement)

### `pre-publish-checklist`

**Path:** `.claude/skills/pre-publish-checklist/SKILL.md`

Unified pre-publish quality gate that combines all the audit skills into a single ship-it workflow: standards compliance, emotional hook, voice audit, SEO schema, accessibility, links, freshness — all in one pass.

**Manual invocation:**

```
/skill pre-publish-checklist
"Run pre-publish on products/mountain-majesty.html"
```

**When it activates automatically:** before any deploy / commit that touches a product or category page.

### `accessibility-audit`

**Path:** `.claude/skills/accessibility-audit/SKILL.md`

Audits WCAG 2.1 AA compliance: image alt text for photographs, color contrast, heading hierarchy, ARIA labels, keyboard-accessible purchase flows, screen reader compatibility.

**Activation:** automatic on product/category page edits.

**Non-negotiable:** Lighthouse accessibility score must be 100 before deploy.

### `seo-schema-audit`

**Path:** `.claude/skills/seo-schema-audit/SKILL.md`

Validates JSON-LD structured data, Open Graph, Twitter Cards, AI meta tags. Catches Schema.org mistakes that would render the listing wrong in search engines or AI assistants.

**Schema coverage required:**

| Page type | Schema |
|---|---|
| Product | `Product` (pricing, availability) |
| Category | `CollectionPage` |
| FAQ | `FAQPage` |
| All | `BreadcrumbList` |

### `link-integrity`

**Path:** `.claude/skills/link-integrity/SKILL.md`

Validates internal links, image paths, and product-to-category connectivity. Broken links lose sales.

**Non-negotiable:** all internal links use absolute URLs starting with `https://www.flickersofmajesty.com/`.

### `print-lab-validator`

**Path:** `.claude/skills/print-lab-validator/SKILL.md`

Validates product images meet print lab requirements: DPI, color space, file format, resolution against listed print sizes. Refuses uploads that don't meet specs.

**Activation:** automatic when a product image is added or changed.

### `publication-proofreader`

**Path:** `.claude/skills/publication-proofreader/SKILL.md`

Final typographic polish before publishing product and gallery pages: curly quotes, em-dashes, alt text consistency, price formatting, visual consistency.

**Activation:** automatic post-draft.

---

## Voice skills

### `like-a-human`

Voice & Presence — fires during writing. Guards the sound of product descriptions, gallery text, artist statements, and collection narratives so they read as written by a photographer, not generated by a machine.

**Activation:** automatic during writing.

### `voice-audit`

Post-draft diagnostic for photography content. Scans for machine tells, assesses authenticity risk, checks voice continuity against the photographer's voice standard.

**Activation:** automatic post-draft, before commit.

### `voice-dna`

Discovers voice patterns from existing product descriptions and gallery text. Extracts the photographer's actual rhythms, precision style, and restraint patterns. Used to calibrate `like-a-human` and `voice-audit`.

**Activation:** explicit. Run when calibrating voice tooling.

### `audience-profiles`

Deep audience personas for fine art photography buyers. Feeds product descriptions, gallery curation, and `emotional-hook-test` calibration.

**Activation:** automatic when writing buyer-facing copy.

### `emotional-hook-test`

Pre-publication quality gate that evaluates the viewer/buyer emotional experience. Complements `voice-audit` (output quality) with feeling-level assessment.

**Activation:** explicit, before publish.

---

## Frontend / artifacts skills

### `frontend-design`

Creates distinctive, production-grade frontend interfaces with high design quality. Generates creative, polished code that avoids generic AI aesthetics.

**Activation:** automatic on UI/component work.

### `frontend-dev-guidelines`

Frontend development guidelines for React/TypeScript: Suspense, lazy loading, useSuspenseQuery, file organization, MUI v7 styling, TanStack Router, performance, TypeScript best practices.

**Activation:** automatic when working with frontend code.

### `web-artifacts-builder`

Suite for elaborate, multi-component claude.ai HTML artifacts using React, Tailwind CSS, shadcn/ui. Use for complex artifacts requiring state management, routing, or shadcn/ui components.

**Activation:** explicit.

---

## Operations skills

### `analytics-tracking`

GA4 setup and conversion tracking for `flickersofmajesty.com`. Focuses on e-commerce metrics: product views, purchase intent, print size preferences.

**Activation:** explicit.

### `content-freshness`

Scans `last-reviewed` meta tags, flags stale pages, generates a freshness report — tuned for e-commerce product freshness.

**Activation:** explicit.

### `pdf`

Comprehensive PDF manipulation toolkit: extracting text and tables, creating new PDFs, merging/splitting documents, handling forms.

**Activation:** explicit. Used when a product needs a print-spec sheet or invoice.

### `icp-2`

ICP-2 — Human-First SEO & Answer Engine Optimization (AEO) standard for 2026. The household-wide AEO standard.

**Activation:** automatic on content writing surfaces SEO/AEO concerns.

### `skill-creator` and `skill-developer`

Two skill-authoring tools — `skill-creator` is Anthropic's official guide; `skill-developer` is the household pattern. Use whichever fits the task.

---

## Multi-LLM orchestrator

This repo defaults to **`cruising` mode** in the orchestrator hosted in [ken](https://github.com/jsschrstrcks1/ken). Lead model: Claude.

| Skill | Slash command | Usage |
|---|---|---|
| `consult` | `/consult` | `/consult gpt structure "product page layout review"` |
| `orchestrate` | `/orchestrate cruising "<task>"` | Pipeline: Read Standards → Generate → Content (GPT) → Completeness (Gemini) → UX (Grok) → Integrate |
| `orchestra` | `/orchestra "<task>"` | Multi-LLM round-robin debate |

The `cruising` mode is the same pipeline used by `InTheWake` (the parent of FOM-Lite). May evolve into a custom `photography` mode later.

**Context boundaries:**

- **SEND** to consultants: page requirements, content topics, SEO targets, product descriptions
- **NEVER SEND**: full codebase, internal standards docs, analytics, financial data

First-time setup per session:

```bash
bash /home/user/ken/orchestrator/bootstrap-env.sh 2>/dev/null
pip3 install -q -r /home/user/ken/orchestrator/requirements.txt
```

---

## Standard household kit (subset present)

Unlike sister repos, flickersofmajesty does not configure the full 16-skill household kit — only the subset relevant to a static-site e-commerce surface. Present:

- `cognitive-memory` (memory scope: `/flickersofmajesty`)
- `session-checkpoint`

Not present (would be added if needed): `brainstorming`, `executing-plans`, `finishing-a-development-branch`, `prompt-optimizer`, `receiving-code-review`, `requesting-code-review`, `safety-guard`, `security-review`, `security-scan`, `subagent-driven-development`, `systematic-debugging`, `using-git-worktrees`, `verification-before-completion`, `writing-plans`.

For any of those, run `npx skills add jsschrstrcks1/open-claw-stuff --skill <name>` (where they're publicly available) or copy from `ken/.claude/skills/`.

---

## See also

- [`CLAUDE.md`](CLAUDE.md) — agent context
- [`README.md`](README.md) — public-facing overview
- [`admin/claude/FOM-LITE_PROTOCOL.md`](admin/claude/FOM-LITE_PROTOCOL.md) — full protocol specification
- [`standards/main-standards.md`](standards/main-standards.md) — global standards
- [`standards/product-standards.md`](standards/product-standards.md) — product page contract
- [`standards/category-standards.md`](standards/category-standards.md) — category page contract
- [`TODO.md`](TODO.md) — active task list
- `InTheWake` — parent of FOM-Lite (see ITW-Lite v3.010)
- `ken` — hosts the orchestrator
