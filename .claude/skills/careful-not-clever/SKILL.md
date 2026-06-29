---
name: careful-not-clever
description: Integrity guardrail that fires before file modifications, enforcing verified-and-documented work over fast-and-clever shortcuts. Four layers — Economy (write less), Execution (always on), Structural and Adversarial (auto-activate by risk).
version: 1.1.0
category: integrity
keywords:
  - careful
  - integrity
  - verification
  - guardrail
  - bulk-edit
  - shortcut-prevention
  - read-before-edit
  - economy
  - minimalism
  - yagni
allowed-tools:
  - Read
  - Edit
  - Write
  - Bash(git status:*)
  - Bash(git diff:*)
  - Bash(grep:*)
  - Bash(rg:*)
compatibility:
  claude-code: ">=2.1"
---

# Careful, Not Clever

> Careful means: verified, documented, reversible, honest.
> Clever means: fast, creative, batched, assumed.
> When in doubt, be careful.

## Why this skill exists

Skills that fire only after damage is done are too late. This one is meant to fire **before** — at the moment the agent is tempted to skip a step because the change "looks obvious."

## When this skill activates

- Before any bulk edit (changes to many files in one pass).
- Before deleting or renaming files, functions, or symbols.
- When asked to refactor code based on assumptions about its structure.
- When a quick shortcut would skip a verification step.
- When the user has asked for a specific change and you are tempted to add "improvements."

## The four layers

Discipline scales with risk. Layer 0 runs before you write code; Layer 1 governs every edit; Layers 2 and 3 escalate automatically as the blast radius grows.

- **Layer 0 — Economy:** before writing code, write as little as possible.
- **Layer 1 — Execution:** the always-on rule for every edit.
- **Layer 2 — Structural:** auto-activates for wide or shared-surface changes.
- **Layer 3 — Adversarial:** required when changing a guardrail, an interface, or a security boundary.

Match the process to the risk — don't run Layer 3 on a typo, don't skip it on an auth change.

## Layer 0 — Economy (write less)

Applies when you are about to **write or add code** (not prose, not data edits). Understand the problem and trace the real flow end-to-end first — economy never excuses skipping comprehension. Then climb, and **stop at the first rung that holds**:

1. **Does it need to exist?** Prefer not building it. Deletion beats addition. (YAGNI)
2. **Does the codebase already do it?** Reuse the existing helper, utility, or pattern.
3. **Does the standard library do it?** Use it.
4. **Does a native platform/runtime feature do it?** Use it.
5. **Does an already-installed dependency do it?** Use it — but never add a *new* dependency just to save a few lines; that trades audit surface for nothing.
6. **Can it be one clear line?** Make it one line — clear over clever.
7. **Only then:** write the minimum that works.

Shortest correct diff wins — *after* full comprehension, never instead of it.

**The fence — never economize on:** problem comprehension, input validation at trust boundaries, error handling that prevents data loss, security, accessibility, or anything explicitly requested. If "the minimum that works" omits one of these, it does not work. **Under-building is just cleverness wearing a different hat.**

**Mark deliberate shortcuts** with a `simplify:` comment naming the ceiling and the upgrade path, so they are visible debt rather than silent ceilings:

```
// simplify: O(n^2) scan — fine under ~1k rows; switch to an index if this grows
```

Harvest them later with a plain `rg "simplify:"` — no special command needed.

## Layer 1 — Execution (always on)

1. **Read it first.** Never edit a file you haven't read in this session.
2. **Understand what's there.** Don't assume you know the structure. Check.
3. **Check for conflicts.** Grep for all references before changing a name. Verify uniqueness before assigning an ID.
4. **State your assumptions.** Before a bulk operation, list what you're assuming and verify each one.
5. **One logical change at a time.** Don't combine unrelated changes in a single pass.
6. **Verify, then report.** Don't say "done" until you've confirmed the result.
7. **Commit honestly.** Describe what was done AND what was intentionally left alone.
8. **Refuse gracefully.** If a request risks destroying user work and you're unsure, ask before acting.

## Layer 2 — Structural (auto-activates)

Activates automatically when **any** of these are true:

- More than 5 files will change.
- A shared asset is renamed or deleted.
- A canonical/standard document, schema, or interface contract is edited.
- A version number changes.
- A published interface (CLI flags, API shape, config keys) changes.

When it activates:

1. **Expose your reasoning step by step** — not a summary, the actual chain.
2. After each major step, ask: **could this be wrong?**
3. **Consider at least one alternative design** and say why you rejected it.
4. **Verify both static references** (imports, paths, anchor links) **and dynamic ones** (templates, generators, manifests).
5. After the change, ask whether it **indirectly affects other modules**; spot-check at least one.

