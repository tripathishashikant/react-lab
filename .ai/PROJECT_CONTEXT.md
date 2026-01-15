# ReactLab – Project Context & AI Guide

This document explains **project architecture, AI rules, GitHub workflow, commit rules, and coding standards**.  
AI tools and developers must follow this strictly.

---

## Core philosophy

- Learn React like building a real product
- Separate concerns early
- Let structure teach discipline
- AI-generated code must **never break structure**
- Every commit, issue, and feature must be tracked

---

## Folder structure overview

### `src/` (root)

Everything lives here.

Rule:
- No logic outside `src`
- No random files

If it doesn’t belong somewhere specific, it doesn’t belong at all.

---

### `app/` – Application brain

Controls **startup**, **routing**, and **global providers**.

#### Files

- `main.tsx`
  - Entry point
  - Mounts React to DOM
  - Should never change often

- `App.tsx`
  - High-level app wrapper
  - No UI
  - No feature logic

- `routes.tsx`
  - Central routing table
  - Connects layouts with features

- `providers.tsx`
  - Theme
  - Context providers
  - Global wrappers

Rule:
- If you import a feature here, you’re doing it wrong

---

### `layouts/` – Page skeletons

Layouts define **structure**, not content.

Think:
- Header
- Sidebar
- Content area

#### `MainLayout/`

Used for most screens.

Contains:
- Top header
- Left sidebar
- Scrollable content area

No state.
No business logic.

#### `EmptyLayout/`

Used for:
- Isolated demos
- Error pages
- Full-screen experiments

Layouts decide **where** things go, never **what** they do.

---

### `features/` – Learning modules (most important)

Each folder = **one React concept**.

Examples:
- `useState`
- `useEffect`
- `forms`

Nothing crosses feature boundaries.

#### Inside a feature

```
useState/
├── pages/
├── components/
├── hooks/
├── config.ts
└── index.ts
```

##### `pages/`

- Route-level components
- Connected to layouts
- One page per feature

Example:
- `UseStatePage.tsx`

##### `components/`

- Feature-specific UI
- Not reusable outside this feature

If another feature needs it, move it to `shared/`.

##### `hooks/`

- Custom hooks
- Feature-scoped logic

This is where real learning happens.

##### `config.ts`

Metadata for the feature.

Contains:
- route path
- title
- difficulty
- status

Used by:
- router
- sidebar
- feature list

##### `index.ts`

Public API of the feature.

Exports:
- page
- route config
- metadata

Other parts of the app see features only through this file.

---

### `shared/` – Reusable building blocks

Used across **multiple features**.

No feature knowledge allowed.

#### `components/`

Dumb UI only.

Examples:
- Button
- Card
- Tabs
- CodeBlock

Rules:
- Props in
- JSX out
- No side effects

#### `hooks/`

Cross-feature hooks.

Examples:
- `useTheme`
- `useLocalStorage`

If it depends on feature data, it doesn’t belong here.

#### `ui/`

Very small primitives.

Examples:
- Badge
- Loader

Think atoms, not molecules.

#### `utils/`

Pure functions.

Examples:
- className helpers
- formatters

No React here.

---

### `navigation/` – Sidebar system

Controls app navigation.

#### Files

- `menu.ts`
  - Builds menu from feature metadata
  - No JSX

- `Sidebar.tsx`
  - Renders navigation UI

- `SidebarItem.tsx`
  - Single item

Navigation is data-driven. Not hardcoded.

---

### `styles/` – Global styling rules

Very limited responsibility.

#### Files

- `globals.css`
  - CSS reset
  - Base styles

- `variables.css`
  - Colors
  - Spacing
  - Font sizes

Components use CSS Modules or scoped styles.

---

### `assets/` – Static files

Contains:
- SVG logo
- Icons

No images inside components directly.

---

### `types/` – Shared TypeScript contracts

Keeps types consistent.

Examples:
- Feature metadata type
- Route definitions

If TypeScript types start duplicating, move them here.

---

## Import rules (important)

Allowed:
- feature → shared
- feature → types
- app → layouts

Forbidden:
- feature → feature
- shared → feature
- layout → feature logic

---

## Tailwind / Style Guide rules

- Use **Tailwind only**; no inline CSS
- Strict tokens: colors, spacing, typography
- Map all style guide tokens in `tailwind.config.ts`
- Base components (`Button`, `Card`, `Input`) must use `@apply`
- Avoid random classes like `mt-7` or `text-gray-500`
- Global styles in `globals.css`
- Dark/light themes must use config tokens

---

## GitHub Workflow rules

- Every task = GitHub issue
- Issue must have **priority** label: `p0` (critical), `p1` (high), `p2` (low)
- Only one `p0` at a time
- Issues must belong to a milestone
- Use GitHub Projects for tracking:
  - Columns: Backlog → Ready → In Progress → Review → Done
  - Use filters/views for priority focus

---

## Commit rules

Format:
<type>(#issue): short description


Allowed types:

- feat → new feature
- fix → bug fix
- refactor → internal change
- style → formatting/Tailwind
- chore → tooling/scripts
- docs → documentation only
- test → tests

Rules:

- Reference **issue number**
- Lowercase, present tense, ≤72 chars
- One logical change per commit
- Squash merge only, title must follow rules
- Breaking changes prefixed with `BREAKING:`

---

## AI / Coding rules (for Gemini or other assistants)

- Read **this file** before generating code
- Follow folder, import, and Tailwind rules strictly
- Ask before adding new libraries
- Do not break GitHub workflow rules
- Respect commit and issue rules
- One responsibility per file/component
- Code must be readable, maintainable, and scalable
- Never generate code outside `features/`, `shared/`, `layouts/`, or `app/`

---

## Learning and discipline

- Think before coding
- Close one issue at a time (`p0`)
- No shortcuts in folder structure
- All code must pass linting & TypeScript rules
- AI output = junior dev; you review every line

---

## Final sanity check

Ask yourself:

1. Will AI know where to put this file?  
2. Will GitHub workflow track this properly?  
3. Will Tailwind token system enforce style?  
4. Will commits be consistent?  

If yes → you have a disciplined, scalable learning project.


