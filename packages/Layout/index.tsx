/**
 * @name: Layout
 * @author: ypt
 * @date: 2022/4/9
 * @description: 布局组件
 */
import { defineComponent } from 'vue'
import './style/index.less'
export default defineComponent({
  name: 'Layout',
  setup(props, { slots }) {
    return () => (
      <div class="v-form-antd-layout">
        <header class="v-form-antd-header xy-center">{slots.header?.()}</header>
        <div class="v-form-antd-body">
          <div class="v-form-cmp-list ">{slots.cmpList?.()}</div>
          <div class="v-form-main">{slots.default?.()}</div>
          <div class="v-form-cfg">{slots.config?.()}</div>
        </div>
      </div>
    )
  }
})
