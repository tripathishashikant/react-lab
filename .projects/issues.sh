#!/bin/bash

create_issue () {
  gh issue create \
    --title "$1" \
    --body "$2" \
    --milestone "$3" \
    --label "$4"
}

# Milestone 1
create_issue "Initialize Vite + React + TypeScript" "Create project using Vite react-ts template." "Milestone 1 – Project foundation" "setup"
create_issue "Configure ESLint + Prettier" "Strict linting rules. No warnings allowed." "Milestone 1 – Project foundation" "setup"
create_issue "Setup base folder structure" "Apply architecture guide strictly." "Milestone 1 – Project foundation" "architecture"
create_issue "Setup routing shell" "Add react-router with lazy loading." "Milestone 1 – Project foundation" "routing"

# Milestone 2
create_issue "Install Tailwind CSS" "Tailwind + PostCSS + config verification." "Milestone 2 – Design system + Tailwind" "styling"
create_issue "Implement Tailwind config from style guide" "Map tokens only. No defaults." "Milestone 2 – Design system + Tailwind" "styling"
create_issue "Create base UI components" "Button, Card, Input using @apply." "Milestone 2 – Design system + Tailwind" "components"

# Milestone 3
create_issue "Create MainLayout" "Header + Sidebar + Content area." "Milestone 3 – App shell & navigation" "layout"
create_issue "Build Sidebar navigation" "Data-driven from feature metadata." "Milestone 3 – App shell & navigation" "navigation"
create_issue "Add header with logo" "SVG logo + layout alignment." "Milestone 3 – App shell & navigation" "layout"

# Milestone 4
create_issue "Create feature template" "Pages, components, hooks, config, index." "Milestone 4 – Feature system" "feature"
create_issue "Implement useState feature" "Counter demo with reset." "Milestone 4 – Feature system" "feature"
create_issue "Implement useEffect feature" "Side-effect demo with cleanup." "Milestone 4 – Feature system" "feature"

# Milestone 5
create_issue "Create code viewer" "Read-only code with copy support." "Milestone 5 – Learning enhancements" "ux"
create_issue "Add feature status badges" "Difficulty + learning state." "Milestone 5 – Learning enhancements" "ux"

# Milestone 6
create_issue "Lazy load all features" "Ensure code splitting works." "Milestone 6 – Scalability & polish" "performance"
create_issue "Improve keyboard navigation" "Focus management + tab order." "Milestone 6 – Scalability & polish" "accessibility"

# Milestone 7
create_issue "Finalize architecture documentation" "Clean and complete markdown docs." "Milestone 7 – Documentation" "docs"
create_issue "Add feature creation guide" "Steps for adding new feature." "Milestone 7 – Documentation" "docs"

# Milestone 8
create_issue "Refactor and remove dead code" "Final cleanup pass." "Milestone 8 – Review & refactor" "refactor"
create_issue "Tighten TypeScript types" "No any. No loose types." "Milestone 8 – Review & refactor" "refactor"
