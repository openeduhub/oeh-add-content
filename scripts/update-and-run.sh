#!/usr/bin/env bash

set -e

if [[ -e '.env' ]] ; then
    source .env
fi

if [[ "$RELEASE" != 'local' ]] ; then
    ./scripts/docker-compose.sh pull
fi
./scripts/docker-compose.sh up -d

