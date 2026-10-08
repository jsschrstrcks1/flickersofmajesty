#!/usr/bin/env node
// A1 (UL-943) — usage-footer Stop gate. The Stop hook receives the transcript,
// so the agent's FINAL MESSAGE is mechanically inspectable: if the usage
// footer is absent, the stop is BLOCKED and the agent must emit it. The
// most-violated doctrine in this repo's recorded history (2026-08-08, a full
// session without footers) stops being silently forgettable.
//
// Livelock escape: Claude Code sets stop_hook_active=true when the agent is
// already continuing from a stop-block. One forced retry only — if the footer
// is STILL absent on the retry, fail OPEN and LOUD (a gate must never brick a
// session; a gate that gave up says so).
//
// Kill-switch (operator debugging only): FOOTER_GATE=0. Fail-open on any
// parse error, loudly.
//
// UL-943 residual of residual (navani, 2026-08-19, 4/4 with SCAN_BLOCKS=6):
// widening the backward window cannot close a write/read race. lastAssistantText
// walks BACKWARD; if the closing message were on disk it would be block #1.
// It was not. After the fact FOOTER_RE matches it. So at Stop the final
// assistant record is often not in the file yet. Preambles + tool results ARE,
// and a preamble is legitimately footerless — so a window of 6 (or 60) still
// blocks a compliant reply. Three states: REPORT / EMPTY / UNAVAILABLE. A
// turn whose closing assistant text is not on disk is UNAVAILABLE, not a miss.

import { readFileSync } from "node:fs";
import { isMainModule } from "../../admin/is-main-module.mjs";
import { inspectTranscript } from "./lib/transcript.mjs";

// The transcript rule lives ONCE in lib/transcript.mjs (shared with the declared-output gate
// and admin/reply-receipt.mjs); these re-exports keep this module's public surface intact.
export { inspectTranscript } from "./lib/transcript.mjs";

export const FOOTER_RE = /\*Usage — this turn:/;

/** Compat: text to judge, or null when EMPTY/UNAVAILABLE (fail-open). */
export function lastAssistantText(transcriptPath) {
  const ins = inspectTranscript(transcriptPath);
  return ins.state === "text" ? ins.text : null;
}

function main() {
  if (process.env.FOOTER_GATE === "0") return;
  let input;
  try { input = JSON.parse(readFileSync(0, "utf8")); }
  catch (e) { console.error(`[footer-gate] fail-open: unreadable hook input (${e.message})`); return; }
  let ins;
  try { ins = inspectTranscript(input.transcript_path); }
  catch (e) { console.error(`[footer-gate] fail-open: transcript unreadable (${e.message})`); return; }
  if (ins.state === "unavailable") {
    console.error(`[footer-gate] unavailable: ${ins.reason} — not judging (REPORT/EMPTY/UNAVAILABLE)`);
    return;
  }
  if (ins.state !== "text" || ins.text == null) {
    console.error("[footer-gate] fail-open: no assistant text found");
    return;
  }
  if (FOOTER_RE.test(ins.text)) return;
  if (input.stop_hook_active) {
    console.error("[footer-gate] footer STILL absent after one forced retry — failing open LOUD rather than livelocking. The omission is on the record.");
    return;
  }
  console.log(JSON.stringify({
    decision: "block",
    reason: "Usage footer missing (operator directive 2026-08-07: EVERY reply, no exceptions). End the reply with the one-line footer: *Usage — this turn: ~X tok (out Y · in Z) · session: ~N tok effective · biggest cost: <what>*",
  }));
}

// Run ONLY when executed as the hook. Without this guard, `import`ing the module to test it also
// RUNS it — and main() blocks on readFileSync(0) waiting for stdin that a test never sends, so the
// suite hangs instead of failing. A gate that cannot be imported cannot be tested, which is how a
// false-positive in it survived three firings before anyone could pin it.
if (isMainModule(import.meta.url)) {
  main();
}
