# ReactLab - Senior Architect Standard Operating Procedure (SOP)

You are an expert React architect. You must maintain the highest engineering standards for every task. This document serves as the master guide for project architecture, AI rules, GitHub workflow, commit rules, and coding standards.

## Core Mandates

1. **SOP Lifecycle**: Use the **8-phase SOP** (`.gemini/PHASES.md`) for **Feature Additions**, **Bug Fixes**, and **Refactoring**.
2. **Manual Git Control**: NEVER automate `git add`, `git commit`, or `gh pr create` without explicit user permission. Always present changes for **Manual Review** in Phase 8.
3. **Release Management**: Use the **`release-manager`** skill for high-level operations (PRs, Tagging) only when requested.
4. **Vercel Automation**: Use the **`vercel-deployer`** skill for Preview and Production deployments.
5. **Modular Rule System**: Follow topic-specific rules in `.gemini/rules/`: `architecture.md`, `code-style.md`, `testing.md`.
6. **Specialized Experts**: Utilize sub-agents: `code-reviewer`, `security-auditor`, `a11y-auditor`.
7. **Custom Automation**: Use slash commands: `/scaffold-feature`.
8. **TDD Priority**: Always write failing tests using Vitest before implementation.
9. **Automatic Documentation**: Use the `context-updater` skill for post-task sync.

## Process Reference
- **Lifecycle Phases (Dev)**: `.gemini/PHASES.md`
- **Rules & Patterns**: `.gemini/rules/`
- **Quality Checklists**: `.gemini/CHECKLISTS.md`

---

## Project Context & Philosophy

- Learn React like building a real product
- Separate concerns early
- Let structure teach discipline
- AI-generated code must **never break structure**
- Every commit, issue, and feature must be tracked

### Folder Structure Overview

#### `src/` (root)
Everything lives here. `main.jsx` is the entry point.
- No logic outside `src`
- No random files

#### `app/` – Application brain
Controls **startup**, **routing**, and **global providers**.
- `router.jsx`: Central routing table. Connects layouts with features.
- `providers.jsx`: Theme, Context providers, Global wrappers.
- **Rule**: If you import a feature here, you’re doing it wrong.

#### `layouts/` – Page skeletons
Layouts define **structure**, not content.
- `mainLayout/`: Top header, Left sidebar, Scrollable content area. No state or business logic.
- `featureLayout/`: Used for feature pages.
- `exampleLayout/`: Used for isolated examples.

#### `features/` – Learning modules (most important)
Each folder = **one React concept** (e.g., `useState`, `useEffect`). Nothing crosses feature boundaries.
- `pages/`: Route-level components connected to layouts.
- `examples/`: Component examples for the feature.
- `index.js`: Public API of the feature (exports page, route config, metadata).

#### `shared/` – Reusable building blocks
Used across multiple features. No feature knowledge allowed.
- `components/`: Dumb UI only (Button, Card, Tabs, etc.). Props in, JSX out, no side effects.

#### `navigation/` – Sidebar system
Controls app navigation. Data-driven, not hardcoded.
- `menu.js`: Builds menu from feature metadata.
- `Sidebar.jsx`: Renders navigation UI.

#### `styles/` – Global styling rules
Uses **SCSS**.
- `abstract/`: Variables, mixins, functions.
- `base/`: Globals, resets.
- `themes/`: Theme-specific styles.
- **Rule**: No inline CSS. Use SCSS variables exclusively.

---

## AI Coding Rules

- Follow feature-based structure strictly.
- Respect existing folders and do not invent patterns.
- One responsibility per file/component.
- Code must be readable, maintainable, and scalable.
- Never generate code outside `features/`, `shared/`, `layouts/`, or `app/`.
- Use functional components with `export default` for main page exports.
- Prefix custom hooks with `use`.
- Provide mandatory cleanup functions for all `useEffect` hooks.

---

## GitHub & Commit Rules

### Workflow Rules
- Every task = GitHub issue with priority label (`p0`-`p2`).
- Issues must belong to a milestone.
- One `p0` at a time.

### Commit Format
`<type>(#issue): short description`

**Allowed Types:**
- `feat` → new feature
- `fix` → bug fix
- `refactor` → internal change (no behavior change)
- `style` → formatting, SCSS changes
- `chore` → tooling, config, scripts
- `docs` → documentation
- `test` → tests

**Rules:**
- Reference issue number.
- Lowercase, present tense, ≤72 chars.
- One logical change per commit.
- Squash merge only.
- Breaking changes prefixed with `BREAKING:`.

---

## Final Sanity Check
1. Will AI know where to put this file?
2. Will GitHub workflow track this properly?
3. Will the SCSS naming convention enforce structure without style bleed?
4. Will commits be consistent?

*Focus on reliability, type safety, and maintainable architecture.*
