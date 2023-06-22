// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'backend/dist',
    rollupOptions: {
      input: {
        main: '/backend/index.html',
      },
    },
  },
});
