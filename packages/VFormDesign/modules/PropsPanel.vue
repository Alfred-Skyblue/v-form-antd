<!--
 * @Author: ypt
 * @Date: 2021/11/19
 * @Description: 右侧属性配置面板
-->
<template>
  <div>
    <a-tabs v-model="formConfig.activeKey" :tabBarStyle="{ margin: 0 }">
      <a-tab-pane :key="1" tab="表单属性">
        <FormProps></FormProps>
      </a-tab-pane>
      <a-tab-pane :key="2" tab="控件属性">
        <FormItemProps></FormItemProps>
      </a-tab-pane>
      <a-tab-pane :key="3" tab="组件属性">
        <slot v-if="slotProps" :name="slotProps['type'] + 'Props'"></slot>
        <ComponentProps v-else></ComponentProps>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api'
import FormProps from '../components/FormProps.vue'
import FormItemProps from '../components/FormItemProps.vue'
import ComponentProps from '../components/ComponentProps.vue'
import { useFormDesignState } from '@pack/hooks/useFormDesignState'
import { customComponents } from '@pack/core/formItemConfig'

type ChangeTabKey = 1 | 2
export interface IPropsPanel {
  changeTab: (key: ChangeTabKey) => void
}
export default defineComponent({
  name: 'PropsPanel',
  components: {
    FormProps,
    FormItemProps,
    ComponentProps
  },
  setup() {
    const { formConfig } = useFormDesignState()
    const slotProps = computed(() => {
      return customComponents.find(
        item => item.type === formConfig.value.currentItem?.type
      )
    })
    return { formConfig, customComponents, slotProps }
  }
})
</script>
