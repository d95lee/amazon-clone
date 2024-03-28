import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  serve: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  build: {
    outDir: '../public'
  }
})
