# Senior Architect Review Criteria

## 1. Architecture & Organization
- **Feature-Based Structure**: Does code live in `src/features/[feature-name]/`?
- **Public API**: Does each feature export its public API via `index.js`?
- **Separation of Concerns**: Is business logic separated from UI? Are layouts defined as skeletons?
- **Shared Components**: Are shared UI components in `src/shared/components/` and "dumb"?
- **Dependencies**: Are there circular dependencies or direct feature-to-feature imports? (Use `shared/` instead).
- **Metadata-Driven Docs**: If UI components are added, is the registry metadata updated in `src/docs/system/registry/`?

## 2. React Standards
- **Imports**: Are path aliases (`@/`) used for all `src` imports?
- **Components**: Are functional components used with `export default`?
- **Hooks**: Are custom hooks prefixed with `use`? Do `useEffect` hooks have cleanup functions?
- **State Management**: Is `useState` used locally? Is state management appropriate for the scope?
- **Documentation**: Is complex logic documented with JSDoc focusing on **"Why" (intent)** rather than "What"?

## 3. SCSS & Styling
- **Variables**: Are variables from `src/styles/abstract/` used exclusively?
- **Prefixes**: Do shared components use the `c-` class prefix (e.g., `.c-button`)?
- **No Inline Styles**: Are styles kept in SCSS files? No utility-first classes or inline CSS.
- **Modular Styles**: Are styles organized by component/page?

## 4. Testing & Quality (Quality Gates)
- **TDD Compliance**: Were failing tests written first?
- **Mirroring**: Does the `tests/` structure mirror `src/`?
- **Unit Testing**: Are there unit tests for all new shared components?
- **Integration Testing**: Are there integration tests for the feature page?
- **Assertions**: Are behavioral outcomes, edge cases, and accessibility (ARIA roles, keyboard focus) verified?

## 5. Scalability & Flexibility
- **Extensibility**: Can this logic be easily extended or reused without major refactors?
- **Performance**: Are there obvious performance bottlenecks (unnecessary re-renders, heavy computations)?
- **Scalability**: Will this pattern hold up as the feature or application grows?

## 6. Project SOP Compliance (from PHASES.md & CHECKLISTS.md)
- **Phase Alignment**: Does the implementation follow the 8-phase SOP lifecycle?
- **A11y Audit**: Has an accessibility audit been considered/performed?
- **Feature Completion**: Are all items in the "Feature Completion Checklist" addressed?
