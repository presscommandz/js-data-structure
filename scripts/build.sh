#!/usr/bin/env bash

# Remove prev build
rm -rf lib

# Build ESM package
tsc -p tsconfig-esm.json && tsc-alias -f -p tsconfig-esm.json
echo '{ "type": "module" }' >lib/esm/package.json

# Build CJS package
tsc -p tsconfig-cjs.json && tsc-alias -f -p tsconfig-cjs.json

# Manually create ambient Typescript declaration
# Normal declaration files are not compatible to exports map/dual type packages
if [[ ! -d lib/types ]]; then mkdir lib/typings; fi
npx tsc --emitDeclarationOnly --outFile lib/typings/index.d.ts
node node_modules/tfig/build/gift-cli.js \
    -i lib/typings/index.d.ts \
    -r index \
    -n "@presscommandz/js-data-structure" \
    -o lib/typings/index.d.ts \
    --config ./module-entries.json \
    -p false
