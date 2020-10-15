#!/usr/bin/env bash

set -e

(
    cd docker
    docker-compose pull
    docker-compose --project-directory .. up -d
)

