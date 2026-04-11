# Testing Rules - ReactLab

Testing standards for the Senior Architect SOP.

## TDD Mandates
- [ ] Write failing unit tests (`vitest`) before implementation.
- [ ] No code change is "Done" without passing tests.

## Testing Standards
- [ ] Unit tests for shared components.
- [ ] Integration tests for feature pages.
- [ ] Mock external dependencies (e.g., API calls, heavy libraries).
- [ ] Use `jsdom` for React Testing Library.

## Assertion Quality
- [ ] Assert specific values, not just `assertTrue(worked)`.
- [ ] Cover core logic and edge cases (e.g., null states, empty data).
- [ ] Verify accessibility (ARIA roles, tab focus) in tests.
