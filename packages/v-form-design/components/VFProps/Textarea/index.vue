<!--
 * @author: ypt
 * @date: 2022/4/25
 * @description: 文本域属性配置
-->
<template>
  <VFormBuilder :form-data="currentItem.props" :form-items="formItems">
    <template #label>
      <a-input v-model:value="currentItem.label" />
    </template>
  </VFormBuilder>
  <CheckboxProps :list="actionProps"></CheckboxProps>
  <LinkItem></LinkItem>
</template>

<script lang="ts" setup>
import VFormBuilder from '@design/components/VFormBuilder/index.vue'
import { reactive } from 'vue'
import CheckboxProps from '@design/components/VFProps/components/CheckboxProps/index.vue'
import LinkItem from '@design/components/VFProps/components/LinkItem/index.vue'
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
  },
  {
    label: '自适应高度',
    value: 'autosize'
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
    label: '最大长度',
    field: 'maxlength',
    tag: 'AInput',
    placeholder: '请输入最大长度'
  }
])
</script>
