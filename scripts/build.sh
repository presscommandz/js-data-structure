#!/usr/bin/env bash

# Remove prev build
rm -rf lib

# Build package
tsc && tsc-alias -f

# Manually create ambient Typescript declaration
# Normal declaration files are not compatible to exports map/dual type packages
npx tsc --declaration --emitDeclarationOnly --outFile lib/index.d.ts
node node_modules/tfig/build/gift-cli.js \
    -i lib/index.d.ts \
    -r index \
    -n "@hlworld/js-data-structure" \
    -o lib/index.d.ts \
    --config ./module-entries.json \
    -p false
