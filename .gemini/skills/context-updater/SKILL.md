# Context Updater

This skill ensures that the project's "Source of Truth" document (`GEMINI.md`) stays in sync with the actual implementation. Use this skill in Phase 8 of the SOP workflow to capture new features, architectural changes, and coding patterns.

## Metadata

- **Name**: context-updater
- **Description**: Automates the update of GEMINI.md after each task to ensure documentation matches the current codebase state.

## Workflows

### 1. Identify Changes
After a task is completed, identify any:
- New features or components.
- Changes to the project architecture or folder structure.
- New coding patterns or refined rules.

### 2. Update GEMINI.md
- **Features**: If a new feature was added, add its description and folder structure to the "Learning modules" section.
- **Shared Components**: If a new shared component was added, list it in the "Reusable building blocks" section.
- **Architecture**: If the routing or layout logic changed, update the relevant sections.
- **Rules**: If a new pattern was established or a rule refined, update the "AI Coding Rules" section.

### 3. Surgical Updates
- Use the `replace` tool to perform surgical updates. Do not overwrite the entire file unless it's a massive refactor.

## Usage Guide
When activated, the context-updater will guide you through the process of auditing the codebase for changes and applying those changes to `GEMINI.md`.

---
*Maintained by the Senior Architect.*
