import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remoteReact', // Must match Angular's remote key
      filename: 'remoteEntry.js', // Will be forced to root
      exposes: {
        './bootstrap': './src/bootstrap.tsx' // Your exposed module
      },
      shared: ['react', 'react-dom'], // Shared deps
    })
  ],
  build: {
    // Force ESM format and correct file placement
    rollupOptions: {
      output: {
        format: 'esm', // Critical for Angular
        entryFileNames: 'remoteEntry.js', // Literal filename (no [name])
        chunkFileNames: 'assets/[name].[hash].js', // Other chunks
        assetFileNames: 'assets/[name].[ext]', // CSS/images
      }
    },
    target: 'esnext', // Supports top-level await
    minify: false,    // Easier debugging
  },
  server: {
    port: 3001,
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow Angular host
    }
  }
});