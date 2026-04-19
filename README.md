# ReactLab

ReactLab is a structured learning environment for mastering React concepts in a way that mimics real-world application development. It's built with Vite, React, and SCSS, and it separates learning features, docs pages, router configuration, and app-level system pages to keep the architecture disciplined and scalable.

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

1. **Build Check:** It runs the `npm run build` command to verify that the project builds successfully without any errors.

This helps catch integration issues early and ensures that the `main` branch is always in a deployable state.

## Branching Strategy

This project follows a structured branching model to keep the development process organized and predictable.

- **`develop` Branch:** This is the main development branch where all completed features and milestones are merged. It represents the most up-to-date version of the project under development.
- **Milestone Branches:** For each major version or milestone (e.g., `m1`, `m2`), a milestone branch is created from the `develop` branch. These branches are used to group related features for a specific release.
- **Feature Branches:** All new features are developed in their own branches. Feature branches are created from the corresponding milestone branch.

This structure ensures that the `develop` branch remains stable while new features are being developed in isolation.

## Project Structure

The project follows a strict, feature-based architecture. For a detailed explanation of the folder structure, import rules, and coding standards, please refer to the [GEMINI.md](GEMINI.md) file.

## Adding a New Feature

To add a new learning feature:

1. **Create a new feature folder** inside `src/features/`. The folder name should be in `camelCase` (e.g., `newFeature`).
2. **Create sub-folders** `pages` and `examples` inside your new feature folder.
   - `pages`: contains the main component for the feature.
   - `examples`: contains isolated examples related to the feature.
3. **Create an `index.js` file** in the root of your new feature folder. This file defines the feature metadata and exports it. The metadata includes the feature's `id`, `path`, `component`, `title`, `description`, `difficulty`, `category`, and `examples`.
4. **Router Configuration**: Router composition lives in `src/app/router/index.jsx`, and route metadata plus route builders live in `src/app/router/routeRegistry.jsx`. Learning features are registered there, so you don't wire them directly in page components.

### Example Feature Structure

```text
src/features/newFeature/
  index.js
  pages/
    NewFeaturePage.jsx
  examples/
    Example1.jsx
```

## Docs and System Pages

- Documentation surfaces live in `src/docs/`. The current docs entry point is the styleguide at `/docs`.
- App-level fallback pages live in `src/system/`. The current example is the not-found page.
- Learning features only live in `src/features/`.

## Styling and SCSS

The project uses SCSS for styling, following a combination of SMACSS and BEM principles.

### SCSS Architecture

- **Global Styles:** Global styles, variables, mixins, and functions are located in `src/styles`. This directory is organized into `abstract`, `base`, `themes`, and `utilities`.
- **Component Styles:** Each component has its own `.scss` file, located in the same directory as the component file.
- **SCSS Modules:** We use SCSS modules (`@use`) to import shared styles and prevent naming conflicts.

### Naming Conventions

- **BEM:** We use the BEM (Block__Element--Modifier) naming convention for our classes.
- **SMACSS Prefixes:** We use `c-` for components, `l-` for layouts, and `u-` for utilities.

### Adding New Styles

1. **Create a new `.scss` file** in the same directory as your component.
2. **Use BEM and SMACSS naming conventions** for your classes.
3. **Import global styles** using `@use '@/styles/abstract';` to access shared variables and mixins.
4. **Import the `.scss` file** into your component file.

### Shared Styling Pattern

- Use `c-` classes for shared components.
- Reuse SCSS mixins for shared visual behavior.
- For router links that should look like buttons, use the shared `u-button-like` utility instead of reusing `c-button` directly on a `Link`.

## AI Usage

AI tools are encouraged for this project, but they **must** follow the rules and guidelines outlined in the master project document:

- [**GEMINI.md**](GEMINI.md): The master guide to the project's architecture, rules, standards, and SOP.

**Any deviation from these rules is considered a bug.**

## Using the Gemini CLI

This project is optimized for the [Gemini CLI](https://github.com/google/gemini-cli). The `.gemini` directory contains project-specific skills and commands that automate the development lifecycle according to our Senior Architect SOP.

### 1. Project-Specific Skills
Skills are automated agents that handle repetitive tasks. You can activate them using the `activate_skill` tool or by asking the agent to perform the task.

- **`context-updater`**: Keeps `GEMINI.md` in sync with your changes. Use this in Phase 8 of the SOP.
  - *Example*: "Use the context-updater skill to update GEMINI.md with the new component I added."
- **`vercel-deployer`**: Handles preview and production deployments.
  - *Example*: "Deploy my current changes to Vercel for a preview."
- **`release-manager`**: Automates PR creation and tagging.

### 2. Custom Commands
Custom slash commands provide shortcuts for common architectural tasks.

- **`/scaffold-feature`**: Automatically creates the directory structure for a new learning feature.
  - *Usage*: `/scaffold-feature [featureName]`

### 3. Automated SOP Workflow
When you give the Gemini CLI a directive, it will automatically follow the **8-Phase SOP** defined in `.gemini/PHASES.md`:
1. **Research** the task.
2. **Strategy** development.
3. **Execution** (TDD first).
4. **Validation** (tests and linting).
5. **Adversarial Review**.
6. **Manual Review** (presents changes for your approval).

*Note: The agent will never commit or push changes without your explicit permission.*

