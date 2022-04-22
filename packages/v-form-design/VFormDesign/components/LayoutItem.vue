<!--
 * @author: 杨攀腾
 * @date: 2022/4/15
 * @description: 表单项布局
-->
<template>
  <div>
    <GridPanel v-if="isGrid" :record="gridRecord"></GridPanel>
    <form-node v-else :record="record"></form-node>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import FormNode from './FormNode.vue'
import GridPanel from './GridPanel.vue'
import { isGridComponent } from '@common/utils/type-guard'
import type { BasicFormItem } from '@common/class/basic-form'
import type { PropType } from 'vue'
import type { GridComponent } from '@common/layout/grid'
export default defineComponent({
  components: {
    GridPanel,
    FormNode
  },
  props: {
    record: {
      type: Object as PropType<BasicFormItem>,
      required: true
    }
  },
  setup(props) {
    const isGrid = computed(() => isGridComponent(props.record))
    const gridRecord = computed(() => props.record as unknown as GridComponent)

    return { isGrid, gridRecord }
  }
})
</script>

<style lang="less" scoped>
.grid-panel {
  background-color: red;
  min-height: 60px;
}
</style>
