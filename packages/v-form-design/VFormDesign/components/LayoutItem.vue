<!--
 * @author: 杨攀腾
 * @date: 2022/4/15
 * @description: 表单项布局
-->
<template>
  <div>
    <div v-if="isGridComponent(gridRecord)">
      <a-row v-bind="gridRecord.props">
        <a-col v-for="(item, index) of gridRecord.columns" :key="index">
          <layout-item :record="item"></layout-item>
        </a-col>
      </a-row>
    </div>
    <form-node v-else :record="record"></form-node>
  </div>
</template>

<script setup lang="ts">
import FormNode from '@design/VFormDesign/components/FormNode.vue'
import type { BasicFormItem } from '@common/class/basic-form'
import type { PropType } from 'vue'
import { isGridComponent } from '@common/utils/type-guard'
import { GridComponent } from '@common/layout/grid'
const props = defineProps({
  record: {
    type: Object as PropType<BasicFormItem>,
    required: true
  }
})

// 避免在 template 中警告
const gridRecord = props.record as GridComponent
</script>

<style scoped></style>
