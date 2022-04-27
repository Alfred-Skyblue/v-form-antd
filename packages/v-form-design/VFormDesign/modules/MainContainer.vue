<!--
 * @author: ypt
 * @date: 2022/4/13
 * @description: 设计器面板
-->
<template>
  <div class="component-panel">
    <a-empty
      class="position-center empty-content v-text-gray-500"
      v-show="showEmpty"
      description="请从左侧拖入组件"
    />
    <a-form class="v-h-full" v-bind="formProps">
      <a-row class="wh-full v-overflow-y-auto v-overflow-x-hidden v-relative">
        <draggable-panel
          :root="true"
          v-model:list="formConfig.formItems"
        ></draggable-panel>
      </a-row>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import DraggablePanel from '../components/DraggablePanel.vue'
import { useFormDesign } from '@design/hooks/useFormDesign'

const { formConfig } = useFormDesign()
const formProps = computed(() => {
  return formConfig.value.config
})

/**
 * 表单项空状态
 * @type {ComputedRef<boolean>}
 */
const showEmpty = computed(() => {
  return formConfig.value.formItems.length === 0
})
</script>

<style lang="less" scoped>
.component-panel {
  height: calc(100% - var(--toolbar-height));
  position: relative;
}
</style>
