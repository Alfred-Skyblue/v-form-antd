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
    <template #field>
      <a-input v-model:value="currentItem.field" />
    </template>
  </VFormBuilder>
  <VFormSize></VFormSize>
  <CheckboxProps :list="actionProps"></CheckboxProps>
  <VOptions v-model:options="currentItem.props.options"></VOptions>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import CheckboxProps from '@design/components/VFProps/components/CheckboxProps/index.vue'
import VFormSize from '@design/components/VFProps/components/VFormSize/index.vue'

import VOptions from '@design/components/VFProps/components/VOptions/index.vue'
import VFormBuilder from '@design/components/VFormBuilder/index.vue'
import type { IFormBuilderOptions } from '@design/components/VFormBuilder/index.vue'
import { useFormDesign } from '@design/hooks/useFormDesign'
import type { IAnyObject } from '@common/types'

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
    label: '默认值',
    field: 'defaultValue',
    tag: 'ACascader',
    placeholder: '请输入默认值',
    props: {
      options: currentItem.value.props.options,
      multiple: false,
      placement: 'bottomLeft'
    }
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
    value: 'multiple',
    on: {
      change(value: IAnyObject) {
        const defaultItem = formItems.value.find(
          item => item.field === 'defaultValue'
        )!
        defaultItem.props!.multiple = value.target.checked
      }
    }
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
</script>
