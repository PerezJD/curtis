import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default [
  {
    input: "src/components/App.tsx",
    output: [
      {
        dir: "public/js",
        format: "commonjs"
      }
    ],
    preserveEntrySignatures: false,
    plugins: [
      nodeResolve({
        extensions,
        exportConditions: ["solid"]
      }),
      babel({
        extensions,
        babelHelpers: "bundled",
        presets: [
          ["solid", { generate: "dom", hydratable: true }],
          "@babel/preset-typescript"
        ]
      }),
      terser()
    ]
  },
  {
    input: "ssg/server.tsx",
    output: [
      {
        dir: "lib",
        exports: "auto",
        format: "esm"
      }
    ],
    external: ["solid-js", "solid-js/web"],
    plugins: [
      nodeResolve({
        extensions,
        exportConditions: ["solid"],
        preferBuiltins: true
      }),
      babel({
        extensions,
        babelHelpers: "bundled",
        presets: [
          ["solid", { generate: "ssr", hydratable: true, async: true }],
          "@babel/preset-typescript"
        ]
      })
    ]
  }
  
];
