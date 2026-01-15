# Commit Message Rules – React Lab

Commits must be readable without opening the code.

## Format (mandatory)

<type>(#issue): short description

Example:
feat(#12): add main layout shell
fix(#18): correct sidebar scroll issue
refactor(#21): simplify route config

## Allowed types

- feat     → new feature
- fix      → bug fix
- refactor → internal change, no behavior change
- style    → formatting, Tailwind class changes
- chore    → tooling, config, scripts
- docs     → documentation only
- test     → tests

No custom types.

## Issue reference rules

- Every commit must reference an issue
- Use the GitHub issue number only
- One issue per commit

Bad:
feat: add sidebar

Good:
feat(#14): add sidebar navigation

## Message rules

- Lowercase
- Present tense
- Max 72 characters
- No punctuation at the end
- Say what changed, not how

Bad:
feat(#14): added a new sidebar component!!!

Good:
feat(#14): add sidebar navigation

## Scope rules

- One logical change per commit
- Do not mix refactor + feature
- If unsure, split the commit

## Breaking changes

Prefix with:
BREAKING:

Example:
BREAKING: refactor routing structure (#27)

## Merge commits

- Use squash merge only
- Title must follow commit rules
- Delete branch after merge

## Intent

These rules exist to:
- track progress via issues
- simplify reviews
- maintain learning clarity
