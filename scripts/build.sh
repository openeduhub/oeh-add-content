#!/usr/bin/env bash

set -e

(
    cd frontend
    npm ci
    rm -rf dist
    npm run build
)
(
    cd backend
    npm ci
    npm run build
    npm prune --production
)