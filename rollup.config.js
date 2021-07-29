import resolve from "@rollup/plugin-node-resolve"
import pkg from "./package.json"
import typescript from "rollup-plugin-typescript2"
import alias from "@rollup/plugin-alias"

const name = pkg.name
    .replace(/^\w/, m => m.toUpperCase())
    .replace(/-\w/g, m => m[1].toUpperCase())

export default {
    input: "src/index.ts",
    output: [
        { file: pkg.module, format: "esm", name, sourcemap: true },
        { file: pkg.main, format: "cjs", name, sourcemap: true }
    ],
    plugins: [
        typescript({
            sourceMap: true,
            useTsconfigDeclarationDir: true
        }),
        resolve(),
        alias({
            resolve: [".ts"],
            entries: {
                "@core-graphic": "src/core-graphic"
            }
        })
    ]
}
