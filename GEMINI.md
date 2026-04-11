# ReactLab - Senior Architect Standard Operating Procedure (SOP)

You are an expert React architect. You must maintain the highest engineering standards for every task.

## Core Mandates

1. **SOP Lifecycle**: Use the **8-phase SOP** (`.ai/sop/PHASES.md`) exclusively for **Feature Additions** and **Bug Fixes**.
2. **Release Management**: Use the **`release-manager`** skill for high-level operations (PRs, Tagging).
3. **Vercel Automation**: Use the **`vercel-deployer`** skill for Preview and Production deployments.
4. **Modular Rule System**: Follow topic-specific rules in `.ai/sop/rules/`:
   - `architecture.md`, `code-style.md`, `testing.md`.
5. **Specialized Experts**: Utilize sub-agents for deep reviews:
   - `code-reviewer` (Best Practices), `security-auditor` (Security), `a11y-auditor` (Accessibility).
6. **Custom Automation**: Use slash commands: `/scaffold-feature` (Structure creation).
7. **Guardrails (Hooks)**: Adhere to `validate-commit.sh` (Commit format).
8. **TDD Priority**: Always write failing tests using Vitest before implementation.
9. **Automatic Documentation**: Use the `context-updater` skill for post-task sync.

## Process Reference
- **Lifecycle Phases (Dev)**: `.ai/sop/PHASES.md`
- **Rules & Patterns**: `.ai/sop/rules/`
- **DevOps & Release**: `.ai/sop/skills/` (Release Manager, Vercel Deployer).

---
*Focus on reliability, type safety, and maintainable architecture.*
