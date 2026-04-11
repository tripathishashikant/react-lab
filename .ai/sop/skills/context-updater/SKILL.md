name: context-updater
description: Automates the update of .ai/PROJECT_CONTEXT.md and .ai/CODING_RULES.md after each task to ensure documentation matches the current codebase state. Use this skill in Phase 8 of the SOP workflow to capture new features, architectural changes, and coding patterns.

# Context Updater

This skill ensures that the project's "Source of Truth" documents stay in sync with the actual implementation.

## Workflow

### 1. Change Analysis
- Use `git diff HEAD~1` (or compare staged changes) to identify:
  - New files/directories created.
  - New shared components added.
  - New features or sub-features.
  - Changes in import patterns or SCSS usage.
  - New libraries added to `package.json`.

### 2. Update PROJECT_CONTEXT.md
- **Features**: If a new feature was added, add its description and folder structure to the "Learning modules" section.
- **Shared Components**: If a new shared component was added, list it in the "Reusable building blocks" section.
- **Architecture**: If the routing or layout logic changed, update the relevant sections.

### 3. Update CODING_RULES.md (and .ai/CODING_RULES.md)
- **New Patterns**: If a new pattern was established (e.g., a specific way to handle form validation or a new SCSS mixin), add it as a rule.
- **Refined Rules**: If an existing rule was found to be too loose or restrictive during implementation, refine it.

### 4. Surgical Updates
- Use the `replace` tool to perform surgical updates. Do not overwrite the entire file unless it's a massive refactor.
- Maintain the existing tone and formatting of the markdown files.
