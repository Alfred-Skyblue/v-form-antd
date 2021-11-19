<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/19
 * @Description:
-->
<template>
  <div>
    <component :is="componentItem"></component>
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
    const componentItem = computed(() => componentMap[props.record.type])
    return { ...toRefs(state), componentItem }
  }
})
</script>
