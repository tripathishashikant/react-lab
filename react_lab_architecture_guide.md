# ReactLab – Architecture & Folder Guide

This document explains **what every folder does**, **why it exists**, and **how you should use it**.

Read this before writing code.

---

## Core philosophy

- Learn React like you build real products
- Separate concerns early
- Let structure teach you discipline

If a folder feels unnecessary, keep it anyway. You’ll understand later.

---

## `src/` (root)

Everything lives here.

Rule:
- No logic outside `src`
- No random files

If it doesn’t belong somewhere specific, it doesn’t belong at all.

---

## `app/` – Application brain

Controls **startup**, **routing**, and **global providers**.

### Files

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

## `layouts/` – Page skeletons

Layouts define **structure**, not content.

Think:
- Header
- Sidebar
- Content area

### `MainLayout/`

Used for most screens.

Contains:
- Top header
- Left sidebar
- Scrollable content area

No state.
No business logic.

### `EmptyLayout/`

Used for:
- Isolated demos
- Error pages
- Full-screen experiments

Layouts decide **where** things go, never **what** they do.

---

## `features/` – Learning modules (most important)

Each folder = **one React concept**.

Examples:
- `useState`
- `useEffect`
- `forms`

Nothing crosses feature boundaries.

### Inside a feature

```
useState/
├── pages/
├── components/
├── hooks/
├── config.ts
└── index.ts
```

#### `pages/`

- Route-level components
- Connected to layouts
- One page per feature

Example:
- `UseStatePage.tsx`

#### `components/`

- Feature-specific UI
- Not reusable outside this feature

If another feature needs it, move it to `shared/`.

#### `hooks/`

- Custom hooks
- Feature-scoped logic

This is where real learning happens.

#### `config.ts`

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

#### `index.ts`

Public API of the feature.

Exports:
- page
- route config
- metadata

Other parts of the app see features only through this file.

---

## `shared/` – Reusable building blocks

Used across **multiple features**.

No feature knowledge allowed.

### `components/`

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

### `hooks/`

Cross-feature hooks.

Examples:
- `useTheme`
- `useLocalStorage`

If it depends on feature data, it doesn’t belong here.

### `ui/`

Very small primitives.

Examples:
- Badge
- Loader

Think atoms, not molecules.

### `utils/`

Pure functions.

Examples:
- className helpers
- formatters

No React here.

---

## `navigation/` – Sidebar system

Controls app navigation.

### Files

- `menu.ts`
  - Builds menu from feature metadata
  - No JSX

- `Sidebar.tsx`
  - Renders navigation UI

- `SidebarItem.tsx`
  - Single item

Navigation is data-driven. Not hardcoded.

---

## `styles/` – Global styling rules

Very limited responsibility.

### Files

- `globals.css`
  - CSS reset
  - Base styles

- `variables.css`
  - Colors
  - Spacing
  - Font sizes

Components use CSS Modules or scoped styles.

---

## `assets/` – Static files

Contains:
- SVG logo
- Icons

No images inside components directly.

---

## `types/` – Shared TypeScript contracts

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

Break this and structure collapses.

---

## How this helps you learn

- You think before coding
- You see patterns early
- You stop writing tangled components

This is how real teams build apps.

---

## Final question for you

When something breaks, will you know **where to look first**?

If yes, this structure is doing its job.

