// vite.config.js
import { defineConfig } from 'vite'
import { resolve } from 'path'
export const buildConfig = defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, '../packages/index.ts'),
      name: 'v-form-antd',
      formats: ['es', 'cjs', 'umd'],
      fileName: format => `v-form-antd.${format}.js`
    },
    rollupOptions: {
      external: ['vue', 'ant-design-vue'],
      output: {
        // 配置 css 文件名
        assetFileNames: 'v-form-antd.[ext]',
        globals: {
          vue: 'Vue',
          'ant-design-vue': 'antd'
        }
      }
    }
  }
})
