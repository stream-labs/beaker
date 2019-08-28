#!/usr/bin/env bash

sed -i '' 's/"sideEffects": false/"sideEffects": true/g' package.json
rm -rf dist
vue-cli-service build
sed -i '' 's/"sideEffects": true/"sideEffects": false/g' package.json
cd dist
git init
git add -A
git commit -m "deploy"
git push -f git@github.com:stream-labs/beaker.git master:gh-pages
