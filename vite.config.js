import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/kalaafbg627-beep/'});

git add .
git commit -m "Fix: move index.html to root for Vite build"
git push origin main
