<!--
 * @author: ypt
 * @date: 2022/4/24
 * @description: 表单构建器，仅用于构建表单属性
-->
<template>
  <div v-for="(formItem, index) of formItems" :key="formItem.field">
    <a-form-item v-if="index === 3" label="栅格数">
      <a-slider
        v-model:value="currentItem.span"
        :min="0"
        :max="24"
        @change="handleGridChange"
      ></a-slider>
    </a-form-item>
    <a-form-item :label="formItem.label" v-if="!formItem.hidden">
      <slot :name="formItem.field" v-bind="{ ...formItem }">
        <component
          :is="formItem.tag"
          :placeholder="formItem.placeholder"
          v-model:value="data[formItem.field]"
          v-bind="formItem.props"
          v-on="formItem.on || {}"
        ></component>
      </slot>
    </a-form-item>
  </div>
  <a-divider title="校验规则">校验规则</a-divider>
  <VFormRules></VFormRules>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref } from 'vue'
import type { IAnyEvent, IAnyObject } from '@common/types'
import { useVModel } from '@vueuse/core'
import { useFormDesign } from '@design/hooks/useFormDesign'
import { globalConfig } from '@common/class/basic-form'
import VFormRules from '@design/components/VFProps/components/VFormRules/index.vue'
export interface IFormBuilderOptions {
  label: string
  field: string
  tag: string
  placeholder?: string
  props?: IAnyObject
  on?: IAnyEvent
  hidden?: boolean | Ref<boolean>
}
export default defineComponent({
  name: 'VFormBuilder',
  components: { VFormRules },
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
    const { currentItem } = useFormDesign()
    const handleGridChange = (val: number) => {
      globalConfig.span = val
    }
    return { data, currentItem, handleGridChange }
  }
})
</script>
