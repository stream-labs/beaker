const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const typescript = require("rollup-plugin-typescript");
const vue = require("rollup-plugin-vue");
const svg = require("rollup-plugin-svg");
const rebaseAssets = require("rollup-plugin-rebase");
const image = require("rollup-plugin-image");
const minify = require("rollup-plugin-babel-minify");
const serve = require("rollup-plugin-serve");

module.exports = {
  input: "src/main.js",
  output: {
    file: "public/main.js",
    format: "iife",
  },
  external: ["vue", "vue-router"],
  plugins: [
    resolve(),
    commonjs({
      namedExports: {
        "node_modules/vue-color/dist/vue-color.min.js": ["Chrome"]
      }
    }),
    typescript(),
    vue({ defaultLang: { script: "ts", style: "less" } }),
    rebaseAssets(),
    svg(),
    image(),
    minify(),
    serve("pubic")
  ]
};
