# SOP Phases - ReactLab Methodology

The SOP workflow is a strictly enforced 8-phase development cycle. Every feature or bug fix must progress through these phases sequentially.

## Phase 1: Understanding & Planning
- **Goal**: Understand the request and map it to the project rules.
- **Action**: Read `PROJECT_CONTEXT.md`, `CODING_RULES.md`, and any related documentation.
- **Output**: A clear plan and technical strategy summary.

## Phase 2: Issue & Milestone Alignment
- **Goal**: Ensure the task is tracked, labeled, and assigned to a milestone.
- **Action**: 
    1. Check for an existing GitHub issue using `gh issue list`. 
    2. Create/Found an issue with a priority label (`p0`-`p2`) and assign it to the active **Milestone**.
    3. Ensure a **Milestone Branch** (e.g., `milestone/X-name`) exists; create it from `develop` if it's the first task of that milestone.
- **Output**: A GitHub issue number and a confirmed target Milestone branch.

## Phase 3: Codebase Exploration
- **Goal**: Validate assumptions and identify existing patterns.
- **Action**: Use `grep_search` and `glob` to find relevant files, components, and SCSS variables. Never assume an API or method exists.
- **Output**: A list of files to be modified or created.

## Phase 4: Test-Driven Development (TDD)
- **Goal**: Define "done" through failing tests.
- **Action**: Write unit/integration tests using Vitest and React Testing Library that assert the expected behavior.
- **Output**: Failing tests that accurately represent the new feature or bug fix.

## Phase 5: Minimal Implementation
- **Goal**: Make the tests pass with minimal, high-quality code.
- **Action**: Implement the logic, following feature-based structure and SCSS conventions.
- **Output**: Code that passes all newly created tests.

## Phase 6: Regression Testing
- **Goal**: Ensure no collateral damage.
- **Action**: Run the full test suite (`npm run test`) and linting (`npm run lint`).
- **Output**: A green build status across the entire project.

## Phase 7: Adversarial Review
- **Goal**: Attack your own code for flaws.
- **Action**: Look for race conditions, null pointers, accessibility issues, and performance bottlenecks.
- **Output**: Refined code that is more resilient.

## Phase 8: Pull Request & Verification
- **Goal**: Finalize, document, and update the "Source of Truth".
- **Action**: 
    1. **Targeted PR**: Open a PR from the feature branch **into the Milestone branch** (not `develop`).
    2. **Milestone Completion**: Once all issues in a milestone are Done, open a PR from the Milestone branch into `develop`.
    3. **Release**: Open a PR from `develop` into `main` for release, create a git tag, and release.
    4. **Activate `context-updater`**: Automatically update documentation.
- **Output**: A completed task, verified and merged into the Milestone track.
