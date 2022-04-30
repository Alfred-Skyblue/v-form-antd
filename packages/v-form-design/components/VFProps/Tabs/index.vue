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
  <VOptions v-model:options="currentItem.columns"></VOptions>
  <VFormSize></VFormSize>
  <CheckboxProps :list="actionProps"></CheckboxProps>
</template>

<script lang="ts" setup>
import VFormBuilder from '@design/components/VFormBuilder/index.vue'
import { reactive } from 'vue'
import CheckboxProps from '@design/components/VFProps/components/CheckboxProps/index.vue'
import { useFormDesign } from '@design/hooks/useFormDesign'
import VFormSize from '@design/components/VFProps/components/VFormSize/index.vue'
import VOptions from '@design/components/VFProps/components/VOptions/index.vue'
import type { Tabs } from '@common/class/layout/tabs'

const { currentItem } = useFormDesign<Tabs>()
const actionProps = reactive([
  {
    label: '动画',
    value: 'animated'
  },
  {
    label: '标签居中',
    value: 'centered'
  }
])
const formItems = reactive([
  {
    label: '间隔',
    field: 'tabBarGutter',
    tag: 'AInputNumber',
    placeholder: '请输入标签间隔'
  },
  {
    label: '位置',
    field: 'tabPosition',
    tag: 'ARadioGroup',
    props: {
      options: [
        {
          label: 'top',
          value: 'top'
        },
        {
          label: 'bottom',
          value: 'bottom'
        },
        {
          label: 'left',
          value: 'left'
        },
        {
          label: 'right',
          value: 'right'
        }
      ]
    }
  },
  {
    label: '类型',
    field: 'type',
    tag: 'ARadioGroup',
    props: {
      options: [
        {
          label: 'line',
          value: 'line'
        },
        {
          label: 'card',
          value: 'card'
        }
      ],
      optionType: 'button'
    }
  }
])
</script>
