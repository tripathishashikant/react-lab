name: scaffold-feature
description: Automates the creation of a new React feature with standard folder structure, pages, examples, and index exports. Use this command to ensure architectural consistency.

# Scaffold Feature Command

Ye command `src/features/` ke andar ek naya feature module create karti hai. Ise hamesha Phase 5 (Implementation) ke starting mein use karna chahiye.

## Workflow

### 1. Folder Creation
- Create directory `src/features/[feature-name]/`.
- Create sub-folders: `pages/`, `examples/`.

### 2. Boilerplate Generation
- **`index.js`**: Export public API (pages, metadata).
- **`pages/[Feature]Page.jsx`**: Base React component connected to `FeatureLayout`.
- **`examples/[Feature]Example.jsx`**: Isolated example component.

### 3. Routing Registry
- Update `src/app/router/routeRegistry.jsx` (ya placeholder) with the new feature metadata.
- Ensure the feature is visible in the Sidebar navigation.

### 4. Style File
- Create `[feature].scss` inside the feature folder.
- Import it in the main page component.

## Execution Rules
- [ ] Folder name in `camelCase`.
- [ ] Component names in `PascalCase`.
- [ ] No circular dependencies.
- [ ] Use `export default` for main page.

## Result
A fully functional, empty feature module ready for TDD-based implementation.
