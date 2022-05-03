<!--
 * @author: ypt
 * @date: 2022/4/25
 * @description: 滑动输入条属性配置
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
import VFormBuilder from '@design/components/VFormBuilder/index.vue'
import { reactive } from 'vue'
import CheckboxProps from '@design/components/VFProps/components/CheckboxProps/index.vue'

import { useFormDesign } from '@design/hooks/useFormDesign'
import VFormSize from '@design/components/VFProps/components/VFormSize/index.vue'

const { currentItem } = useFormDesign()
const actionProps = reactive([
  {
    label: '禁用',
    value: 'disabled'
  },
  {
    label: '双向',
    value: 'range'
  },
  {
    label: '反向',
    value: 'reverse'
  },
  {
    label: '垂直',
    value: 'vertical'
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
    label: '最大值',
    field: 'max',
    tag: 'AInputNumber',
    placeholder: '请输入选中内容'
  },
  {
    label: '最小值',
    field: 'min',
    tag: 'AInputNumber',
    placeholder: '请输入非选中内容'
  },
  {
    label: '步长',
    field: 'step',
    tag: 'AInputNumber',
    placeholder: '请输入默认值'
  }
])
</script>
