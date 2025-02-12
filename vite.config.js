import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        intro: 'window.eval = function() { throw new Error("eval is disabled"); };',
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Mueve dependencias grandes a un archivo separado
          }
        }
      }
    }
  }
})
