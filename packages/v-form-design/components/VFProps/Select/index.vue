<!--
 * @author: ypt
 * @date: 2022/4/25
 * @description: 下拉选择属性配置
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
  <LinkItem></LinkItem>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import CheckboxProps from '@design/components/VFProps/components/CheckboxProps/index.vue'

import LinkItem from '@design/components/VFProps/components/LinkItem/index.vue'
import VOptions from '@design/components/VFProps/components/VOptions/index.vue'
import VFormBuilder from '@design/components/VFormBuilder/index.vue'
import type { IFormBuilderOptions } from '@design/components/VFormBuilder/index.vue'
import { useFormDesign } from '@design/hooks/useFormDesign'
import VFormSize from '@design/components/VFProps/components/VFormSize/index.vue'

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
    label: '占位符',
    field: 'placeholder',
    tag: 'AInput',
    placeholder: '请输入占位符'
  },
  {
    label: '模式',
    field: 'mode',
    tag: 'ARadioGroup',
    props: {
      options: [
        { label: 'multiple', value: 'multiple' },
        { label: 'tags', value: 'tags' },
        { label: 'combobox', value: 'combobox' }
      ]
    }
  },
  {
    label: '最多tag数',
    field: 'maxTagCount',
    tag: 'AInputNumber',
    hidden: computed(
      () => !['tags', 'multiple'].includes(currentItem.value.props.mode)
    )
  }
])

const actionProps = reactive([
  {
    label: '禁用',
    value: 'disabled'
  },
  {
    label: '可清除',
    value: 'allowClear'
  }
])
</script>
