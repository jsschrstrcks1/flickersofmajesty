# Unfinished Tasks

| library_task_id | priority | title |
|---|---|---|
| audit0827-fom-template-site-unfinished | 1 | P1 AUDIT-0827: the site is a 3-page unfilled template — ~30 nav/product/footer links point at files that do not exist (/collections/, /prints/, /about/, /contact/, sizing/shipping/faq/privacy/terms, 5 of 6 product cards, 4 sibling categories; even the one real product is linked in directory form that 404s vs its .html file); all 7 category images are via.placeholder.com grey boxes in direct violation of README.md:378; images/ does not exist and every image is stock Unsplash; sitemap.xml and robots.txt absent. Work root TODO.md top-down: real photography in, pages created or links removed. |

<!-- library register 2026-08-27T05:05:49.977Z -->
| audit0827-fom-snipcart-decision | 2 | P2 AUDIT-0827: Snipcart is fully scaffolded and deliberately dark — loader commented out with data-api-key='YOUR_SNIPCART_API_KEY' in index.html:366-370 and products/mountain-majesty.html:488-492, while the visible Add-to-Cart UI does nothing; prices are triplicated per product across display/options/snipcart attributes with no data file. Decide: activate commerce (key via a single shared include, de-duplicate price data) or remove the dead cart UI until then. |

<!-- library register 2026-08-27T05:05:50.372Z -->
| audit0827-fom-skills-spec-only | 3 | P3 AUDIT-0827: print-lab-validator, analytics-tracking, and audience-profiles are SKILL.md-only (no scripts, and the /lab and /analytics commands they declare do not exist in .claude/commands/); GA4 has zero implementation in any page (gtag/dataLayer grep: 0) against the skill's 8-event spec; bootstrap-env.sh's fallback decodes env_seed.py which is absent from the repo; and admin/UNFINISHED_TASKS.md is a dangling CLAUDE.md pointer (root TODO.md is the real list). Implement or trim the skills; fix or remove the bootstrap fallback. |
