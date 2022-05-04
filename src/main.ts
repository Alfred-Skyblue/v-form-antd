import { createApp, defineComponent, h, PropType } from 'vue'
import App from './App.vue'
import VFormAntd from '@/index'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import type { BasicFormItem } from '@common/class/basic-form'
const app = createApp(App)
app.config.globalProperties.$log = console.log
app.use(Antd)
// 可按照以下方式传递自定义组件
app.use(VFormAntd, {
  customComponents: [
    {
      label: '自定义组件',
      type: 'custom',
      // 自定义组件，可传递已注册组件的名称或者组件实例
      component: defineComponent({
        render() {
          return h('div', '自定义组件')
        }
      }),
      // 自定义组件配置项，可传递已注册组件的名称或者组件实例
      attrsConfig: defineComponent({
        props: {
          formItem: {
            type: Object as PropType<BasicFormItem>,
            required: true
          }
        },
        render() {
          return h('input', {
            value: this.formItem.label,
            onInput: (e: InputEvent) => {
              this.formItem.label = e.target.value
            }
          })
        }
      })
    }
  ]
})
app.mount('#app')
app.config.errorHandler = (err, vm, info) => {
  console.error('error', err)
  console.error('vm', vm)
  console.error('info', info)
}
