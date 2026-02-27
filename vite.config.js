import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.BASE_URL || '/portfolio/',
  server: {
    host: true, // listen on 0.0.0.0
    port: parseInt(process.env.PORT) || 5173,
    open: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'portfolio-lawy.onrender.com'
    ]
  },
  preview: {
    host: true,
    port: parseInt(process.env.PORT) || 4173,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'portfolio-lawy.onrender.com'
    ]
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
