<!--
 * @author: ypt
 * @date: 2022/4/25
 * @description: 栅格属性配置
-->
<template>
  <div class="v-space-y-10">
    <div
      class="v-flex v-space-x-6 v-items-center"
      v-for="(col, index) of currentItem.columns"
      :key="index"
    >
      <a-input-number :max="24" :min="0" v-model:value="col.span" />
      <a
        class="remove v-rounded-full v-text-center hover:v-bg-red-300 v-transition-all v-bg-gray-200"
        @click="removeCol(col)"
      >
        <Icon type="delete"></Icon>
      </a>
    </div>
    <a class="v-mt-20 v-block" @click="handlePushCol">
      <Icon type="plus v-mr-5"></Icon>
      <span class="v-align-middle">添加栅格</span>
    </a>
  </div>
</template>

<script lang="ts" setup>
import { useFormDesign } from '@design/hooks/useFormDesign'
import type { GridComponent } from '@common/class/layout/grid'
import Icon from '@design/components/Icon/index.vue'
import { Col } from '@common/class/layout/col'
import { remove } from 'lodash-es'

const { currentItem } = useFormDesign<GridComponent>()

/**
 *  添加栅格
 */
const handlePushCol = () => {
  currentItem.value.columns.push(new Col())
}

/**
 *  删除栅格
 * @param {Col} col
 */
const removeCol = (col: Col) => {
  remove(currentItem.value.columns, item => item === col)
}
</script>

<style>
.remove {
  flex: 0 0 25px;
}
</style>
