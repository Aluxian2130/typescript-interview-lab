#!/usr/bin/env bash
set -euo pipefail
npm run build
cd dist
cp index.html 404.html
