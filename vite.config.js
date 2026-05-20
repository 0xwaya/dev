import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 5000,
    rollupOptions: {
      onwarn(warning, warn) {
        const message = warning.message || '';

        // Ignore known third-party warnings we do not control.
        if (
          message.includes('three-stdlib/libs/lottie.js') ||
          message.includes('"BatchedMesh" is not exported by "node_modules/three/build/three.module.js"')
        ) {
          return;
        }

        warn(warning);
      },
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'motion-vendor': ['framer-motion'],
        },
      },
    },
  },
})
