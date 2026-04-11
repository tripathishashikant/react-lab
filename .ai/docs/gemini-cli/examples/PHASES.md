# [Project Name] - SOP Phases Blueprint

The SOP workflow is a strictly enforced 8-phase development cycle for **Feature Addition**, **Bug Fixing**, and **Refactoring**.

## Phase 1: Understanding & Planning
- **Goal**: Understand the requirements and map them to project rules.
- **Action**: Read `PROJECT_CONTEXT.md` and `CODING_RULES.md`.
- **Output**: A clear plan and technical strategy summary.

## Phase 2: Issue & Milestone Alignment
- **Goal**: Ensure the task is tracked and assigned to a milestone.
- **Action**: 
    1. Check for/Create a GitHub issue via `gh issue create`. 
    2. Assign the issue to an active **Milestone**.
    3. Ensure a **Milestone Branch** exists.
- **Output**: A confirmed GitHub issue and Milestone track.

## Phase 3: Codebase Exploration
- **Goal**: Identify existing patterns and dependencies.
- **Action**: Use `grep_search` and `glob` to find relevant files.
- **Output**: A list of files to be modified or created.

## Phase 4: Test-Driven Development (TDD)
- **Goal**: Define expected outcomes through failing tests.
- **Action**: Write unit/integration tests using [Test Framework] before implementation.
- **Output**: Failing tests representing the required change.

## Phase 5: Minimal Implementation
- **Goal**: Pass tests with clean, minimal code.
- **Action**: Implement logic following project conventions.
- **Output**: Code that passes all newly created tests.

## Phase 6: Regression Testing
- **Goal**: Ensure project stability.
- **Action**: Run the full test suite and linting commands.
- **Output**: A green build status.

## Phase 7: Adversarial Review
- **Goal**: Self-audit for edge cases and security.
- **Action**: Scan for race conditions, null pointers, and performance bottlenecks.
- **Output**: Refined, resilient code.

## Phase 8: Manual Review & Controlled PR
- **Goal**: Obtain user approval and finalize.
- **Action**: 
    1. **Manual Review**: Present changes to the user for inspection.
    2. **Wait for Approval**: DO NOT stage/commit until confirmed.
    3. **Targeted PR**: Open a PR into the Milestone branch.
- **Output**: A completed task verified by the user.
