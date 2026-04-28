#!/bin/bash

# ReactLab Commit Message Validator
# Format: <type>(#issue): short description

COMMIT_MSG_FILE=$1
COMMIT_MSG=$(cat "$COMMIT_MSG_FILE")

# Regular Expression for the format: type(#issue): description
REGEXP="^(feat|fix|refactor|style|chore|docs|test)\(#[0-9]+\): .+$"

if [[ ! $COMMIT_MSG =~ $REGEXP ]]; then
  echo "Error: Invalid commit message format!"
  echo "Expected: <type>(#issue): short description"
  echo "Allowed types: feat, fix, refactor, style, chore, docs, test"
  echo "Example: feat(#57): add primary button component"
  exit 1
fi

echo "Commit message format is valid."
exit 0
