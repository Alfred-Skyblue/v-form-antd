<!--
 * @author: ypt
 * @date: 2022/4/15
 * @description: 表单项布局
-->
<template>
  <div>
    <div v-if="record._isLayout">
      <GridPanel v-if="isGrid" :record="gridRecord"></GridPanel>
      <TabsPanel v-else-if="isTabs" :record="tabsRecord"></TabsPanel>
      <form-node v-else :record="record"></form-node>
    </div>
    <form-node v-else :record="record"></form-node>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import FormNode from './FormNode.vue'
import GridPanel from './GridPanel.vue'
import { isGridComponent, isTabsComponent } from '@common/utils/type-guard'
import type { BasicFormItem } from '@common/class/basic-form'
import type { PropType } from 'vue'
import type { GridComponent } from '@common/class/layout/grid'
import type { Tabs } from '@common/class/layout/tabs'
import TabsPanel from '@design/VFormDesign/components/TabsPanel.vue'
const props = defineProps({
  record: {
    type: Object as PropType<BasicFormItem>,
    required: true
  }
})

const isGrid = computed(() => isGridComponent(props.record))
const gridRecord = computed(() => props.record as unknown as GridComponent)
const isTabs = computed(() => isTabsComponent(props.record))
const tabsRecord = computed(() => props.record as unknown as Tabs)
</script>
