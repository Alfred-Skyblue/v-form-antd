/**
 * @name: VFormDesign
 * @author: ypt
 * @date: 2022-04-09 12:22:27
 * @description: VFormDesign 表单设计器
 */

import { defineComponent, toRefs } from 'vue'
import Layout from '@/Layout'

export default defineComponent({
  name: 'VFormDesign',
  props: {
    title: {
      type: String,
      default: 'v-form-antd表单设计器'
    }
  },
  setup(props) {
    const { title } = toRefs(props)
    const renderCmpList = () => {
      return <div>左侧内容</div>
    }
    const renderHeader = () => {
      return <div>{title.value}</div>
    }
    const renderComponentPanel = () => {
      return <div>中间内容</div>
    }
    const renderConfigPanel = () => {
      return <div>右侧内容</div>
    }
    const layoutSlot = {
      cmpList: renderCmpList,
      header: renderHeader,
      default: renderComponentPanel,
      config: renderConfigPanel
    }
    return () => (
      <div class="v-form-design light-theme v-h-screen v-bg-body">
        <Layout>{layoutSlot}</Layout>
      </div>
    )
  }
})
