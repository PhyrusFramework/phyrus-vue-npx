import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require("path");

import { dependencies } from './package.json';
function renderChunks(deps) {
  let chunks = {};
  Object.keys(deps).forEach((key) => {
    chunks[key] = [key];
  });
  return chunks;
}

// https://vitejs.dev/config/
export default defineConfig({

  envDir: 'environments',
  envPrefix: '_',

  plugins: [vue()],
  server: {
    open: true
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1700 * 1024,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: renderChunks(dependencies),
      },
    },
  },
})