# ReactLab - Project Context & AI Guide

This document explains project architecture, AI rules, GitHub workflow, commit rules, and coding standards.
AI tools and developers must follow this strictly.

---

## Core philosophy

- Learn React like building a real product
- Separate concerns early
- Let structure teach discipline
- AI-generated code must never break structure
- Every commit, issue, and feature must be tracked

---

## Folder structure overview

### `src/` (root)

Everything lives here. `main.jsx` is the entry point.

Rules:

- No logic outside `src`
- No random files
- If it does not belong somewhere specific, it does not belong at all

---

### `app/` - Application composition

Controls app-level composition and router setup.

#### Inside `app/`

- `router/`
  - `index.jsx`
    - Central router composition
    - Connects layouts with route groups
  - `routeRegistry.jsx`
    - Registers learning features, docs pages, and system routes
    - Builds route objects from metadata

Rules:

- Keep route composition here
- Do not place learning feature implementation inside `app/`

---

### `layouts/` - Page skeletons

Layouts define structure, not content.

#### `mainLayout/`

Used for most screens.

Contains:

- Sidebar
- Main content area

No state.
No business logic.

#### `featureLayout/`

Used for learning feature pages.

#### `docsLayout/`

Used for docs pages.

#### `exampleLayout/`

Used for isolated feature examples.

Layouts decide where things go, never what they do.

---

### `features/` - Learning modules

Each folder is one React concept.

Examples:

- `use-state`
- future hooks or React API topics

Nothing crosses feature boundaries.

#### Inside a feature

```text
use-state/
  pages/
  examples/
  index.js
```

##### `pages/`

- Route-level components
- Connected to layouts
- One page per feature

##### `examples/`

- Contains examples for the feature
- Each example is a component with metadata such as difficulty, code, and notes

##### `index.js`

Public API of the feature.

Exports:

- page component
- route metadata
- examples metadata

Other parts of the app should see features only through this file.

---

### `docs/` - Documentation surfaces

Holds documentation pages that are not learning features.

Current example:

- `styleguide/`

Use this area for:

- docs overview pages
- future per-component docs pages
- examples and variants for shared components

---

### `system/` - App-level fallback pages

Holds application-level pages that are not learning features and not docs.

Current example:

- `notFound/`

Use this area for pages like:

- not found
- maintenance
- unauthorized
- other app/system states

---

### `shared/` - Reusable building blocks

Used across multiple features.

No feature knowledge allowed.

#### `components/`

Dumb UI only.

Examples:

- Button
- Card
- Tabs
- Code
- Alert
- Loader

Rules:

- Props in
- JSX out
- No feature-specific behavior

---

### `navigation/` - Sidebar system

Controls app navigation.

#### Navigation files

- `menu.js`
  - Builds menu from router registry metadata
  - No JSX

- `Sidebar.jsx`
  - Renders navigation UI

Navigation is data-driven, not hardcoded.

---

### `styles/` - Global styling rules

This project uses SCSS for styling.

#### Style areas

- `style.scss`
  - Main entry point for styles
- `abstract/`
  - tokens, functions, mixins, variables
- `base/`
  - globals and reset
- `themes/`
  - theme variables
- `utilities/`
  - utility classes

---

### `assets/` - Static files

Contains static assets such as the logo.

No large feature logic belongs here.

---

## Import rules

Allowed:

- feature -> shared
- feature -> its own local files
- docs -> shared
- system -> shared
- app/router -> layouts
- navigation -> app/router metadata

Forbidden:

- feature -> feature
- shared -> feature
- feature -> docs
- feature -> system
- layout -> feature logic

---

## CSS / Style rules (SCSS)

- Use SCSS for styling.
- Feature-specific styles should live inside the feature folder.
- Docs-specific styles should live inside the docs folder.
- Global styles, resets, and theme variables live in `src/styles/`.
- No inline CSS unless there is a strong reason.
- Use `c-` classes for shared components.
- Use shared mixins for reusable visual patterns.
- Use `u-button-like` for router links that should look like buttons instead of applying `c-button` directly to links.

---

## GitHub workflow rules

- Every task = GitHub issue
- Issue must have priority label: `p0`, `p1`, or `p2`
- Only one `p0` at a time
- Issues must belong to a milestone
- Use GitHub Projects for tracking:
  - Backlog -> Ready -> In Progress -> Review -> Done

---

## Branching strategy

- `develop` is the main development branch
- Milestone branches are created from `develop`
- Feature branches are created from the relevant milestone branch

---

## Commit rules

Format:
`<type>`(#issue): short description

Allowed types:

- feat
- fix
- refactor
- style
- chore
- docs
- test

Rules:

- Reference the issue number
- Lowercase, present tense, <=72 chars
- One logical change per commit
- Squash merge only
- Breaking changes prefixed with `BREAKING:`

---

## AI / Coding rules

- Read this file before generating code
- Follow folder, import, and SCSS rules strictly
- Ask before adding new libraries
- Do not break GitHub workflow rules
- Respect commit and issue rules
- One responsibility per file/component
- Code must be readable, maintainable, and scalable
- Put routing logic in `app/router/`
- Put docs pages in `docs/`
- Put app fallback pages in `system/`
- Never place docs or system pages inside `features/`

---

## Learning and discipline

- Think before coding
- Close one issue at a time
- No shortcuts in folder structure
- All code must pass linting rules
- AI output is draft quality; review every line

---

## Final sanity check

Ask yourself:

1. Will AI know where to put this file?
2. Will GitHub workflow track this properly?
3. Will the SCSS naming convention enforce structure without style bleed?
4. Will commits be consistent?

If yes, the project structure is still disciplined and scalable.
