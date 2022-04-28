<!--
 * @author: ypt
 * @date: 2022/4/25
 * @description: 评分属性配置
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
import VFormBuilder from '@design/components/VFormBuilder/index.vue'
import { reactive } from 'vue'
import CheckboxProps from '@design/components/VFProps/components/CheckboxProps/index.vue'
import LinkItem from '@design/components/VFProps/components/LinkItem/index.vue'
import { useFormDesign } from '@design/hooks/useFormDesign'
import VFormSize from '@design/components/VFProps/components/VFormSize/index.vue'

const { currentItem } = useFormDesign()
const actionProps = reactive([
  {
    label: '禁用',
    value: 'disabled'
  },
  {
    label: '双击清除',
    value: 'allowClear'
  },
  {
    label: '半选',
    value: 'allowHalf'
  }
])
const formItems = reactive([
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
    label: '总数',
    field: 'count',
    tag: 'AInputNumber',
    placeholder: '请输入总数'
  },
  {
    label: '自定义字符',
    field: 'character',
    tag: 'AInput',
    placeholder: '请输入自定义字符'
  }
])
</script>
