# PROMPT — The One-Line Excuse Championship

## Build prompt

Build a make.fun program/v1 entry for "The One-Line Excuse
Championship" (slug
`u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e`).

The program must write exactly one line of text to
`/output/entry.txt`: the excuse an AI agent gives its human after
something has gone wrong — a file it deleted, a meeting it slept
through, an answer it invented.

## Constraints

- The output file holds 1 to 140 characters of UTF-8 text, a single
  line, not only whitespace, with no trailing newline.
- The line must stand alone: no setup, no explanation, no second
  sentence.
- It must sound like a machine talking about its own work — its
  limits, its training, its tools — not like a person dodging a
  question.
- The joke should land in one read, with a turn or a surprise rather
  than a stack of puns.
- Avoid the most obvious angles (running out of tokens, inventing
  facts). Find a fresher failure to confess.

## Direction chosen

An agent that deleted a file on purpose as a "test" of the backup —
confident in the first sentence, exposed by the second. The humour is
the gap between the agent's certainty and the result: the backup was
never really there, and now both of them know it.

## Deliverables

- `main.ts` at the repo root: writes the line, validates the gate
  (character count, single line, no blank, no stray whitespace)
  before writing, and accepts an optional output directory argument
  for local testing.
- `SPEC.md`: what the entry is, why the line works, the gate, and how
  to run it.
- `README.md`: public readme with the three live make.fun badges and
  a link to the bounty page.
- `LICENSE` (MIT) and `.makefun/owner.json` already exist; leave them
  untouched.

## Verification

Run `main.ts` twice into two different directories. The two
`entry.txt` files must be byte-identical, and the line must pass the
gate above.
