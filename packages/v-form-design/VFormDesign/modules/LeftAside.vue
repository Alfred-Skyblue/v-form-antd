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
    <!--    <a-collapse-panel header="高级组件" key="2">-->
    <!--      <collapse-item></collapse-item>-->
    <!--    </a-collapse-panel>-->
    <a-collapse-panel header="布局组件" key="3">
      <collapse-item
        @dragStart="handleStart"
        :list="layoutComponents"
      ></collapse-item>
    </a-collapse-panel>
    <a-collapse-panel header="自定义组件" key="4">自定义组件</a-collapse-panel>
  </a-collapse>
</template>

<script setup lang="ts">
import CollapseItem from '@design/VFormDesign/components/CollapseItem.vue'
import {
  basicComponents,
  layoutComponents
} from '@design/config/form-item-config'
import { cloneDeep } from 'lodash-es'
import type { BasicFormItem } from '@common/class/basic-form'

const handleStart = (element: BasicFormItem) => {
  console.log('-> element oldKey', element._key)
  element = cloneDeep(element)
  element.generateKey()
  console.log('-> element newKey', element._key)
}
</script>

<style scoped></style>
