import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // ensures relative paths for deploys
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['/src/main.jsx'], // 🔑 externalize main entry to avoid build errors
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
