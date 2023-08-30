#!/bin/bash

SCRIPTS_DIR=`dirname "$0"`

cat "$SCRIPTS_DIR/../sql/schema.sql" "$SCRIPTS_DIR/../sql/seeds.sql" \
  | psql -U mlo2gs -d testbase -p 5432 -h localhost -1 -f - 