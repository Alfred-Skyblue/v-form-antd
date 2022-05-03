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
  <VFormSize></VFormSize>
  <CheckboxProps :list="actionProps"></CheckboxProps>
  <VOptions v-model:options="currentItem.props.options"></VOptions>
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue'
import CheckboxProps from '@design/components/VFProps/components/CheckboxProps/index.vue'

import VOptions from '@design/components/VFProps/components/VOptions/index.vue'
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
    label: '选项类型',
    field: 'optionType',
    tag: 'ARadioGroup',
    props: {
      options: [
        { label: 'default', value: 'default' },
        { label: 'button', value: 'button' }
      ],
      optionType: 'button'
    }
  },
  {
    label: '风格',
    field: 'buttonStyle',
    tag: 'ARadioGroup',
    props: {
      options: [
        { label: 'outline', value: 'outline' },
        { label: 'solid', value: 'solid' }
      ],
      optionType: 'button'
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
