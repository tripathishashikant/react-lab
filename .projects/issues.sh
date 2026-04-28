#!/bin/bash

create_issue () {
  gh issue create \
    --title "$1" \
    --body "$2" \
    --milestone "$3" \
    --label "$4"
}

# # Milestone 1
# create_issue "Initialize Vite + React + TypeScript" "Create project using Vite react-ts template." "Milestone 1 – Project foundation" "setup"
# create_issue "Configure ESLint + Prettier" "Strict linting rules. No warnings allowed." "Milestone 1 – Project foundation" "setup"
# create_issue "Setup base folder structure" "Apply architecture guide strictly." "Milestone 1 – Project foundation" "architecture"
# create_issue "Setup routing shell" "Add react-router with lazy loading." "Milestone 1 – Project foundation" "routing"

# # Milestone 2
# create_issue "Install Tailwind CSS" "Tailwind + PostCSS + config verification." "Milestone 2 – Design system + Tailwind" "styling"
# create_issue "Implement Tailwind config from style guide" "Map tokens only. No defaults." "Milestone 2 – Design system + Tailwind" "styling"
# create_issue "Create base UI components" "Button, Card, Input using @apply." "Milestone 2 – Design system + Tailwind" "components"

# # Milestone 3
# create_issue "Create MainLayout" "Header + Sidebar + Content area." "Milestone 3 – App shell & navigation" "layout"
# create_issue "Build Sidebar navigation" "Data-driven from feature metadata." "Milestone 3 – App shell & navigation" "navigation"
# create_issue "Add header with logo" "SVG logo + layout alignment." "Milestone 3 – App shell & navigation" "layout"

# # Milestone 4
# create_issue "Create feature template" "Pages, components, hooks, config, index." "Milestone 4 – Feature system" "feature"
# create_issue "Implement useState feature" "Counter demo with reset." "Milestone 4 – Feature system" "feature"
# create_issue "Implement useEffect feature" "Side-effect demo with cleanup." "Milestone 4 – Feature system" "feature"

# # Milestone 5
# create_issue "Create code viewer" "Read-only code with copy support." "Milestone 5 – Learning enhancements" "ux"
# create_issue "Add feature status badges" "Difficulty + learning state." "Milestone 5 – Learning enhancements" "ux"

# # Milestone 6
# create_issue "Lazy load all features" "Ensure code splitting works." "Milestone 6 – Scalability & polish" "performance"
# create_issue "Improve keyboard navigation" "Focus management + tab order." "Milestone 6 – Scalability & polish" "accessibility"

# # Milestone 7
# create_issue "Finalize architecture documentation" "Clean and complete markdown docs." "Milestone 7 – Documentation" "docs"
# create_issue "Add feature creation guide" "Steps for adding new feature." "Milestone 7 – Documentation" "docs"

# # Milestone 8
# create_issue "Refactor and remove dead code" "Final cleanup pass." "Milestone 8 – Review & refactor" "refactor"
# create_issue "Tighten TypeScript types" "No any. No loose types." "Milestone 8 – Review & refactor" "refactor"

# Milestone 9
create_issue "Harden design system architecture and shared component foundations" "Unify navigation metadata, separate learning features from docs routes, standardize shared component API conventions, and clean up dead architecture paths so the component system has one scalable structure." "Milestone 9 - Design system hardening" "architecture"
create_issue "Improve reusable component quality, accessibility, and composition" "Upgrade Button, Modal, Tabs, Input, Table, and Card so they are truly reusable primitives with consistent props, strong accessibility behavior, and composition patterns suitable for a design system." "Milestone 9 - Design system hardening" "components"
create_issue "Refactor styleguide into a documentation system" "Replace the hardcoded styleguide page with a metadata-driven docs registry and reusable preview plus code section, then add Storybook-like essentials such as usage guidance, props details, variant coverage, and copy-friendly examples." "Milestone 9 - Design system hardening" "docs"

# Milestone 10
create_issue "Improve site performance and frontend delivery" "Optimize actual site performance by splitting heavy routes, lazy-loading docs and code viewer dependencies, reducing bundle cost, improving font loading, and tightening asset delivery for faster initial render." "Milestone 10 - Platform polish + senior React tracks" "performance"
create_issue "Improve site SEO and discoverability" "Add route-level metadata, dynamic page titles, meta descriptions, Open Graph and Twitter tags, canonical support, robots guidance, and sitemap-ready structure so the site is shareable and indexable beyond a single static title." "Milestone 10 - Platform polish + senior React tracks" "docs"
create_issue "Build platform features: theme switcher and blog foundation" "Add a persistent theme switcher and create the blog page foundation with reusable article layout and content structure so the site can grow beyond a pure component lab." "Milestone 10 - Platform polish + senior React tracks" "feature"
create_issue "Create senior React learning and building tracks with leveled examples" "Add Learning and Building sections with easy, medium, and hard examples covering the core topics a strong senior React developer should know: component composition, state modeling, reducers, forms, routing, async UI, custom hooks, context design, rendering behavior, performance strategy, accessibility, design systems, testing, resilience, and reusable UI architecture." "Milestone 10 - Platform polish + senior React tracks" "feature"
