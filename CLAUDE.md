# Flickers of Majesty — AI Assistant Context

**Soli Deo Gloria.** Fine art photography e-commerce site with FOM-Lite Protocol.

---

## Multi-LLM Integration

This repository has access to the multi-LLM orchestrator system. External models (GPT, Gemini, Grok) serve as **consultants only** — Claude remains lead author and decision-maker.

### Available Skills

| Skill | Usage | Purpose |
|-------|-------|---------|
| `/consult` | `/consult gpt structure "product page layout review"` | Quick single-model second opinion |
| `/orchestrate` | `/orchestrate cruising "generate gallery page content"` | Full multi-model pipeline |
| Cognitive Memory | Automatic on session start | Cross-session knowledge persistence |

### Mode: `cruising`
- **Lead:** Claude (standards enforcement, file access)
- **Pipeline:** Read Standards (Claude) → Generate (Claude) → Content (GPT) → Completeness (Gemini) → UX (Grok) → Integrate (Claude)
- **Memory scope:** `/flickersofmajesty`
- **Orchestrator:** `/home/user/ken/orchestrator/`
- **Note:** Uses cruising pipeline for web content generation; may evolve into a custom `photography` mode

### Context Boundaries
- **SEND:** Page requirements, content topics, SEO targets, product descriptions
- **NEVER SEND:** Full codebase, internal standards docs, analytics, financial data
