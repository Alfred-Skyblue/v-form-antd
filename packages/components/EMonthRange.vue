<!--
 * @author: 杨攀腾
 * @date: 2021/11/27
 * @description: $END$
-->
<template>
  <div>
    <a-range-picker
      v-bind="props"
      v-on="$listeners"
      :value="month"
      :mode="['month', 'month']"
      @panelChange="handlePanelChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { vModelMixin } from '@pack/mixins/v-model-mixni'
import { useVModel } from '@vueuse/core'

export default defineComponent({
  name: 'EMonthRange',
  mixins: [vModelMixin],
  props: {
    mode: {
      type: Array,
      default: () => ['month', 'month']
    },
    props: {
      type: Object,
      default: () => ({
        placeholder: ['开始月份', '结束月份'],
        format: 'yyyy-MM',
        valueFormat: 'yyyy-MM'
      })
    },
    modelValue: {}
  },
  setup(props, { emit }) {
    const month = useVModel(props, 'modelValue', emit)
    /**
     * 面板变化时调用
     * @param value 面板变化的值
     */
    const handlePanelChange = (value: any[]) => {
      if (props.props.valueFormat) {
        return (month.value = value.map(item => item.format(props.props.valueFormat)))
      }
      month.value = value
    }
    return { handlePanelChange, month }
  }
})
</script>

<style scoped></style>
