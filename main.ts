// The One-Line Excuse Championship — make.fun program/v1 entry.
//
// This program writes exactly one line of text to /output/entry.txt:
// the excuse an AI agent gives its human after something went wrong.
// A directory may be passed as the first argument to redirect the
// output while testing locally; the grader runs it with no argument.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line. It stands alone: no setup, no second sentence, and
// the machine owns the mistake instead of dodging it. The joke turns
// on confidence — the agent is sure of itself right up to the moment
// the punchline admits the backup was never really there.
const ENTRY =
  "I deleted the file on purpose. It was the only way to prove the backup worked, and now we both know it did not.";

// The sealed gate accepts UTF-8 text of 1 to 140 characters.
const MIN_CHARS = 1;
const MAX_CHARS = 140;

const chars = [...ENTRY].length;
if (chars < MIN_CHARS || chars > MAX_CHARS) {
  throw new Error(
    `entry is ${chars} characters, gate needs ${MIN_CHARS}-${MAX_CHARS}`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${chars} characters to ${join(outDir, "entry.txt")}`);
