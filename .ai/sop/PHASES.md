# SOP Phases - ReactLab Methodology

The SOP workflow is a strictly enforced 8-phase development cycle. Every feature or bug fix must progress through these phases sequentially.

## Phase 1: Understanding & Planning
- **Goal**: Understand the request and map it to the project rules.
- **Action**: Read `PROJECT_CONTEXT.md`, `CODING_RULES.md`, and any related documentation.
- **Output**: A clear plan and technical strategy summary.

## Phase 2: Issue Alignment
- **Goal**: Ensure the task is tracked and defined.
- **Action**: Check for an existing GitHub issue using `gh issue list`. If none exists, create one with clear acceptance criteria.
- **Output**: A GitHub issue number (e.g., #123) and confirmed requirements.

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
    1. Open a PR (or prepare for one) and check off acceptance criteria in the GitHub issue.
    2. **Activate `context-updater`**: Automatically update `.ai/PROJECT_CONTEXT.md` and `.ai/CODING_RULES.md` to reflect the changes.
- **Output**: A completed task, verified and reflected in the project documentation.
