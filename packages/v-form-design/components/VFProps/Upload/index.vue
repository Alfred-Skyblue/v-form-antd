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
  <LinkItem></LinkItem>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import CheckboxProps from '@design/components/VFProps/components/CheckboxProps/index.vue'

import LinkItem from '@design/components/VFProps/components/LinkItem/index.vue'
import VOptions from '@design/components/VFProps/components/VOptions/index.vue'
import VFormBuilder from '@design/components/VFormBuilder/index.vue'
import type { IFormBuilderOptions } from '@design/components/VFormBuilder/index.vue'
import { useFormDesign } from '@design/hooks/useFormDesign'
import VFormSize from '@design/components/VFProps/components/VFormSize/index.vue'
import type { IAnyObject } from '@common/types'

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
    label: '上传文本',
    field: 'text',
    tag: 'AInput',
    placeholder: '请输入上传文本'
  },
  {
    label: '默认值',
    field: 'defaultValue',
    tag: 'ATreeSelect',
    props: {
      ...currentItem.value.props,
      placeholder: '请选择默认值'
    }
  },
  {
    label: '最多tag数',
    field: 'maxTagCount',
    tag: 'AInputNumber',
    placeholder: '请输入最多tag数',
    hidden: !currentItem.value.props.multiple
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
    label: '多选',
    value: 'multiple',
    on: {
      change(e: IAnyObject) {
        if (e.target.checked) {
          currentItem.value.props.showSearch = undefined
          currentItem.value.props.maxTagCount = undefined
        }
      }
    }
  },
  {
    label: '搜索',
    value: 'showSearch',
    hidden: currentItem.value.props.multiple
  },
  {
    label: '复选框',
    value: 'treeCheckable'
  },
  {
    label: '参考线',
    value: 'treeLine'
  }
])
</script>
