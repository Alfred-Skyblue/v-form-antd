<!--
 * @author: 杨攀腾
 * @date: 2022/4/21
 * @description: 栅格面板
-->
<template>
  <div
    class="grid-panel drag-move-box v-relative v-p-8 v-overflow-hidden v-transition-all"
    :class="{ active: record._key === formConfig.currentItem._key }"
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
import type { GridComponent } from '@common/layout/grid'
import FormNodeAction from './FormNodeAction.vue'
import DraggablePanel from './DraggablePanel.vue'
import { inject } from 'vue'
import type { IVFormDesignState } from '@design/types/form-design'
const { handleSelectItem, formConfig } =
  inject<IVFormDesignState>('formDesignState')!
defineProps({
  record: {
    type: Object as PropType<GridComponent>,
    required: true
  }
})
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
