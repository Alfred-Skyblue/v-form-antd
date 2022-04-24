<!--
 * @author: 杨攀腾
 * @date: 2022/4/24
 * @description: 表单构建器，仅用于构建表单属性
-->
<template>
  <a-form-item
    v-for="formItem of formItems"
    :key="formItem.field"
    :label="formItem.label"
  >
    <slot :name="formItem.field">
      <component
        :is="formItem.tag"
        :placeholder="formItem.placeholder"
        v-model:value="data[formItem.field]"
        v-bind="formItem.props"
        v-on="formItem.on || {}"
      ></component>
    </slot>
  </a-form-item>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { IAnyEvent, IAnyObject } from '@common/types'
import { useVModel } from '@vueuse/core'
export interface IFormBuilderOptions {
  label: string
  field: string
  tag: string
  placeholder?: string
  props?: IAnyObject
  on?: IAnyEvent
}
export default defineComponent({
  name: 'VFormBuilder',
  props: {
    formItems: {
      type: Array as PropType<IFormBuilderOptions[]>,
      default: () => []
    },
    formData: {
      type: Object
    }
  },
  setup(props, { emit }) {
    const data = useVModel(props, 'formData', emit)
    return { data }
  }
})
</script>

<style scoped></style>
