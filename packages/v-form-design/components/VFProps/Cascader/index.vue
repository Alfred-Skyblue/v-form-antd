<!--
 * @author: ypt
 * @date: 2022/4/25
 * @description: 级联选择属性
-->

<template>
  <VFormBuilder :form-data="currentItem.props" :form-items="formItems">
    <template #label>
      <a-input v-model:value="currentItem.label" />
    </template>
  </VFormBuilder>
  <VFormSize></VFormSize>
  <CheckboxProps :list="actionProps"></CheckboxProps>
  <VOptions v-model:options="currentItem.props.options"></VOptions>
  <LinkItem></LinkItem>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import CheckboxProps from '@design/components/VFProps/components/CheckboxProps/index.vue'
import VFormSize from '@design/components/VFProps/components/VFormSize/index.vue'
import LinkItem from '@design/components/VFProps/components/LinkItem/index.vue'
import VOptions from '@design/components/VFProps/components/VOptions/index.vue'
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
    label: '快捷键',
    value: 'keyboard'
  },
  {
    label: '多选',
    value: 'multiple'
  },
  {
    label: '自动聚焦',
    value: 'autofocus'
  },
  {
    label: '搜索',
    value: 'showSearch'
  }
])

const formItems = reactive<IFormBuilderOptions[]>([
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
    label: '默认值',
    field: 'defaultValue',
    tag: 'AInput',
    placeholder: '请输入默认值'
  },
  {
    label: '展开方式',
    field: 'expandTrigger',
    tag: 'ARadioGroup',
    placeholder: '请输入前置标签',
    props: {
      optionType: 'button',
      options: [
        { label: 'click', value: 'click' },
        { label: 'hover', value: 'hover' }
      ]
    }
  },
  {
    label: '最多tag数',
    field: 'maxTagCount',
    tag: 'AInputNumber',
    placeholder: '请输入最多tag数'
  }
])
</script>
