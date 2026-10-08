<!-- Soli Deo Gloria. A reasoning log kept for Ken — how we got there, and why. -->

# Reasoning Log

**For Ken. A running record of *how* and *why* — not just *what*.**

Every agent that works in this repo **except Claude** — Grok, Codex, Hermes, the
Sophos/HELM pipeline — records the reasoning behind its calls here. Claude is excluded
by operator directive (2026-10-08). Newest entries at the top.

## 2026-10-08 — Rescuing the orphaned reasoning-log chain, with the runtime scope corrected

**Asked.** Rescue the flickers repo's orphan work. One item is the reasoning-log
chain — injection, persistence, reveal, the commit guard, and the log itself —
stranded on two branches that never became PRs, while `main` has none of it.
Amended mid-task by the operator: keep the log, but for **everyone who is not
Claude**.

**Weighed.** Three things had to be decided rather than assumed.

*Which vintage.* Two branches carry this chain: `merge-unpushed-consolidate-igpimd`
(2026-07-30) and `sophos-model-strategy-oi53ke` (2026-08-24). Newer is not
automatically better, so I compared them instead of taking the later one on
faith: `reasoning-log-persist.sh` is byte-identical across both, and the guard is
101 lines against 88, carrying the UL-210 fix (the `[no-reasoning]` opt-out must
read the message git hands `commit-msg`, because `.git/COMMIT_EDITMSG` is stale at
pre-commit and made the opt-out both fail and then silently exempt the NEXT
commit) and the UL-943 shape check. A measured superset, not a date.

*What the chain claims.* Its own header is explicit that it is **model-independent
and names Claude among the obligated runtimes**. The directive inverts that, so this
is a rescue plus a reversal — and a reversal means the doctrine text had to change
too. Leaving the old paragraph above new code is how a guard becomes a lie.

*Where the exemption lives.* Not only in the injection hook. The guard is the half
that runs on `git commit`, and it blocks any substantive commit with no entry dated
today. Exclude Claude from writing the log and, without the same exemption in the
guard, Claude's next commit is refused for a log it is forbidden to write.

**Decided.** Took the six files from `sophos-model-strategy-oi53ke`; grafted the four
`settings.json` registrations onto main's copy rather than taking that file whole,
because it is shared and main's seven existing hooks had to survive — they did.
Added `is_claude_runtime()` to the hook and the guard: `AGENT_RUNTIME` if set, else
`CLAUDECODE`. Left `reasoning-log-persist.sh` runtime-agnostic on purpose — it commits
an existing log and never authors an entry. Verified by holding the commit constant
and varying only the runtime: Claude exits 0, Hermes and unset exit 1.

**Unsure.** The detection is inference, not identity: a non-Claude runtime started
from **inside** a Claude session inherits `CLAUDECODE` and is wrongly silenced, and
nothing in the environment can tell that apart — `AGENT_RUNTIME` is the only way to
say so, and it is written into both files as a named limit. Second:
`.githooks/commit-msg` calls `.githooks/reasoning-log-shape.mjs`, which exists on
**neither** `main` nor this branch, so the shape check is inert today; it degrades
quietly behind `[ -f ]` and I am recording it rather than letting it read as working.

_Runtime: Hermes_

## What this is (and an honest note on what it isn't)

No agent can pipe its raw internal tokens into a file; dressing a polished summary up as
"the raw stream" would be a clever fake rather than honest work. So this is the honest
version: a genuine reconstruction — what was understood, the options weighed, what was
ruled in or out and why, where the uncertainty was, and how it landed. When something was
guessed, the entry says it was guessed.

Pipeline entries are different in kind: they are generated mechanically from the run
record (plan, retrieval, governance findings, publish decision), so they need no
compliance from anyone — if the run happened, the entry is true.

## How to read an entry

- **Asked** — what was requested, and how it was read.
- **Weighed** — the options and considerations in play.
- **Decided** — the call made, and the *why* behind it.
- **Unsure** — anything uncertain, or worth revisiting.

---

