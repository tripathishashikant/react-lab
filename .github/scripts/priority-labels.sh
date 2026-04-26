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

create_label "p0" "B60205" "Critical – do immediately"
create_label "p1" "D93F0B" "High priority"
create_label "p2" "FBCA04" "Low priority"
