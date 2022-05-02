<!--
 * @author: ypt
 * @date: 2022/5/2
 * @description: 表单渲染器
-->
<template>v-form-render</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { BasicFormItem } from '@common/class/basic-form'
import type { VForm } from '@common/class/form/form'

interface IFormConfig {
  formItems: BasicFormItem[]
  config: VForm
}
export default defineComponent({
  name: 'VFormRender',
  props: {
    formConfig: {
      type: Object as PropType<IFormConfig>,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>
