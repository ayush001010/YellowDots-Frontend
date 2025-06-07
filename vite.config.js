import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

export default defineConfig({
  base: './', // ensures correct asset paths on Render or Netlify
  plugins: [
    react(),
    {
      name: 'copy-redirects',
      closeBundle: () => {
        // Absolute path ensures the file copy works from any context
        const src = resolve(__dirname, 'public', '_redirects')
        const dest = resolve(__dirname, 'dist', '_redirects')
        copyFileSync(src, dest)
      }
    }
  ]
})
