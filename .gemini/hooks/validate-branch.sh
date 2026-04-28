#!/bin/bash

# ReactLab Branch Name Validator
# Pattern: (feat|fix|refactor|chore|docs|test)/[0-9]+-.*

BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)

# Regular Expression for the format: type/issue-description
REGEXP="^(feat|fix|refactor|chore|docs|test)/[0-9]+-.+$"

# Exempt branches
if [[ "$BRANCH_NAME" == "main" || "$BRANCH_NAME" == "develop" || "$BRANCH_NAME" == "milestone-"* ]]; then
  echo "Branch '$BRANCH_NAME' is exempt from validation."
  exit 0
fi

if [[ ! $BRANCH_NAME =~ $REGEXP ]]; then
  echo "Error: Invalid branch name '$BRANCH_NAME'!"
  echo "Expected format: <type>/<issue-number>-<description>"
  echo "Allowed types: feat, fix, refactor, chore, docs, test"
  echo "Example: feat/52-performance-optimization"
  exit 1
fi

echo "Branch name '$BRANCH_NAME' is valid."
exit 0
