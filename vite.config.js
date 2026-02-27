import { defineConfig } from 'vite'

export default defineConfig({
  // GitHub Pages: set base to your repo name if deploying to /repo-name/
  // For user/org site (e.g., username.github.io), use base: '/'
  base: process.env.BASE_URL || '/portfolio/',
  server: {
    port: 5173,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
