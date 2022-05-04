<!--
 * @author: ypt
 * @date: 2022/4/25
 * @description: 附件上传属性
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
  <VOptions v-model:options="currentItem.props.treeData"></VOptions>
  <VFormRules></VFormRules>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import CheckboxProps from '@design/components/VFProps/components/CheckboxProps/index.vue'

import VOptions from '@design/components/VFProps/components/VOptions/index.vue'
import VFormBuilder from '@design/components/VFormBuilder/index.vue'
import type { IFormBuilderOptions } from '@design/components/VFormBuilder/index.vue'
import { useFormDesign } from '@design/hooks/useFormDesign'
import VFormSize from '@design/components/VFProps/components/VFormSize/index.vue'
import VFormRules from '@design/components/VFProps/components/VFormRules/index.vue'

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
    field: 'text',
    tag: 'AInput',
    placeholder: '请输入占位符'
  },
  {
    label: '上传地址',
    field: 'action',
    tag: 'AInput',
    placeholder: '请输入上传地址'
  },
  {
    label: '上传数量',
    field: 'maxCount',
    tag: 'AInputNumber',
    placeholder: '请输入上传数量'
  },
  {
    label: '参数名',
    field: 'name',
    tag: 'AInput',
    placeholder: '请输入参数名(name)'
  },
  {
    label: '样式',
    field: 'listType',
    tag: 'ARadioGroup',
    props: {
      options: [
        { label: 'text', value: 'text' },
        { label: 'picture', value: 'picture' },
        { label: 'card', value: 'picture-card' }
      ],
      optionType: 'button',
      size: 'small'
    }
  }
])

const actionProps = computed(() => [
  {
    label: '禁用',
    value: 'disabled'
  },
  {
    label: '文件夹',
    value: 'directory'
  },
  {
    label: '多选',
    value: 'multiple'
  },
  {
    label: '携带cookie',
    value: 'withCredentials'
  }
])
</script>
