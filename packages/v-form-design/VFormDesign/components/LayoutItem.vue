<!--
 * @author: ypt
 * @date: 2022/4/15
 * @description: 表单项布局
-->
<template>
  <div>
    <GridPanel v-if="isGrid" :record="gridRecord"></GridPanel>
    <form-node v-else :record="record"></form-node>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import FormNode from './FormNode.vue'
import GridPanel from './GridPanel.vue'
import { isGridComponent } from '@common/utils/type-guard'
import type { BasicFormItem } from '@common/class/basic-form'
import type { PropType } from 'vue'
import type { GridComponent } from '@common/class/layout/grid'
const props = defineProps({
  record: {
    type: Object as PropType<BasicFormItem>,
    required: true
  }
})

const isGrid = computed(() => isGridComponent(props.record))
const gridRecord = computed(() => props.record as unknown as GridComponent)
</script>
