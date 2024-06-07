import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // Separate vendor chunk
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000, // Increase limit to 1000 kB
    outDir: 'dist' // Ensure output directory is set to 'dist'
  }
});
