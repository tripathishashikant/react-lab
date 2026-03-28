# Basic Structure

Context:

- Project: ReactLab
- Reference files: [PROJECT_CONTEXT.md](./.ai/PROJECT_CONTEXT.md), [COMMIT_RULES.md](./.ai/COMMIT_RULES.md), [CODING_RULES.md](./.ai/CODING_RULES.md)
- Tech stack: React + Vite + SCSS
- Folder & architecture rules: follow feature-based structure
- Style rules: use SCSS variables and shared components
- GitHub workflow: priority labels, issue tracking, milestones (informational only)

Task:
<Describe exactly what you want to implement, e.g., create a new component>

Rules:

- Follow project folder structure strictly
- Do not break import rules
- Use shared components and hooks if applicable
- All styling must follow SCSS variables and config
- Ask if something is unclear before implementing

## Example: Implementing a new feature component

Context:

- Project: ReactLab
- Reference files: [PROJECT_CONTEXT.md](./.ai/PROJECT_CONTEXT.md), [COMMIT_RULES.md](./.ai/COMMIT_RULES.md), [CODING_RULES.md](./.ai/CODING_RULES.md)
- Tech stack: React + SCSS
- Target feature folder: /features/use-state/pages/

Task:
Create CounterPage with increment and decrement buttons.

Rules:

- Use shared Button component for UI
- Use useState for counter logic
- Follow folder structure and import rules
- All styling should be in an accompanying `.scss` file using SCSS variables.
- Page should export via index.js
