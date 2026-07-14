import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import topLevelAwait from 'vite-plugin-top-level-await';
import wasm from 'vite-plugin-wasm';

export default defineConfig({
  plugins: [
    wasm(),
    topLevelAwait(),
    react()
  ],
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist',
    target: 'esnext'
  }
});
