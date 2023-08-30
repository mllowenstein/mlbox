#!/bin/bash

docker run --rm \
  --name testbase \
  -e POSTGRES_PASSWORD=eqla \
  -e POSTGRES_USER=mlo2gs \
  -e POSTGRES_DB=testbase \
  -p 5432:5432 \
  -v admin-vol:/var/lib/postgresql/data \
  postgres
