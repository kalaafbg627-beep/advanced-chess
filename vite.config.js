import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',       // 🔑 ensures relative paths for deploys (Vercel / GitHub Pages)
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': '/src',  // optional: allows imports like '@/components/Board'
    },
  },
})
