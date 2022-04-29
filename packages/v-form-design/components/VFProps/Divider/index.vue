<!--
 * @author: ypt
 * @date: 2022/4/25
 * @description: 开关属性配置
-->
<template>
  <VFormBuilder
    :form-data="currentItem.props"
    :form-items="formItems"
  ></VFormBuilder>
  <CheckboxProps :list="actionProps"></CheckboxProps>
</template>

<script lang="ts" setup>
import VFormBuilder from '@design/components/VFormBuilder/index.vue'
import { computed } from 'vue'
import CheckboxProps from '@design/components/VFProps/components/CheckboxProps/index.vue'
import { useFormDesign } from '@design/hooks/useFormDesign'

const { currentItem } = useFormDesign()
console.log('-> currentItem', currentItem)
const actionProps = computed(() => [
  {
    label: '虚线',
    value: 'dashed'
  },
  {
    label: '正文样式',
    value: 'plain'
  }
])
const formItems = computed(() => [
  {
    label: '标题',
    field: 'title',
    tag: 'AInput',
    placeholder: '请输入标题'
  },
  {
    label: '标题位置',
    field: 'orientation',
    tag: 'ARadioGroup',
    props: {
      options: [
        {
          label: '左',
          value: 'left'
        },
        {
          label: '居中',
          value: 'center'
        },
        {
          label: '右',
          value: 'right'
        }
      ],
      optionType: 'button'
    }
  },
  {
    label: '标题距离',
    field: 'orientationMargin',
    tag: 'AInputNumber',
    placeholder: '请输入标题距离',
    hidden: [undefined, 'center'].includes(currentItem.value.props?.orientation)
  }
])
</script>
