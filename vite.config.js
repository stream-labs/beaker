import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [createVuePlugin()],
  build: {
    minify: false,
    commonjsOptions: {
      requireReturnsDefault: true
    }
  }
})