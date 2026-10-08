// admin/is-main-module.mjs — the ONE correct "am I being run directly?" check for a CLI.
//
// The naive main-guard `import.meta.url === `file://${process.argv[1]}`` silently NO-OPS whenever
// the invocation path contains a symlink, and macOS makes that the common case: `/var` IS a symlink
// to `/private/var`, so a run from a temp dir gives argv[1]=/var/... while import.meta.url resolves
// to file:///private/var/... — no match, main() never runs, and the process exits 0 having done
// NOTHING. For a tool the household MANDATES, a silent no-op that exits 0 is indistinguishable from
// "there was nothing to do": a false calm. The raw `file://` + string concat also mangles a path
// containing a space or `#`, which a proper URL encode does not.
//
// resolve-library-conflicts.mjs (the sanctioned conflict resolver) fixed this inline for itself
// (UL-354/308/309, PR #2887). The idiom had already been copy-pasted into ~10 more admin CLIs, so
// the fix lives here ONCE — importing it is how a new CLI gets the correct check without re-deriving
// the fragile one. Soli Deo Gloria.
import { realpathSync } from "node:fs";
import { pathToFileURL } from "node:url";

/**
 * True iff this module file is the entry point node was launched with — resolving symlinks on BOTH
 * sides so a symlinked invocation path still matches, and URL-encoding the path so spaces / `#`
 * do not break the comparison.
 *
 * @param {string} importMetaUrl  the caller's `import.meta.url`
 * @param {string} [entry=process.argv[1]]  the launched script path
 * @returns {boolean}
 */
export function isMainModule(importMetaUrl, entry = process.argv[1]) {
  if (typeof importMetaUrl !== "string" || !importMetaUrl || typeof entry !== "string" || !entry) {
    return false;
  }
  try {
    return importMetaUrl === pathToFileURL(realpathSync(entry)).href;
  } catch {
    // entry may not exist on disk (odd launchers / virtual paths) — fall back to a correctly
    // ENCODED but unresolved URL. Still an improvement over raw string concat (handles spaces/#).
    return importMetaUrl === pathToFileURL(entry).href;
  }
}
