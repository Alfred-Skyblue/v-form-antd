<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/19
 * @Description:
-->
<template>
  <div>
    <a-form-model-item v-bind="formItemProps">
      <component :is="componentItem"></component>
    </a-form-model-item>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  computed,
  PropType
} from '@vue/composition-api'
import { componentMap } from '@pack/core/formItemConfig'
import { IEFormComponent } from '@pack/typings/EFormComponent'

export default defineComponent({
  name: 'EFormItem',
  props: {
    record: {
      type: Object as PropType<IEFormComponent>,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
      componentMap
    })

    const formItemProps = computed(() => {
      const { label } = props.record
      return { label }
    })
    const componentItem = computed(() => componentMap[props.record.type])
    return { ...toRefs(state), componentItem, formItemProps }
  }
})
</script>
