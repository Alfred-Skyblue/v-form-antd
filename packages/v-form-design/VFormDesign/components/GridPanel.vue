<!--
 * @author: 杨攀腾
 * @date: 2022/4/21
 * @description: 栅格面板
-->
<template>
  <div
    class="grid-panel drag-move-box v-relative v-p-8 v-overflow-hidden v-transition-all"
  >
    <a-row v-bind="record.props">
      <a-col
        v-for="(item, index) of record.columns"
        :key="index"
        :span="item.span"
        class="layout-box"
      >
        <DraggablePanel v-model:list="item.list"></DraggablePanel>
      </a-col>
    </a-row>
    <form-node-action :record="record"></form-node-action>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import type { GridComponent } from '@common/layout/grid'
import FormNodeAction from './FormNodeAction.vue'
import DraggablePanel from './DraggablePanel.vue'

defineProps({
  record: {
    type: Object as PropType<GridComponent>,
    required: true
  }
})
</script>

<style lang="less" scoped>
.grid-panel {
  /deep/ .ant-row {
    min-height: 60px;
  }
}
</style>
