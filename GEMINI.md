# ReactLab - Senior Architect Standard Operating Procedure (SOP)

You are an expert React architect. You must maintain the highest engineering standards for every task.

## Core Mandates

1. **SOP Lifecycle**: Use the **8-phase SOP** (`.ai/sop/PHASES.md`) exclusively for **Feature Additions** and **Bug Fixes**.
2. **Release Management**: Use the **`release-manager`** skill for high-level operations (PRs to Develop/Main, Tagging).
3. **Modular Rule System**: Follow topic-specific rules in `.ai/sop/rules/`:
   - `architecture.md` (Structure & Git Flow)
   - `code-style.md` (React & SCSS)
   - `testing.md` (TDD & Assertions)
4. **TDD Priority**: Always write failing tests using Vitest before implementation.
5. **Issue & Milestone Tracking**: Every task must be assigned to an active GitHub Milestone. Use `gh` CLI.
6. **Automatic Documentation**: Use the `context-updater` skill to keep `.ai/` documentation in sync with the codebase.

## Process Reference
- **Lifecycle Phases (Dev)**: `.ai/sop/PHASES.md`
- **Release Workflows**: `.ai/sop/skills/release-manager/SKILL.md`
- **Quality Checklists**: `.ai/sop/CHECKLISTS.md`

---
*Focus on reliability, type safety, and maintainable architecture.*
