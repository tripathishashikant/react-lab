# Architecture Rules - ReactLab

Core feature-based architectural and organizational rules for the Senior Architect SOP.

## Folder Structure
- [ ] Business logic and components must live in `src/features/[feature-name]/`.
- [ ] Internal documentation engine must live in `src/docs/system/`.
- [ ] Root `tests/` directory must mirror `src/` for unit testing infrastructure.
- [ ] Each feature must export its public API via `index.js`.
- [ ] No circular dependencies or direct feature-to-feature imports (utilize `shared/`).

## Shared Components
- [ ] Shared UI components must reside in `src/shared/components/[component-name]/`.
- [ ] Components should be "dumb" (pure UI) with no feature-specific knowledge.
- [ ] Use the `c-` class prefix for SCSS styles (e.g., `.c-button`).

## Documentation System
- [ ] Utilize a **Metadata-Driven Architecture**: Documentation is generated from structured registry files.
- [ ] **Registry**: Component metadata (props, usage, examples) must live in `src/docs/system/registry/[component-name]/index.jsx`.
- [ ] **Engine**: The documentation engine (DocPage, DocPreview, DocPropsTable) lives in `src/docs/system/components/`.
- [ ] **Separation**: Keep documentation UI logic separate from the component metadata.

## Branching & Git Flow
- [ ] `Feature` branches target the `Milestone` branch.
- [ ] `Milestone` branches target the `develop` branch.
- [ ] `develop` branch targets the `main` branch for production releases.
