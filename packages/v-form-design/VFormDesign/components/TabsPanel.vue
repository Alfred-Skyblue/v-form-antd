<!--
 * @author: ypt
 * @date: 2022/4/30
 * @description: tabs布局组件
-->
<template>
  <div
    class="tabs-panel drag-move-box v-relative v-p-8 v-overflow-hidden v-transition-all"
    :class="{ active: record._key === currentItem._key }"
    @click.stop="handleSelectItem(record)"
  >
    <a-tabs v-bind="record.props">
      <a-tab-pane
        v-for="item of record.columns"
        :key="item.value"
        :tab="item.label"
        class="layout-box v-bg-white"
      >
        <DraggablePanel v-model:list="item.list"></DraggablePanel>
      </a-tab-pane>
    </a-tabs>
    <FormNodeAction :record="record"></FormNodeAction>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Tabs } from '@common/class/layout/tabs'
import { useFormDesign } from '@design/hooks/useFormDesign'
import DraggablePanel from '@design/VFormDesign/components/DraggablePanel.vue'
import FormNodeAction from '@design/VFormDesign/components/FormNodeAction.vue'

const props = defineProps({
  record: {
    type: Object as PropType<Tabs>,
    required: true
  }
})

const { currentItem, handleSelectItem } = useFormDesign<Tabs>()
</script>

<style lang="less" scoped>
.tabs-panel {
  :deep(.ant-tabs-tabpane) {
    min-height: 50px;
  }
  background: fade(#9867f7ff, 30%) !important;
  &::before {
    @apply !v-bg-layout;
  }
}
</style>
