<!--
 * @author: 杨攀腾
 * @date: 2022/4/11
 * @description: 左侧边栏
-->
<template>
  <a-collapse :defaultActiveKey="['1', '2', '3', '4']">
    <a-collapse-panel header="基础组件" key="1">
      <collapse-item
        @dragStart="handleStart"
        :list="basicComponents"
      ></collapse-item>
    </a-collapse-panel>
    <a-collapse-panel header="高级组件" key="2">
      <collapse-item></collapse-item>
    </a-collapse-panel>
    <a-collapse-panel header="布局组件" key="3">布局组件</a-collapse-panel>
    <a-collapse-panel header="自定义组件" key="4">自定义组件</a-collapse-panel>
  </a-collapse>
</template>

<script setup lang="ts">
import CollapseItem from '@/VFormDesign/components/CollapseItem.vue'
import { basicComponents } from '@/config/form-item-config'
import { cloneDeep } from 'lodash-es'
import type { BasicFormItem } from '@/class/render/basic-form'

const handleStart = (element: BasicFormItem, index: number) => {
  basicComponents[index] = cloneDeep(element)
  element.generateKey()
}
</script>

<style scoped></style>
