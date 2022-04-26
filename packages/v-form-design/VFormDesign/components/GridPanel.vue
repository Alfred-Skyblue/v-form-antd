<!--
 * @author: ypt
 * @date: 2022/4/21
 * @description: 栅格面板
-->
<template>
  <div
    class="grid-panel drag-move-box v-relative v-p-8 v-overflow-hidden v-transition-all"
    :class="{ active: record._key === currentItem._key }"
    @click.stop="handleSelectItem(record)"
  >
    <a-row v-bind="record.props">
      <a-col
        v-for="(item, index) of record.columns"
        :key="index"
        :span="item.span"
        class="layout-box v-bg-white"
      >
        <DraggablePanel v-model:list="item.list"></DraggablePanel>
      </a-col>
    </a-row>
    <form-node-action :record="record"></form-node-action>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { GridComponent } from '@common/class/layout/grid'
import FormNodeAction from './FormNodeAction.vue'
import DraggablePanel from './DraggablePanel.vue'
import { useFormDesign } from '@design/hooks/useFormDesign'

defineProps({
  record: {
    type: Object as PropType<GridComponent>,
    required: true
  }
})

const { currentItem, handleSelectItem } = useFormDesign()
</script>

<style lang="less" scoped>
.grid-panel {
  background: fade(#9867f7ff, 30%) !important;
  :deep(.ant-row) {
    min-height: 60px;
  }
  &::before {
    @apply !v-bg-layout;
  }
}
</style>
