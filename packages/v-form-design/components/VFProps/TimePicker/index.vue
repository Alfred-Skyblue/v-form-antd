<!--
 * @author: ypt
 * @date: 2022/4/25
 * @description: 时间选择器属性配置
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
  <LinkItem></LinkItem>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import CheckboxProps from '@design/components/VFProps/components/CheckboxProps/index.vue'

import LinkItem from '@design/components/VFProps/components/LinkItem/index.vue'
import VFormBuilder from '@design/components/VFormBuilder/index.vue'
import type { IFormBuilderOptions } from '@design/components/VFormBuilder/index.vue'
import { useFormDesign } from '@design/hooks/useFormDesign'
import VFormSize from '@design/components/VFProps/components/VFormSize/index.vue'

const { currentItem } = useFormDesign()

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
    field: 'defaultValue',
    tag: 'ATimePicker',
    props: currentItem.value.props
  },
  {
    label: '值格式',
    field: 'valueFormat',
    tag: 'AInput',
    placeholder: '默认dayjs对象'
  },
  {
    label: '时间隔',
    field: 'hourStep',
    tag: 'AInputNumber',
    placeholder: '请输入时间隔'
  },
  {
    label: '分间隔',
    field: 'minuteStep',
    tag: 'AInputNumber',
    placeholder: '请输入分间隔'
  },
  {
    label: '秒间隔',
    field: 'secondStep',
    tag: 'AInputNumber',
    placeholder: '请输入秒间隔'
  }
])
const actionProps = computed(() => [
  {
    label: '禁用',
    value: 'disabled'
  },
  {
    label: '可清除',
    value: 'allowClear'
  },
  {
    label: '此刻',
    value: 'showNow'
  },
  {
    label: '12小时制',
    value: 'use12Hours'
  }
])
</script>
