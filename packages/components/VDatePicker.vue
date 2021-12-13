<!--
 * @author: ypt
 * @date: 2021/11/27
 * @description: 日期选择组件
-->
<template>
  <a-range-picker v-model="date" valueFormat="YYYY/MM/DD" />
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent, PropType } from '@vue/composition-api'
import { vModelMixin } from '@pack/mixins/v-model-mixni'
import { useVModel } from '@vueuse/core'

export default defineComponent({
  name: 'VDatePicker',
  mixins: [vModelMixin],
  props: {
    props: {
      type: Object,
      default: () => ({
        format: 'YYYY/MM/DD'
      })
    },
    modelValue: {
      type: [String, Object, Array, Date] as PropType<any>
    }
  },
  setup(props, { emit }) {
    const date = useVModel(props, 'modelValue', emit)
    const state = reactive({})

    return { ...toRefs(state), date }
  }
})
</script>

<style scoped></style>
