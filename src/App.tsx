import { defineComponent, onMounted } from 'vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { useEventListener } from '@vueuse/core'
export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    onMounted(() => {
      useEventListener(document, 'drop', event => {
        event.preventDefault()
        event.stopPropagation()
        console.log('拖拽')
      })
    })
    return () => (
      <a-config-provider locale={zhCN}>
        <div>
          <v-form-design />
        </div>
      </a-config-provider>
    )
  }
})
