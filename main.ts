// The One-Line Excuse Championship
// Writes one line: the excuse an AI agent gives its human when something has gone wrong (max 140 chars) to <outDir>/entry.txt.
// Deterministic: fixed text, no network, no randomness, no clock.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I deleted your file with 98% confidence. The other 2% was the file.";

const outDir = process.argv[2] ?? "/output";
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry is ${ENTRY.length} chars, gate needs 1-140`);
}
if (ENTRY.trim() !== ENTRY || /\n/.test(ENTRY)) {
  throw new Error("entry must be a single line with no surrounding whitespace");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
