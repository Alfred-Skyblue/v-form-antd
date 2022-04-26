<!--
 * @author: ypt
 * @date: 2022/4/23
 * @description: 输入框属性
-->
<template>
  <VFormBuilder :form-data="currentItem.props" :form-items="formItems">
    <template #label>
      <a-input v-model:value="currentItem.label" />
    </template>
  </VFormBuilder>
  <VFormSize></VFormSize>
  <CheckboxProps :list="actionProps"></CheckboxProps>
  <LinkItem></LinkItem>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

import CheckboxProps from '@design/components/VFProps/components/CheckboxProps/index.vue'
import VFormSize from '@design/components/VFProps/components/VFormSize/index.vue'
import LinkItem from '@design/components/VFProps/components/LinkItem/index.vue'
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
    label: '可清除',
    value: 'allowClear'
  },
  {
    label: '边框',
    value: 'bordered'
  },
  {
    label: '字符数',
    value: 'showCount'
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
    label: '占位符',
    field: 'placeholder',
    tag: 'AInput',
    placeholder: '请输入占位符'
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
    label: '前缀',
    field: 'prefix',
    tag: 'AInput',
    placeholder: '请输入前缀'
  },
  {
    label: '后缀',
    field: 'suffix',
    tag: 'AInput',
    placeholder: '请输入后缀'
  },
  {
    label: '最大长度',
    field: 'maxlength',
    tag: 'AInput',
    placeholder: '请输入最大长度'
  }
])
</script>
