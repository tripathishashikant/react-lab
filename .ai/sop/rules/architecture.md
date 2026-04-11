# Architecture Rules - ReactLab

Feature-based structure aur organizational rules for the Senior Architect SOP.

## Folder Structure
- [ ] Logic lives in `src/features/[feature-name]/`.
- [ ] Export via `index.js` (public API).
- [ ] No feature-to-feature imports (use `shared/`).

## Shared Components
- [ ] Must live in `src/shared/components/[component-name]/`.
- [ ] Must be "dumb" UI (props in, JSX out).
- [ ] Must use the `c-` class prefix in SCSS.

## Branching & Git Flow
- [ ] `Feature` -> `Milestone` branch.
- [ ] `Milestone` -> `develop` branch.
- [ ] `develop` -> `main` branch (Release).
