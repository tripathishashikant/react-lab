# SOP Phases - ReactLab Methodology

The SOP workflow is a strictly enforced 8-phase development cycle for **Feature Addition**, **Bug Fixing**, and **Refactoring**.

## Phase 1: Understanding & Planning
- **Goal**: Understand the request and map it to the project rules.
- **Action**: Read `PROJECT_CONTEXT.md`, `CODING_RULES.md`, and any related documentation.
- **Output**: A clear plan and technical strategy summary.

## Phase 2: Issue & Milestone Alignment
- **Goal**: Ensure the task is tracked, labeled, and assigned to a milestone.
- **Action**: 
    1. Check for an existing GitHub issue using `gh issue list`. 
    2. Create/Found an issue with a priority label (`p0`-`p2`) and assign it to the active **Milestone**.
    3. Ensure a **Milestone Branch** (e.g., `milestone/X-name`) exists.
- **Output**: A GitHub issue number and a confirmed target Milestone branch.

## Phase 3: Codebase Exploration
- **Goal**: Validate assumptions and identify existing patterns.
- **Action**: Use `grep_search` and `glob` to find relevant files and components.
- **Output**: A list of files to be modified or created.

## Phase 4: Test-Driven Development (TDD)
- **Goal**: Define "done" through failing tests.
- **Action**: Write unit/integration tests using Vitest that assert the expected behavior.
- **Output**: Failing tests that accurately represent the new feature, fix, or refactor.

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
- **Action**: Look for race conditions, null pointers, and performance bottlenecks.
- **Output**: Refined code that is more resilient.

## Phase 8: Manual Review & Controlled Pull Request
- **Goal**: Finalize documentation and wait for user approval.
- **Action**: 
    1. **Manual Review**: Present all changes to the user for manual inspection.
    2. **Wait for Approval**: DO NOT stage or commit changes until the user explicitly confirms.
    3. **Targeted PR**: Upon confirmation, open a PR from the feature branch **into the Milestone branch**.
    4. **Activate `context-updater`**: Automatically update documentation.
- **Output**: A completed task, verified by the user and merged into the Milestone track.
