import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    react(),
    // Required for midnight-js and its crypto dependencies in the browser
    nodePolyfills({
      include: ['buffer', 'crypto', 'stream', 'util'],
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
    }),
  ],
  resolve: {
    alias: {
      // Ensure a single Buffer instance across all dependencies
      buffer: 'buffer/',
    },
  },
  optimizeDeps: {
    include: ['buffer'],
  },
  build: {
    target: 'ES2022',
    rollupOptions: {
      output: {
        manualChunks: {
          'midnight-js': [
            '@midnight-ntwrk/dapp-connector-api',
          ],
          react: ['react', 'react-dom'],
        },
      },
    },
  },
  server: {
    port: 5173,
    // Allow the UI to talk to the local proof server
    cors: true,
  },
});
