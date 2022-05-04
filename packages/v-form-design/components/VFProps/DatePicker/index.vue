<!--
 * @author: ypt
 * @date: 2022/4/25
 * @description: 日期选择
-->

<template>
  <VFormBuilder :form-data="currentItem.props" :form-items="formItems">
    <template #label>
      <a-input v-model:value="currentItem.label" />
    </template>
    <template #field>
      <a-input v-model:value="currentItem.field" />
    </template>
  </VFormBuilder>
  <VFormSize></VFormSize>
  <CheckboxProps :list="actionProps"></CheckboxProps>
  <VFormRules></VFormRules>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import CheckboxProps from '@design/components/VFProps/components/CheckboxProps/index.vue'

import VFormBuilder from '@design/components/VFormBuilder/index.vue'
import type { IFormBuilderOptions } from '@design/components/VFormBuilder/index.vue'
import { useFormDesign } from '@design/hooks/useFormDesign'
import VFormSize from '@design/components/VFProps/components/VFormSize/index.vue'
import VFormRules from '@design/components/VFProps/components/VFormRules/index.vue'

const { currentItem } = useFormDesign()

const defaultValueCmp = computed(() => {
  return currentItem.value.type === 'dateRange' ? 'ARangePicker' : 'ADatePicker'
})
const formItems = computed<IFormBuilderOptions[]>(() => [
  {
    label: '标签',
    field: 'label',
    tag: 'AInput',
    placeholder: '请输入标签名称'
  },
  {
    label: '数据字段',
    field: 'field',
    tag: 'AInput',
    placeholder: '请输入数据字段'
  },
  {
    label: '占位符',
    field: 'placeholder',
    tag: 'AInput',
    placeholder: '请输入占位符'
  },
  {
    label: '默认值',
    field: 'defaultPickerValue',
    tag: defaultValueCmp.value,
    props: currentItem.value.props
  },
  {
    label: '日期格式',
    field: 'valueFormat',
    tag: 'AInput',
    placeholder: '默认为dayjs对象'
  },
  {
    label: '类型',
    field: 'picker',
    tag: 'ARadioGroup',
    on: {
      change(e: InputEvent) {
        if (e.target.value !== 'date') {
          currentItem.value.props.showTime = undefined
          currentItem.value.props.showNow = undefined
        }
      }
    },
    props: {
      options: [
        {
          label: '日期',
          value: 'date'
        },
        {
          label: '周',
          value: 'week'
        },
        {
          label: '月',
          value: 'month'
        },
        {
          label: '季度',
          value: 'quarter'
        },
        {
          label: '年',
          value: 'year'
        }
      ]
    }
  }
])
const actionProps = computed(() => {
  const datePickerProps = [
    {
      label: 'time',
      value: 'showTime'
    },
    {
      label: '此刻',
      value: 'showNow',
      hidden: !currentItem.value.props.showTime
    },
    {
      label: '显示今天',
      value: 'showToday'
    }
  ]
  const isDate = [undefined, 'date'].includes(currentItem.value.props.picker)
  return [
    {
      label: '禁用',
      value: 'disabled'
    },
    {
      label: '可清除',
      value: 'allowClear'
    },
    ...(isDate ? datePickerProps : [])
  ]
})
</script>
