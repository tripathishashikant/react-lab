# Code Style Rules - ReactLab

React aur SCSS coding standards for the Senior Architect SOP.

## React Conventions
- [ ] Use Functional Components with `export default`.
- [ ] Name hooks with `use` prefix (e.g., `useFeatureData`).
- [ ] Prefer local state unless data is shared across multiple features.
- [ ] Use `useEffect` sparingly and always provide cleanup functions.

## SCSS Standards
- [ ] Use variables from `src/styles/abstract/`.
- [ ] Use mixins for reusable visual patterns.
- [ ] Avoid inline styles and Tailwind utility classes (stay pure SCSS).
- [ ] Use `c-` class prefix for shared components.

## Documentation (JSDoc)
- [ ] Document complex logic and hook parameters.
- [ ] Add comments for "Why" (intent), not "What" (action).
