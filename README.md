# ReactLab

ReactLab is a structured learning environment for mastering React concepts in a way that mimics real-world application development. It's built with Vite, React, and SCSS, and it enforces a strict, feature-based architecture to promote disciplined coding practices.

## Core Philosophy

- **Learn by Doing:** Build features that correspond to core React concepts.
- **Structure and Discipline:** The project's architecture is designed to teach separation of concerns and maintainable code.
- **AI-Assisted Development:** The project is set up to work with AI assistants, with clear guidelines and rules to ensure generated code adheres to the project's standards.

## Getting Started

1. **Install dependencies:**

    ```bash
    npm install
    ```

2. **Start the development server:**

    ```bash
    npm run dev
    ```

3. **Open your browser** to `http://localhost:5173` (or the address shown in your terminal).

## Deployment

The site is deployed on Vercel and can be accessed at the following URL:

[https://react-lab-zeta.vercel.app/](https://react-lab-zeta.vercel.app/)

## Continuous Integration

This project uses a Continuous Integration (CI) pipeline with GitHub Actions to ensure code quality and stability. The CI pipeline is automatically triggered on every push and pull request to the `main` branch.

The pipeline performs the following steps:

1.  **Build Check:** It runs the `npm run build` command to verify that the project builds successfully without any errors.

This helps catch integration issues early and ensures that the `main` branch is always in a deployable state.

## Branching Strategy

This project follows a structured branching model to keep the development process organized and predictable.

-   **`develop` Branch:** This is the main development branch where all completed features and milestones are merged. It represents the most up-to-date version of the project under development.

-   **Milestone Branches:** For each major version or milestone (e.g., `m1`, `m2`), a milestone branch is created from the `develop` branch. These branches are used to group related features for a specific release.

-   **Feature Branches:** All new features are developed in their own branches. Feature branches are created from the corresponding milestone branch.

This structure ensures that the `develop` branch remains stable while new features are being developed in isolation.

## Project Structure

The project follows a strict, feature-based architecture. For a detailed explanation of the folder structure, import rules, and coding standards, please refer to the [PROJECT_CONTEXT.md](.ai/PROJECT_CONTEXT.md) file.

## Adding a New Feature

To add a new feature, you must follow the established structure:

1. **Create a new feature folder** inside `src/features/`. The folder name should be in `camelCase` (e.g., `newFeature`).
2. **Create sub-folders** `pages` and `examples` inside your new feature folder.
    - `pages`: This will contain the main component for the feature, which will be rendered by the router.
    - `examples`: This will hold additional, isolated examples related to the feature.
3. **Create an `index.js` file** in the root of your new feature folder. This file is crucial as it defines the feature's metadata and exports it. The metadata includes the feature's `id`, `path`, `component`, `title`, `description`, `difficulty`, `category`, and `examples`.
4. **Router Configuration**: The main router is located at `src/app/router.jsx`. The router automatically uses the metadata from the `index.js` file of each feature, so you don't need to manually add the route to the router file.

### Example Feature Structure

``` text
src/features/newFeature/
├── index.js         // Exports feature metadata (id, path, component, title, etc.)
├── pages/
│   └── NewFeaturePage.jsx // Main component for the feature
└── examples/
    └── Example1.jsx     // An example component
```

## Styling and SCSS

The project uses SCSS for styling, following a combination of SMACSS and BEM principles.

### SCSS Architecture

- **Global Styles:** Global styles, variables, mixins, and functions are located in `src/styles`. This directory is organized into `abstracts`, `base`, `themes`, and `utilities`.
- **Component Styles:** Each component has its own `.scss` file, located in the same directory as the component file (e.g., `src/shared/components/button/Button.jsx` and `src/shared/components/button/button.scss`).
- **SCSS Modules:** We use SCSS modules (`@use`) to import shared styles and prevent naming conflicts.

### Naming Conventions

- **BEM:** We use the BEM (Block__Element--Modifier) naming convention for our classes.
- **SMACSS Prefixes:** We use a `c-` prefix for components (e.g., `c-button`) and `l-` for layouts to quickly identify the role of a class.

### Adding New Styles

When adding new styles for a component:

1. **Create a new `.scss` file** in the same directory as your component.
2. **Use BEM and SMACSS naming conventions** for your classes.
3. **Import global styles** using `@use '@/styles/abstract';` to access shared variables and mixins.
4. **Import the `.scss` file** into your component file (e.g., `import '@/styles/.../button.scss';`).

## AI Usage

AI tools are encouraged for this project, but they **must** follow the rules and guidelines outlined in the following documents:

- [**.ai/PROJECT_CONTEXT.md**](.ai/PROJECT_CONTEXT.md): The master guide to the project's architecture, rules, and standards.
- [**.ai/CODING_RULES.md**](.ai/CODING_RULES.md): Specific rules for generating code.
- [**.ai/PROMPT_GUIDE.md**](.ai/PROMPT_GUIDE.md): A guide to writing effective prompts for AI assistants.

**Any deviation from these rules is considered a bug.**
