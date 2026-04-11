name: release-manager
description: Handles the release lifecycle after features/bugs are completed. Manages PRs from Milestone to Develop, Develop to Main, version tagging, and final GitHub releases. Use this only when a milestone is ready for merge or a full release is required.

# Release Manager

This skill manages the transition between high-level branches and the final release process.

## Workflows

### 1. Milestone to Develop
- **When**: All issues assigned to a milestone are completed (Phase 8 of SOP).
- **Action**: 
    1. Verify all tests pass on the Milestone branch.
    2. Open a PR from `milestone/X` to `develop`.
    3. Close the GitHub milestone once merged.

### 2. Develop to Main (Candidate Release)
- **When**: `develop` is stable and ready for production.
- **Action**:
    1. Open a PR from `develop` to `main`.
    2. Verify CI/CD pipeline (e.g., GitHub Actions, Vercel).

### 3. Tagging & Release
- **When**: `develop` is merged into `main`.
- **Action**:
    1. Create a signed git tag (e.g., `git tag -a v1.0.0 -m "Release v1.0.0"`).
    2. Use `gh release create` to generate the final release notes.
    3. Push the tag to remote.

## Verification
- [ ] All CI/CD checks pass?
- [ ] No open issues in the target milestone?
- [ ] Documentation reflects the new version?
