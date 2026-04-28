#!/bin/bash

OWNER="tripathishashikant"
REPO="react-lab"

create_label () {
  gh api \
    --method POST \
    repos/$OWNER/$REPO/labels \
    -f name="$1" \
    -f color="$2" \
    -f description="$3"
}

create_label "setup" "0E8A16" "Project setup tasks"
create_label "architecture" "5319E7" "App structure and architecture"
create_label "routing" "1D76DB" "Routing and navigation logic"
create_label "styling" "D93F0B" "Styles and Tailwind config"
create_label "components" "FBCA04" "Reusable UI components"
create_label "layout" "0052CC" "Layout-related work"
create_label "navigation" "006B75" "Sidebar and navigation"
create_label "feature" "C2E0C6" "Feature implementation"
create_label "ux" "F9D0C4" "Learning experience improvements"
create_label "performance" "006B75" "Performance optimization"
create_label "accessibility" "0E8A16" "Accessibility fixes"
create_label "docs" "0075CA" "Documentation"
create_label "refactor" "B60205" "Refactoring and cleanup"
