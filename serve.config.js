// This config is built to use Rollup for the "serve" script but currently has some errors with assets

const replace = require("rollup-plugin-replace");
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const typescript = require("rollup-plugin-typescript");
const vue = require("rollup-plugin-vue");
const svg = require("rollup-plugin-svg");
const rebaseAssets = require("rollup-plugin-rebase");
const image = require("rollup-plugin-img");
const json = require("rollup-plugin-json");
const minify = require("rollup-plugin-babel-minify");
const serve = require("rollup-plugin-serve");

module.exports = {
  input: "src/main.js",
  output: {
    file: "public/main.js",
    format: "iife",
    globals: ["ebyfzXxX_vue", "pPuHzvBT_vue", "bCNEBiXp_vue"]
  },
  plugins: [
    vue({ defaultLang: { script: "ts", style: "less" } }),
    resolve(),
    commonjs({
      namedExports: {
        "node_modules/vue-color/dist/vue-color.min.js": ["Chrome"]
      }
    }),
    typescript(),
    rebaseAssets(),
    svg(),
    image(),
    json(),
    // minify(),
    replace({ "process.env.NODE_ENV": JSON.stringify("production") }),
    serve({ contentBase: "public", open: true })
  ]
};
