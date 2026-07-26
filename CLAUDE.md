# CLAUDE.md — Agent pointer (Flickers of Majesty)

**Soli Deo Gloria.** Pointer only — household law is not duplicated here.

**Household SSOT:** `/Users/kenbaker/ocs-work`

## Read order (mandatory)

| # | Layer | Load |
|---|-------|------|
| 1 | **Soli Deo Gloria** | `/Users/kenbaker/ocs-work/skills/soli-deo-gloria/SKILL.md` |
| 2 | **Careful, not clever** | `/Users/kenbaker/ocs-work/skills/careful-not-clever/SKILL.md` |
| 3 | **Sophos OS** | `/Users/kenbaker/ocs-work/docs/SOPHOS-OPERATING-SYSTEM.md` |
| 4 | **Cognitive memory** | `ken/orchestrator/memory_ops.py`; `/Users/kenbaker/ocs-work/admin/recall-memory.mjs` |
| 5 | **Household rulebook** | `/Users/kenbaker/ocs-work/docs/HOUSEHOLD-AGENT-RULEBOOK.md` |
| 6 | **Household library** | `/Users/kenbaker/ocs-work/skills/household-library/SKILL.md` |

**Do not skip to §5–6 without §1–4.**

### User task gates (P0)

```bash
node /Users/kenbaker/ocs-work/admin/library.mjs preflight --query "<task>" --patron claude-code --merge --repo flickersofmajesty
```

## Layer 2 — This repo

| Resource | Path |
|----------|------|
| Archived full guide | `admin/REPO-AGENT-APPENDIX.md` |
| Task shelf | `admin/LIBRARY.md` |
| Open work | `admin/UNFINISHED_TASKS.md` or `admin/PENDING_TASKS.md` |

*Household catalog SSOT:* `/Users/kenbaker/ocs-work/.household-library/catalog.jsonl`


## ⚡ Sophos required — enforced, belt and suspenders (operator directive 2026-07-24)

**Anyone — human, Claude, Grok, Skynet, any runtime — working in ANY household
repo operates under Sophos, the full posture loaded from the single word.**
Front door: `open-claw-stuff/skills/sophos/SKILL.md` (synced copy:
`Project-Sophos/.claude/skills/sophos/`). One invocation loads Soli Deo Gloria,
careful-not-clever, the Sophos OS hierarchy + publish gate, and cognitive-memory
recall through the evidence envelope (directives honored, evidence weighed).

Enforcement:
- **Belt:** in `open-claw-stuff` the bootstrap guard DENIES repo mutations until
  `skills/sophos/SKILL.md` and the other Layer 0/1 files are read this session.
- **Suspenders:** this section, plus REQUIRED session hooks in `.claude/`:
  `memory-directives-inject.sh` (SessionStart — operator law auto-loads,
  read-only) and `memory-autopersist.sh` (Stop — encoded memories are
  committed+pushed; nothing dies with an ephemeral container). Do not remove or
  bypass; kill-switches are for operator debugging only.

**Soli Deo Gloria.**
