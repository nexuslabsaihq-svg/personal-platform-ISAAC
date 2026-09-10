# AI Continuity Workspace

This directory is the durable operational memory for coding agents. It is not product documentation and must not contain credentials, personal data, or copied chat transcripts.

## Starting a session

Read in this order:

1. `../../AGENTS.md`
2. `WORKLOG.md` (latest entry first)
3. `SESSION-PROTOCOL.md`
4. Relevant source files and Git history

## Files

| File | Purpose |
| --- | --- |
| `WORKLOG.md` | Append-only record of meaningful work sessions and the exact next action. |
| `SESSION-PROTOCOL.md` | Required opening, working, validation, backup, security, and closeout procedure. |

## Rules for the work log

- Record facts, decisions, commands run, and limitations; do not write speculative claims.
- State why a component or approach was chosen and which alternative was rejected when the decision is material.
- Never add API keys, tokens, `.env` values, exact addresses, identity numbers, phone numbers, or private client/employer details.
- Keep user-visible release notes in `CHANGELOG.md` if one is introduced later; do not use the work log as a product changelog.
