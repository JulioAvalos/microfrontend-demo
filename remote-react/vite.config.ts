// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'remoteReact',
            filename: 'remoteEntry.js',
            exposes: {
                './bootstrap': './src/bootstrap.tsx'
            },
            shared: ['react', 'react-dom']
        })
    ],
    server: {
        port: 3001,
        cors: true,
    },
    optimizeDeps: {
        exclude: ['remoteReact/bootstrap']
    },
    build: {
        rollupOptions: {
            external: ['remoteReact/bootstrap']
        },
        target: 'esnext'
    },
});
