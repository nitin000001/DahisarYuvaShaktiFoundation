import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './', // Set the root to the directory containing index.html
  build: {
    outDir: 'dist', // Specify output directory
  },
});