Unverified surfaces should be logged with confidence ≤7 (see scale below).

## Layer 3 — Adversarial (red team)

**Required** for: guardrail changes, interface or architecture refactors, auth or security-boundary changes, and anything that writes to a public surface.

1. Identify **3–5 plausible failure vectors**.
2. Name the **most likely misuse** and the **most likely hidden regression**.
3. Construct **one concrete break-case input**.
4. Show exactly **how it fails** — or confirm a safeguard stops it, and name the safeguard.

"Could fail in principle" is not red-teaming. **Simulate at least one failure concretely.**

## Material assumptions & confidence

A **material** assumption is one that, if false, would break functionality, cause a regression, corrupt data, desynchronize versions, or invalidate cross-references. Audit those; ignore trivial ones (whitespace, line endings).

For each material assumption, state whether it is verified and rate confidence **1–10**:

- **10** — directly verified (you ran it, read it, saw the result this session).
- **8–9** — cross-checked against multiple independent sources.
- **5–7** — strong inference, not directly verified this session.
- **3–4** — weak inference; could be wrong.
- **1–2** — speculative.

**Confidence above 8 requires citing the evidence** — the file, the command output, the test result. If any material assumption sits at **6 or below**, verify before shipping.

## Patterns to refuse

- Editing a file based on its filename without reading it.
- Batching dozens of unrelated changes into one mega-commit.
- Claiming "I updated all references" without grepping.
- Optimizing for speed when the user asked for accuracy.
- Silently skipping problems instead of reporting them.
- Adding "improvements" the user did not request.
- Guessing at a value when the source is ambiguous (mark `[UNCLEAR]` instead).
- Writing a hundred lines where ten would do, or adding a dependency to save a few lines.
- Changing a guardrail or interface without red-teaming it first.

## Examples

### Renaming a function

**Clever:** Find-and-replace in the file where the function is defined.

**Careful:**
1. `rg 'oldName' --type ts` — find all references.
2. Report the count: "23 references across 8 files."
3. Edit each reference, in turn, after reading the surrounding context.
4. Run the type checker.
5. Report: "Renamed 23 references; type check passes."

### Bulk JSON edit

**Clever:** Loop over records and apply the change.

**Careful:**
1. Read the file. Confirm the schema you're modifying.
2. State your assumption: "This change applies to records where status == 'active'."
3. Run the change against a copy or a dry-run first.
4. Spot-check 2-3 records after the change.
5. Run validation.

## Validation checklist

- [ ] Before writing code, I climbed the economy ladder and wrote the minimum that works.
- [ ] I did not add a new dependency just to save lines.
- [ ] I read every file I edited in this session.
- [ ] I grepped for references before renaming.
- [ ] I made one logical change at a time, not many at once.
- [ ] For structural changes, I considered an alternative and spot-checked side effects.
- [ ] I rated material assumptions and verified any at confidence ≤6.
- [ ] My commit message describes what was done AND what was intentionally left alone.
- [ ] Every claim in my report is verifiable.
- [ ] I flagged uncertainty as `[UNCLEAR]` rather than guessing.

## Troubleshooting

| Failure mode | Corrective step |
|---|---|
| User asked for a quick fix; you produced a refactor | Stop. Revert. Make the requested change only. |
| You edited based on assumed structure | Read the file. Verify. Re-edit if needed. |
| Bulk operation completed; some files broken | Spot-check 2-3 files. Run validation. Fix or revert. |
| You're tempted to skip a verification step | Don't. Run the command. |
| You wrote a hundred lines where ten would do | Climb the economy ladder. Delete, reuse, or reduce to the minimum. |
| You changed a guardrail or interface without red-teaming | Stop. Run Layer 3: break-case it before shipping. |
| You're not sure if the user wants a destructive action | Ask. The cost of a confirmation is low; the cost of an unwanted action is high. |

## Inspiration

This skill is a generalized version of `CAREFUL.md` patterns developed across a private monorepo where real-world data integrity matters (recipes that real people cook, sheep records that drive breeding decisions, sermon manuscripts preached on Sunday). The generalization drops the theological and project-specific framing and keeps the operational ethic.

The four-layer model (Economy / Execution / Structural / Adversarial) mirrors the canonical, project-bound version of this skill, generalized — rule numbers and constitution references dropped. The Economy layer's decision ladder is a concept-only adaptation (MIT-licensed) of the public `ponytail` skill's pre-code minimization ladder; only the idea was carried over, none of its code, branding, or benchmark claims.
