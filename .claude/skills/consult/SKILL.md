---
name: consult
description: "Quick multi-LLM second opinion. Sends a single prompt to GPT, Gemini, or Grok with a role-based system prompt and returns structured feedback."
---

# Consult — Quick Second Opinion

*One model. One question. Structured feedback.*

## Usage

```
/consult <model> <role> "prompt text"
```

### Models
- **gpt** — OpenAI GPT (strong at structure, planning)
- **gemini** — Google Gemini (strong at expansion, cross-references)
- **grok** — xAI Grok (strong at challenge, adversarial thinking)

### Roles
- **challenge** — Push back on assumptions, surface weak reasoning
- **expand** — Add context, cross-references, historical background
- **structure** — Review logical flow and organization
- **critique** — Evaluate accuracy, completeness, clarity
- **plan** — Produce structured plans with steps and risks
- **safety** — Flag risks, errors, unsafe recommendations
- **freestyle** — General-purpose response

---

## Examples

```
/consult gpt structure "Review this gallery page layout for logical flow"
/consult gemini expand "What photography metadata standards should we include?"
/consult grok challenge "This page follows conventional portfolio patterns. What's better?"
```

---

## Backend Invocation

```bash
pip3 install -q -r /home/user/ken/orchestrator/requirements.txt
python3 /home/user/ken/orchestrator/consult.py <model> <role> "prompt text"
```

**Output:** JSON response to stdout with keys: `analysis`, `proposed_update`, `risks`, `confidence`
**Usage stats:** Printed to stderr (model, tokens, cost)

**If the backend is not found:** Tell the user:
> "The orchestrator backend isn't installed on this machine. It lives in the `ken` repository at `orchestrator/`. Make sure the ken repo is cloned to `/home/user/ken/`."

---

## Context Boundaries

### SEND
- Page requirements, content outlines, SEO targets

### NEVER SEND
- Full codebase or internal standards, analytics data

---

## After Receiving Feedback

1. **Claude evaluates** — External feedback is advisory only. Claude decides what to use.
2. **Check claims** — If the response includes `claims`, verify them before incorporating.
3. **Enforce standards** — All changes must comply with FOM-Lite protocol.
