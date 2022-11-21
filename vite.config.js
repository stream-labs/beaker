import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';

export default defineConfig({
  plugins: [createVuePlugin()],
  build: {
    commonjsOptions: {
      requireReturnsDefault: true,
    },
  }
})