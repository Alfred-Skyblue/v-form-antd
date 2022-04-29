import { defineComponent } from 'vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    return () => (
      <a-config-provider locale={zhCN}>
        <div>
          <v-form-design />
        </div>
      </a-config-provider>
    )
  }
})
