#!/usr/bin/env bash

set -e

docker-compose -f docker/docker-compose.yml --project-name oeh-add-content "$@"