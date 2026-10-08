// Transcript reading for the Stop gates - ONE implementation, shared.
//
// The footer gate (stop-usage-footer-gate.mjs) and the declared-output gate
// (stop-governed-reply.mjs) must judge the SAME closing text, and the receipt
// verifier (admin/reply-receipt.mjs) must reproduce it byte-for-byte later, or a
// receipt's sha256 will never match the reply it was minted for. Two copies of
// this logic is how the precedent store's verify drifted from its loader
// (2026-09-04, M3 survived); so the rule lives here once and is re-exported.
//
// Three states, never two (UL-943 residual): a turn whose closing assistant text is
// not on disk yet is UNAVAILABLE, not a miss. Soli Deo Gloria.

import { readFileSync } from "node:fs";

export function parseRecords(transcriptPath) {
  const lines = readFileSync(transcriptPath, "utf8").split("\n");
  const records = [];
  for (const line of lines) {
    if (!line.trim()) continue;
    try { records.push(JSON.parse(line)); } catch { /* trailing half-write: skip */ }
  }
  return records;
}

function contentList(r) {
  const c = r?.message?.content;
  return Array.isArray(c) ? c : [];
}

export function isToolResult(r) {
  if (!r) return false;
  if (r.type === "tool_result") return true;
  if (r.type !== "user") return false;
  return contentList(r).some((x) => x && x.type === "tool_result");
}

export function isHumanUser(r) {
  return r && r.type === "user" && !isToolResult(r);
}

export function humanText(r) {
  if (!isHumanUser(r)) return "";
  const c = r.message?.content;
  const parts = Array.isArray(c) ? c : [{ type: "text", text: String(c ?? "") }];
  return parts.filter((x) => x && x.type === "text" && x.text).map((x) => x.text).join("\n");
}

export function isToolUse(r) {
  return r && r.type === "assistant" && contentList(r).some((x) => x && x.type === "tool_use");
}

export function assistantText(r) {
  if (!r || r.type !== "assistant") return "";
  return contentList(r).filter((c) => c && c.type === "text" && c.text).map((c) => c.text).join("\n");
}

export function isAssistantText(r) {
  return assistantText(r).length > 0;
}

export function isToolActivity(r) {
  return isToolUse(r) || isToolResult(r);
}

/**
 * Split records into turns: each turn is [humanRecord | null, ...records until the next human].
 * The first turn may have no human record (a transcript that starts mid-way).
 */
export function splitTurns(records) {
  const turns = [];
  let cur = { human: null, records: [] };
  for (const r of records) {
    if (isHumanUser(r)) {
      if (cur.human || cur.records.length) turns.push(cur);
      cur = { human: r, records: [] };
    } else {
      cur.records.push(r);
    }
  }
  if (cur.human || cur.records.length) turns.push(cur);
  return turns;
}

/**
 * The closing assistant text of one turn, under the three-state rule.
 * - unavailable: tool activity is last; the closing assistant record is not on disk yet.
 * - empty: no assistant text in the turn.
 * - text: the closing assistant text (all text records after the last tool activity, joined).
 */
export function closingText(turnRecords) {
  let lastTool = -1;
  for (let i = 0; i < turnRecords.length; i++) {
    if (isToolActivity(turnRecords[i])) lastTool = i;
  }
  if (lastTool >= 0) {
    const closing = turnRecords.slice(lastTool + 1).filter(isAssistantText);
    if (!closing.length) {
      return { state: "unavailable", text: null, reason: "this turn has tool activity but no closing assistant text - final message not on disk yet" };
    }
    return { state: "text", text: closing.map(assistantText).join("\n"), reason: null };
  }
  const texts = turnRecords.filter(isAssistantText);
  if (!texts.length) return { state: "empty", text: null, reason: "no assistant text after last user" };
  return { state: "text", text: texts.map(assistantText).join("\n"), reason: null };
}

