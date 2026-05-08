import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    viteCompression({ algorithm: 'gzip', ext: '.gz' }),
    viteCompression({ algorithm: 'brotliCompress', ext: '.br' })
  ],
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  build: {
    target: 'es2015',
    minify: 'esbuild',
    sourcemap: false,
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router', 'react-router-dom'],
          'vendor-utils': ['framer-motion', 'lottie-react', 'i18next', 'react-i18next', '@reduxjs/toolkit', 'react-redux'],
        }
      }
    }
  }
})
