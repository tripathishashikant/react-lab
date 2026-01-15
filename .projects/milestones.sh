#!/bin/bash

OWNER="tripathishashikant"
REPO="react-lab"

create_milestone () {
  gh api \
    --method POST \
    repos/$OWNER/$REPO/milestones \
    -f title="$1" \
    -f due_on="$2"
}

create_milestone "Milestone 1 – Project foundation" "2026-01-21T23:59:59Z"
create_milestone "Milestone 2 – Design system + Tailwind" "2026-01-28T23:59:59Z"
create_milestone "Milestone 3 – App shell & navigation" "2026-02-04T23:59:59Z"
create_milestone "Milestone 4 – Feature system" "2026-02-11T23:59:59Z"
create_milestone "Milestone 5 – Learning enhancements" "2026-02-18T23:59:59Z"
create_milestone "Milestone 6 – Scalability & polish" "2026-02-25T23:59:59Z"
create_milestone "Milestone 7 – Documentation" "2026-03-04T23:59:59Z"
create_milestone "Milestone 8 – Review & refactor" "2026-03-11T23:59:59Z"
