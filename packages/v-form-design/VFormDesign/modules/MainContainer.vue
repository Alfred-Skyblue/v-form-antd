<!--
 * @author: ypt
 * @date: 2022/4/13
 * @description: 设计器面板
-->
<template>
  <div class="component-panel">
    <a-empty class="position-center empty-content" v-show="showEmpty" />
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
import { inject, computed } from 'vue'
import type { IVFormDesignState } from '@design/types/form-design'

import { computedAsync } from '@vueuse/core'
import DraggablePanel from '../components/DraggablePanel.vue'

const { formConfig } = inject<IVFormDesignState>('formDesignState')!

const formProps = computed(() => {
  return formConfig.value.config
})

/**
 * 异步计算属性，兼容动画
 * @type {Ref<boolean>}
 */
const showEmpty = computedAsync(async () => {
  return new Promise(resolve => {
    const isEmpty = formConfig.value.formItems.length === 0
    if (isEmpty) {
      const timer = setTimeout(() => {
        resolve(isEmpty)
        clearTimeout(timer)
      }, 650)
    } else {
      resolve(isEmpty)
    }
  })
}, true)
</script>

<style lang="less" scoped>
.component-panel {
  height: calc(100% - var(--toolbar-height));
  position: relative;
}
</style>
