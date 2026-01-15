# Basic Structure
Context:
- Project: ReactLab
- Reference files: [PROJECT_CONTEXT.md](./.ai/PROJECT_CONTEXT.md), [COMMIT_RULES.md](./.ai/COMMIT_RULES.md), [CODING_RULES.md](./.ai/CODING_RULES.md)
- Tech stack: React + Vite + TypeScript + Tailwind
- Folder & architecture rules: follow feature-based structure
- Style rules: use Tailwind tokens and shared components
- GitHub workflow: priority labels, issue tracking, milestones (informational only)

Task:
<Describe exactly what you want to implement, e.g., add Tailwind to project or create a new component>

Rules:
- Follow project folder structure strictly
- Do not break import rules
- Use shared components and hooks if applicable
- All styling must follow Tailwind tokens and config
- Ask if something is unclear before implementing


## Example: Adding Tailwind
Context:
- Project: ReactLab
- Reference files: [PROJECT_CONTEXT.md](./.ai/PROJECT_CONTEXT.md), [COMMIT_RULES.md](./.ai/COMMIT_RULES.md), [CODING_RULES.md](./.ai/CODING_RULES.md)
- Tech stack: React + Vite + TypeScript
- Existing styling: none yet, planning to use Tailwind

Task:
Add Tailwind CSS to the project.

Rules:
- Configure tailwind.config.ts using design tokens from PROJECT_CONTEXT.md
- Add base global styles in styles/globals.css
- Ensure postcss.config.js and main.tsx are configured to load Tailwind
- Verify that default App renders using Tailwind classes
- No other library additions
- Follow existing folder structure

## Example: Implementing a new feature component
Context:
- Project: ReactLab
- Reference files: [PROJECT_CONTEXT.md](./.ai/PROJECT_CONTEXT.md), [COMMIT_RULES.md](./.ai/COMMIT_RULES.md), [CODING_RULES.md](./.ai/CODING_RULES.md)
- Tech stack: React + TypeScript + Tailwind
- Target feature folder: /features/useState/pages/

Task:
Create CounterPage with increment and decrement buttons.

Rules:
- Use shared Button component for UI
- Use useState for counter logic
- Follow folder structure and import rules
- All styling with Tailwind tokens
- Page should export via index.ts

