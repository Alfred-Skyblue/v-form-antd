<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/19
 * @Description: 右侧属性配置面板
-->
<template>
  <div>
    <a-tabs
      :activeKey="activeKey"
      @change="changeTab"
      :tabBarStyle="{ margin: 0 }"
    >
      <a-tab-pane :key="1" tab="表单属性设置">表单属性</a-tab-pane>
      <a-tab-pane :key="2" tab="控件属性设置">控件属性</a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'

type ChangeTabKey = 1 | 2
export interface IPropsPanel {
  changeTab: (key: ChangeTabKey) => void
}
export default defineComponent({
  name: 'PropsPanel',
  setup() {
    const state = reactive({ activeKey: 1 })
    const changeTab = (e: number) => {
      console.log('-> e', e)
      state.activeKey = e
    }
    return { ...toRefs(state), changeTab }
  }
})
</script>
