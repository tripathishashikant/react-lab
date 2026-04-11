# Wizard Patterns - ReactLab

Common patterns and architectural mandates for the ReactLab project.

## 1. Feature-Based Architecture
- [ ] Logic lives in `src/features/[feature-name]/`.
- [ ] Export via `index.js` (public API).
- [ ] No feature-to-feature imports (use `shared/`).

## 2. Shared Components
- [ ] Must live in `src/shared/components/[component-name]/`.
- [ ] Must be "dumb" UI (props in, JSX out).
- [ ] Must use the `c-` class prefix in SCSS (e.g., `.c-button`).

## 3. Styling (SCSS)
- [ ] Use variables from `src/styles/abstract/`.
- [ ] Use mixins for reusable visual patterns.
- [ ] Avoid inline styles and Tailwind utility classes (stay pure SCSS).

## 4. State & Hooks
- [ ] Prefer local state (`useState`) unless data is shared across multiple features.
- [ ] Use `useEffect` sparingly and always provide cleanup functions.
- [ ] Name custom hooks with the `use` prefix (e.g., `useFeatureData`).

## 5. Testing Patterns
- [ ] Unit tests for shared components.
- [ ] Integration tests for feature pages.
- [ ] Mock external dependencies (e.g., API calls, heavy libraries).

## 6. Commit Format
- [ ] `<type>(#issue): short description`
- [ ] Types: `feat`, `fix`, `refactor`, `style`, `chore`, `docs`, `test`.
- [ ] Reference the issue in every commit.
