import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    // cssCodeSplit: true,
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/kmine-lib.ts'),
      name: 'KmineLib',
      fileName: 'kmine-lib',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [
    react(),
  ],
})
