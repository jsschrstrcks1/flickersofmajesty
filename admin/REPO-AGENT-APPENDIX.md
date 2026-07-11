# Repo Agent Appendix (Layer 2)

**Archived from CLAUDE.md 2026-07-11.**

# Flickers of Majesty — AI Assistant Context

**Soli Deo Gloria.** Fine art photography e-commerce site with FOM-Lite Protocol.

---

## Skills

Full skill catalog (25 skills) is documented in [`SKILLS.md`](SKILLS.md) — human-facing index with activation modes, trigger keywords, and example prompts.

**Read SKILLS.md at session start.** It documents the photography-domain quality-gate skills (`pre-publish-checklist`, `accessibility-audit`, `seo-schema-audit`, `link-integrity`, `print-lab-validator`, `publication-proofreader`), the voice skills (`like-a-human`, `voice-audit`, `voice-dna`, `audience-profiles`, `emotional-hook-test`), and the frontend / operations skills.

**The pre-publish-checklist is the unified ship-it gate** — invoke it before any deploy.

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

### First-Time Setup (Per Session)

Before first use of `/consult` or `/orchestrate` in a session, install dependencies:

```bash
bash /home/user/ken/orchestrator/bootstrap-env.sh 2>/dev/null
pip3 install -q -r /home/user/ken/orchestrator/requirements.txt
```

This is silent when already installed. If `/consult` or `/orchestrate` fails with `ModuleNotFoundError`, run this command first.

### Context Boundaries
- **SEND:** Page requirements, content topics, SEO targets, product descriptions
- **NEVER SEND:** Full codebase, internal standards docs, analytics, financial data

---

## Cognitive Memory — Slice 6 Observation Capture

To enable always-on cognitive memory observation capture in this repo, register the canonical hook (lives in `ken`) in `.claude/settings.json`:

```json
"env": {
  "MEMORY_OBSERVATIONS_ENABLED": "true",
  "MEMORY_AUTO_OBSERVE_ENABLED": "true"
},
"hooks": {
  "PostToolUse": [
    {
      "matcher": "*",
      "hooks": [
        {"type": "command",
         "command": "/home/user/ken/.claude/hooks/observe-tool-use.sh"}
      ]
    }
  ]
}
```

Hook is **fail-closed**: any error → exit 0, never blocks the tool call. Args SHA256-hashed via `_compute_args_hash` before disk; raw values never persisted. Errors → `/tmp/observe-hook.err`. Surface candidates: call `memory_ops.extract_candidates_from_observations(session_id)` after a session.

Setup memory: id `5a9c8ae1` (recall via `python3 /home/user/ken/orchestrator/memory_ops.py recall "Slice 6 always-on cognitive memory observation capture"`). Currently active in `ken/.claude/settings.json` (commit `ca78cad`); per-repo activation is opt-in via the absolute-path reference above.
