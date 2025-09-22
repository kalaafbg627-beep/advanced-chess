// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // optional: lets you import like '@/components/Board'
    },
  },
  build: {
    outDir: 'dist',
  },
})
