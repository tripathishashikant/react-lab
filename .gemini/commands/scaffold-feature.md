---
name: scaffold-feature
description: Automates the creation of a new React feature with standard folder structure, pages, examples, and index exports. Use this command to ensure architectural consistency.
---

# Scaffold Feature Command

This command creates a new feature module inside `src/features/`. It should be invoked during Phase 5 (Implementation) to maintain architectural consistency.

## Workflow

### 1. Folder Creation
- Create directory `src/features/[feature-name]/`.
- Create sub-folders: `pages/`, `examples/`.

### 2. Boilerplate Generation
- **`index.js`**: Export public API (pages, metadata).
- **`pages/[Feature]Page.jsx`**: Base React component connected to `FeatureLayout`.
- **`examples/[Feature]Example.jsx`**: Isolated example component.

### 3. Routing Registry
- Update `src/app/router/routeRegistry.jsx` with the new feature metadata.
- Ensure the feature is correctly registered for Sidebar navigation.

### 4. Style File
- Create `[feature].scss` within the feature folder.
- Import the SCSS file in the main page component.

## Execution Rules
- [ ] Folder names must be in `camelCase`.
- [ ] Component names must be in `PascalCase`.
- [ ] Ensure no circular dependencies are introduced.
- [ ] Use `export default` for main page exports.

## Result
A fully functional, scaffolded feature module ready for TDD-based implementation.
