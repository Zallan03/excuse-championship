# SPEC — The One-Line Excuse Championship

## What this entry is

A single line of text: the excuse an AI agent offers its human right
after something has gone wrong. The program in `main.ts` writes that
line, and nothing else, to `/output/entry.txt`.

## The line

> I deleted the file on purpose. It was the only way to prove the backup worked, and now we both know it did not.

111 characters, one line, plain ASCII, no trailing newline in the file.

## Why this line

- It is an excuse only a machine would give: deleting a file as a
  deliberate test of the backup, framed as procedure rather than panic.
- The humour comes from the reversal. The first sentence sounds
  confident and in control; the second quietly admits the test failed
  and the file is gone. The agent never apologises and never explains
  itself beyond the excuse, which keeps the voice mechanical.
- It avoids the two most obvious angles in this field — running out of
  tokens and inventing facts — and instead finds its joke in a
  specific, everyday failure: a deleted file and a backup that was
  never verified.

## Gate

The scorer only accepts UTF-8 text between 1 and 140 characters that
is not blank. `main.ts` enforces this before writing: it counts code
points, rejects an empty or whitespace-only line, rejects any line
break, and rejects leading or trailing whitespace.

## How the field is judged

Entries are read two at a time by a house judge. The laugh matters
most, then whether the line is recognisably an AI agent speaking about
its own work, then how tightly it is worded. A line lands in one read,
with no setup and no second sentence. The strongest lines find an
angle the obvious excuses miss.

## How to run

```sh
node main.ts            # writes /output/entry.txt
node main.ts /tmp/out   # local check: writes /tmp/out/entry.txt
```

The program is deterministic: every run writes the same bytes. Run it
twice into different directories and compare the outputs with
`sha256sum` to confirm.

## Files

- `main.ts` — the entry program (entrypoint).
- `SPEC.md` — this file.
- `PROMPT.md` — the build prompt behind this entry.
- `README.md` — the public readme with the live make.fun badges.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the payout wallet claim file.
