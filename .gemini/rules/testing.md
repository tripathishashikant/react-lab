# Testing Rules - ReactLab

Professional testing standards for the Senior Architect SOP.

## TDD Mandates
- [ ] Write failing unit tests (`vitest`) before starting any implementation.
- [ ] No code change is "Done" without corresponding passing tests.

## Testing Standards
- [ ] Unit tests for all shared components.
- [ ] Integration tests for each feature page.
- [ ] Mock external dependencies (e.g., API calls, heavy libraries).
- [ ] Utilize `jsdom` for React Testing Library.

## Assertion Quality
- [ ] Assert specific behavioral outcomes, not just generic success.
- [ ] Cover core business logic and edge cases (e.g., null states, empty datasets).
- [ ] Verify accessibility standards (ARIA roles, keyboard focus) in tests.
