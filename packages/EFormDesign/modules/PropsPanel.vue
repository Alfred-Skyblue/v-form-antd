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
      <a-tab-pane :key="1" tab="表单属性设置">
        <FormProps></FormProps>
      </a-tab-pane>
      <a-tab-pane :key="2" tab="控件属性设置">
        <FormItemProps></FormItemProps>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import FormProps from '../components/FormProps.vue'
import FormItemProps from '../components/FormItemProps.vue'
import { useFormDesignState } from '@pack/hooks/useFormDesignState'

type ChangeTabKey = 1 | 2
export interface IPropsPanel {
  changeTab: (key: ChangeTabKey) => void
}
export default defineComponent({
  name: 'PropsPanel',
  components: {
    FormProps,
    FormItemProps
  },
  setup() {
    const { formConfig } = useFormDesignState()
    const state = reactive({
      activeKey: 1
    })
    const changeTab = (e: number) => {
      state.activeKey = e
    }
    return { ...toRefs(state), changeTab, formConfig }
  }
})
</script>
