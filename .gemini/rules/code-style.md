# Code Style Rules - ReactLab

Professional React and SCSS coding standards for the Senior Architect SOP.

## React Conventions
- [ ] Consult First: Discuss implementation plans with the developer before writing code.
- [ ] Path Aliases: ALWAYS use the `@/` alias for all imports within the `src` directory.
- [ ] Use Functional Components with `export default` for main page exports.
- [ ] Prefix custom hooks with `use` (e.g., `useFeatureData`).
- [ ] Prefer local state (`useState`) unless data is shared across multiple features.
- [ ] Provide mandatory cleanup functions for all `useEffect` hooks.

## SCSS Standards
- [ ] Utilize variables exclusively from `src/styles/abstract/`.
- [ ] Use mixins for reusable visual patterns and layout logic.
- [ ] Avoid inline styles and utility-first classes (stay with pure SCSS).
- [ ] Apply the `c-` class prefix for all shared components.

## Documentation (JSDoc)
- [ ] Document complex logic, hook parameters, and component props.
- [ ] Focus comments on "Why" (intent) rather than "What" (action).
