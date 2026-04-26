# SOP Checklists - ReactLab

Use these checklists at the end of each phase to verify completion.

## Phase 1: Understanding
- [ ] Read `GEMINI.md`?
- [ ] Identified the core problem?
- [ ] Discussed implementation plan with developer?

## Phase 2: GitHub & Milestone Alignment
- [ ] Searched `gh issue list` for duplicates?
- [ ] Created/Found an issue with a `p0`/`p1`/`p2` label?
- [ ] Assigned the issue to the active Milestone?
- [ ] Confirmed target Milestone Branch exists?

## Phase 3: Exploration
- [ ] Grepped for relevant components?
- [ ] Identified SCSS variables to use?
- [ ] Verified component APIs?

## Phase 4: TDD
- [ ] Created `X.test.jsx` in mirrored `tests/` directory using Jest?
- [ ] Tests fail with clear error messages?
- [ ] Covered core logic and edge cases?

## Phase 5: Implementation
- [ ] Followed feature-based folder structure?
- [ ] Used SCSS modules/mixins correctly?
- [ ] Used `@/` alias for all imports?
- [ ] All tests pass?

## Phase 6: Quality Gate
- [ ] `npm run lint` passes?
- [ ] All tests in the project pass (`npm run test`)?
- [ ] `npm run build` passes (Sass compiles correctly)?

## Phase 7: Self-Review
- [ ] Checked for race conditions in `useEffect`?
- [ ] Verified accessibility (ARIA, focus, semantic HTML)?
- [ ] Removed all `console.log` and debugging?
- [ ] Removed unnecessary comments?

## Phase 8: Manual Review & Controlled Closure
- [ ] **Presented changes for manual inspection?**
- [ ] **User explicitly approved the implementation?**
- [ ] Linked the GitHub issue in the commit message?
- [ ] Targeted PR to the Milestone Branch?
- [ ] Activated `context-updater`?
- [ ] `GEMINI.md` reflects the new state?
