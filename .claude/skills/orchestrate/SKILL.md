---
name: orchestrate
description: "Full multi-LLM pipeline orchestration. Runs the cruising pipeline that coordinates GPT, Gemini, and Grok as consultants while Claude remains lead developer. Auto-detects cruising mode from this repository."
---

# Orchestrate — Multi-LLM Pipeline

*Claude leads. External models consult. Claude decides what survives.*

## Usage

```
/orchestrate "task description"
/orchestrate cruising "Build a new gallery page for landscape collection"
```

Mode is **cruising** by default in this repository.

---

## How It Works

The orchestrator runs a multi-step pipeline defined in `/home/user/ken/orchestrator/modes/cruising.yaml`:

1. **Read Standards** (Claude) — Load project standards and design patterns
2. **Generate** (Claude) — Generate standards-compliant page content
3. **Content Review** (GPT) — Suggest content additions, structural alternatives, SEO improvements
4. **Completeness Check** (Gemini) — Check content completeness, suggest missing sections
5. **UX Challenge** (Grok) — Challenge layout assumptions, suggest UX innovations
6. **Integrate** (Claude) — Integrate feedback, enforce compliance, produce final output

External steps (3-5) are optional — the pipeline continues gracefully if any fail.

---

## Backend Invocation

```bash
pip3 install -q -r /home/user/ken/orchestrator/requirements.txt
python3 /home/user/ken/orchestrator/orchestrate.py cruising "task description"
```

**If the backend is not found:** Tell the user:
> "The orchestrator backend lives in the `ken` repository at `orchestrator/`. Make sure ken is cloned to `/home/user/ken/`."

---

## Context Boundaries

### SEND to external models
- Page requirements and structure
- Content topics and outlines
- SEO targets

### NEVER SEND to external models
- Full codebase or source files
- Internal standards documents (send summaries only)
- Analytics data