/**
 * Inspect the LAST turn of a transcript (what a Stop gate judges).
 * Returns { state, text, reason, query } where query is the last human prompt (or null).
 */
export function inspectTranscript(transcriptPath) {
  const records = parseRecords(transcriptPath);
  if (!records.length) return { state: "empty", text: null, reason: "no records", query: null };
  const turns = splitTurns(records);
  const last = turns[turns.length - 1];
  const query = last.human ? humanText(last.human) || null : null;
  return { ...closingText(last.records), query };
}

/** Every turn's closing text, for after-the-fact verification (receipt audits). */
export function allTurns(transcriptPath) {
  const records = parseRecords(transcriptPath);
  return splitTurns(records).map((t, index) => ({ index, query: t.human ? humanText(t.human) || null : null, ...closingText(t.records) }));
}

function firstPresent(obj, keys) {
  for (const k of keys) {
    const v = obj?.[k];
    if (v != null && v !== "") return v;
  }
  return undefined;
}

const REPLY_TEXT_KEYS = [
  "lastAssistantMessage", "last_assistant_message",
  "final_response", "assistant_response", "response_text", "lastAgentMessage",
];

/**
 * Inspect a Stop-hook stdin payload from Claude (snake_case + transcript_path),
 * Grok (camelCase + lastAssistantMessage), Hermes (extra.final_response on
 * pre_verify / post_llm_call), or Codex (Claude-shaped Stop when wired).
 *
 * Skip: when `reason` is present and is not `end_turn` (Grok session-end Stop),
 * or when hook_event_name is a Hermes session-end event. Claude payloads have
 * no reason field and are never skipped this way.
 *
 * Returns { state, text, reason, query, skip, stopHookActive, sessionId }.
 */
export function inspectStopInput(input) {
  const base = { state: "empty", text: null, reason: "no input", query: null, skip: false, stopHookActive: false, sessionId: null };
  if (!input || typeof input !== "object") return base;

  const extra = (input.extra && typeof input.extra === "object") ? input.extra : {};
  const eventName = String(input.hook_event_name || input.hookEventName || "");
  const sessionEndEvent = /session_end|session_finalize|session_reset|sessionEnd/i.test(eventName);
  const stopReason = typeof input.reason === "string" ? input.reason : null;
  const skip = sessionEndEvent || (stopReason != null && stopReason !== "" && stopReason !== "end_turn");
  const attempt = Number(extra.attempt);
  const stopHookActive = !!(input.stop_hook_active ?? input.stopHookActive ?? (Number.isFinite(attempt) && attempt > 0));
  const sessionId = firstPresent(input, ["session_id", "sessionId"]) ?? firstPresent(extra, ["session_id", "sessionId"]) ?? null;
  const queryRaw = firstPresent(input, ["lastUserMessage", "last_user_message", "userPrompt", "user_prompt", "user_message"])
    ?? firstPresent(extra, ["user_message", "lastUserMessage"]);
  const query = typeof queryRaw === "string" && queryRaw.length ? queryRaw : null;
  const common = { skip, stopHookActive, sessionId, query };

  if (skip) {
    const why = sessionEndEvent
      ? `hook event ${eventName} is session-end - not judging`
      : `stop reason ${stopReason} is not end_turn - not judging`;
    return { state: "empty", text: null, reason: why, ...common };
  }

  const lastMsg = firstPresent(input, REPLY_TEXT_KEYS) ?? firstPresent(extra, REPLY_TEXT_KEYS);
  if (typeof lastMsg === "string" && lastMsg.length > 0) {
    return { state: "text", text: lastMsg, reason: null, ...common };
  }

  const transcriptPath = input.transcript_path ?? input.transcriptPath;
  if (typeof transcriptPath === "string" && transcriptPath.length) {
    const ins = inspectTranscript(transcriptPath);
    return { ...ins, ...common, query: ins.query ?? query };
  }

  return { state: "empty", text: null, reason: "no assistant text", ...common };
}
