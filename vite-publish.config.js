import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue2";

export default defineConfig({
  plugins: [vue()],
	build: {
		minify: false,
    target: 'chrome76',
    commonjsOptions: {
      requireReturnsDefault: true,
    },
    lib: {
      entry: resolve(__dirname, 'src/system.js'),
			name: 'Beaker',
			fileName: 'beaker'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})