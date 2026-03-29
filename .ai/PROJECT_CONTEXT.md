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

Everything lives here. `main.jsx` is the entry point.

Rule:

- No logic outside `src`
- No random files

If it doesn’t belong somewhere specific, it doesn’t belong at all.

---

### `app/` – Application brain

Controls **startup**, **routing**, and **global providers**.

#### Files

- `router.jsx`
  - Central routing table
  - Connects layouts with features

- `providers.jsx`
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

#### `mainLayout/`

Used for most screens.

Contains:

- Top header
- Left sidebar
- Scrollable content area

No state.
No business logic.

#### `featureLayout/`

Used for feature pages.

#### `exampleLayout/`

Used for isolated examples.

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

``` text
useState/
├── pages/
├── examples/
└── index.js
```

##### `pages/`

- Route-level components
- Connected to layouts
- One page per feature

Example:

- `UseStatePage.jsx`

##### `examples/`

- Contains examples for the feature. Each example is a component.

##### `index.js`

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
- Code

Rules:

- Props in
- JSX out
- No side effects

---

### `navigation/` – Sidebar system

Controls app navigation.

#### Navigation Files

- `menu.js`
  - Builds menu from feature metadata
  - No JSX

- `Sidebar.jsx`
  - Renders navigation UI

Navigation is data-driven. Not hardcoded.

---

### `styles/` – Global styling rules

This project uses **SCSS** for styling.

#### Styles Files

- `style.scss`
  - Main entry point for styles

- `abstract/`
  - `_colors.scss`
  - `_functions.scss`
  - `_index.scss`
  - `_mixins.scss`
  - `_variables.scss`

- `base/`
  - `_globals.scss`
  - `_index.scss`
  - `_reset.scss`

- `themes/`
  - `_index.scss`
  - `_light.scss`

- `utilities/`
  - `_index.scss`
  - `_utilities.scss`

---

### `assets/` – Static files

Contains:

- SVG logo
- Icons

No images inside components directly.

---

## Import rules (important)

Allowed:

- feature → shared
- app → layouts

Forbidden:

- feature → feature
- shared → feature
- layout → feature logic

---

## CSS / Style Guide Rules (SCSS)

- Use **SCSS** for styling.
- Feature-specific styles should live inside the feature folder.
- Global styles, Resets, and Theme variables live in `src/styles/`.
- No inline CSS.

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

## Branching Strategy

- **`develop` Branch:** Main development branch. All milestone branches are created from `develop`.
- **Milestone Branches:** Created from `develop` for each milestone (e.g., `m1`, `m2`).
- **Feature Branches:** Created from the relevant milestone branch.

---

## Commit rules

Format:
`<type>`(#issue): short description

Allowed types:

- feat → new feature
- fix → bug fix
- refactor → internal change
- style → formatting/SCSS
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
- Follow folder, import, and SCSS rules strictly
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
- All code must pass linting rules
- AI output = junior dev; you review every line

---

## Final sanity check

Ask yourself:

1. Will AI know where to put this file?
2. Will GitHub workflow track this properly?
3. Will the SCSS naming convention enforce structure without style bleed?
4. Will commits be consistent?

If yes → you have a disciplined, scalable learning project.
