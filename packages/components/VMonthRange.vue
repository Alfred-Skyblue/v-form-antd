<!--
 * @author: ypt
 * @date: 2021/11/27
 * @description: 月份范围选择
-->
<template>
  <div>
    <a-range-picker
      v-bind="record.props"
      v-on="record.on"
      :value="month"
      :mode="['month', 'month']"
      @panelChange="handlePanelChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api'
import { vModelMixin } from '@pack/mixins/v-model-mixni'
import { useVModel } from '@vueuse/core'
import { IVFormComponent } from '@pack/typings/v-form-component'

export default defineComponent({
  name: 'VMonthRange',
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
    record: {
      type: Object as PropType<IVFormComponent>
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
      const valueFormat = props.record?.props?.valueFormat
      if (valueFormat) return (month.value = value.map(item => item.format(valueFormat)))
      month.value = value
    }
    return { handlePanelChange, month }
  }
})
</script>

<style scoped></style>
