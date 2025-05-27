import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/FullStackHelsinki-Exercises1.3-1.5/',
  plugins: [react()],
})
