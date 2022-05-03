<!--
 * @author: ypt
 * @date: 2022/4/25
 * @description: 数字输入框配置项
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
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import CheckboxProps from '@design/components/VFProps/components/CheckboxProps/index.vue'
import VFormSize from '@design/components/VFProps/components/VFormSize/index.vue'

import VFormBuilder from '@design/components/VFormBuilder/index.vue'
import type { IFormBuilderOptions } from '@design/components/VFormBuilder/index.vue'
import { useFormDesign } from '@design/hooks/useFormDesign'

const { currentItem } = useFormDesign()

const actionProps = reactive([
  {
    label: '禁用',
    value: 'disabled'
  },
  {
    label: '边框',
    value: 'bordered'
  },
  {
    label: '快捷键',
    value: 'keyboard'
  },
  {
    label: '显示按钮',
    value: 'controls'
  },
  {
    label: '自动聚焦',
    value: 'autofocus'
  }
])

const formItems = ref<IFormBuilderOptions[]>([
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
    tag: 'AInput',
    placeholder: '请输入默认值'
  },
  {
    label: '前置标签',
    field: 'addonBefore',
    tag: 'AInput',
    placeholder: '请输入前置标签'
  },
  {
    label: '后置标签',
    field: 'addonAfter',
    tag: 'AInput',
    placeholder: '请输入后置标签'
  },
  {
    label: '小数点',
    field: 'decimalSeparator',
    tag: 'AInput',
    placeholder: '请输入小数点'
  },
  {
    label: '最大值',
    field: 'max',
    tag: 'AInputNumber',
    placeholder: '请输入最大值'
  },
  {
    label: '最小值',
    field: 'min',
    tag: 'AInputNumber',
    placeholder: '请输入最小值'
  },
  {
    label: '数字精度',
    field: 'precision',
    tag: 'AInputNumber',
    placeholder: '请输入数字精度'
  },
  {
    label: '前缀',
    field: 'prefix',
    tag: 'AInput',
    placeholder: '请输入前缀'
  }
])
</script>
