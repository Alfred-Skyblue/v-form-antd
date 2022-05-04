<!--
 * @author: ypt
 * @date: 2022/4/25
 * @description: 开关属性配置
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
  <VFormRules></VFormRules>
</template>

<script lang="ts" setup>
import VFormBuilder from '@design/components/VFormBuilder/index.vue'
import { reactive } from 'vue'
import CheckboxProps from '@design/components/VFProps/components/CheckboxProps/index.vue'

import { useFormDesign } from '@design/hooks/useFormDesign'
import VFormSize from '@design/components/VFProps/components/VFormSize/index.vue'
import VFormRules from '@design/components/VFProps/components/VFormRules/index.vue'

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
    label: 'loading',
    value: 'loading'
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
    label: '选中内容',
    field: 'checkedChildren',
    tag: 'AInput',
    placeholder: '请输入选中内容'
  },
  {
    label: '非选中内容',
    field: 'unCheckedChildren',
    tag: 'AInput',
    placeholder: '请输入非选中内容'
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
