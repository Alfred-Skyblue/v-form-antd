// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, '../packages/index.ts'),
      name: 'MyLib',
      fileName: format => `my-lib.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
