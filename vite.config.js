import { defineConfig } from 'vite';

export default defineConfig({
  base: '/3d-top-down-shooter/',
  server: {
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  }
}); 