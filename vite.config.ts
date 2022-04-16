import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { buildConfig } from './build/vite.lib.config'

export default ({ mode }: { mode: string }) => {
  const isProd = mode === 'production'
  return defineConfig({
    ...(isProd && buildConfig),
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./packages', import.meta.url)),
        '@common': fileURLToPath(new URL('./packages/common', import.meta.url)),
        '@create': fileURLToPath(
          new URL('./packages/v-form-create', import.meta.url)
        ),
        '@design': fileURLToPath(
          new URL('./packages/v-form-design', import.meta.url)
        ),
        '@styles': fileURLToPath(new URL('./styles', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    }
  })
}
