#!/usr/bin/env bash

ttsc

declare -a export_dirs=(
    core-graphic
)

for dir in "${export_dirs[@]}"; do
    cat <<EOF >"$dir/package.json"
{
    "main": "./index.js",
    "types": "./index.d.ts"
}
EOF
done
