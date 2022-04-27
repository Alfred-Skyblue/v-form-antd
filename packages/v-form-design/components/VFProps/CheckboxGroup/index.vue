<!--
 * @author: ypt
 * @date: 2022/4/25
 * @description: 复选框组
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
  <CheckboxProps :list="actionProps"></CheckboxProps>
  <VOptions v-model:options="currentItem.props.options"></VOptions>
  <LinkItem></LinkItem>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import CheckboxProps from '@design/components/VFProps/components/CheckboxProps/index.vue'

import LinkItem from '@design/components/VFProps/components/LinkItem/index.vue'
import VOptions from '@design/components/VFProps/components/VOptions/index.vue'
import VFormBuilder from '@design/components/VFormBuilder/index.vue'
import type { IFormBuilderOptions } from '@design/components/VFormBuilder/index.vue'
import { useFormDesign } from '@design/hooks/useFormDesign'

const { currentItem } = useFormDesign()

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
    label: '默认值',
    field: 'defaultValue',
    tag: 'ACheckboxGroup',
    props: {
      options: currentItem.value.props.options
    }
  }
])
const actionProps = reactive([
  {
    label: '禁用',
    value: 'disabled'
  }
])
</script>
