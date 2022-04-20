<!--
 * @author: 杨攀腾
 * @date: 2022/4/13
 * @description: 设计器面板
-->
<template>
  <div class="component-panel">
    <a-empty class="position-center empty-content" v-show="showEmpty" />
    <a-form class="v-h-full" v-bind="formProps">
      <a-row class="wh-full v-overflow-y-auto v-overflow-x-hidden v-relative">
        <draggable
          tag="transition-group"
          :component-data="{
            tag: 'ul',
            type: 'transition-group',
            name: 'list',
            class: 'v-w-full list-main v-absolute v-px-5 v-py-10'
          }"
          group="form-draggable"
          ghostClass="moving"
          :animation="180"
          :list="formConfig.formItems"
          itemKey="_key"
          handle=".drag-move"
          @add="handleAdd"
        >
          <template #item="{ element }">
            <li
              class="draggable-item drag-move v-cursor-move"
              @dragstart="handleSelectItem(element)"
            >
              <layout-item :record="element"></layout-item>
            </li>
          </template>
        </draggable>
      </a-row>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import Draggable from 'vuedraggable'
import { cloneDeep } from 'lodash-es'
import type { IVFormDesignState } from '@design/types/form-design'
import LayoutItem from '@design/VFormDesign/components/LayoutItem.vue'
import { computedAsync } from '@vueuse/core'

const { formConfig, handleSelectItem } =
  inject<IVFormDesignState>('formDesignState')!

const handleAdd = ({ newIndex }: any) => {
  const formItems = formConfig.value.formItems
  formItems[newIndex] = cloneDeep(formItems[newIndex])
  handleSelectItem(formItems[newIndex])
}

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
  .draggable-item {
    min-height: 36px;
    border-width: 0 !important;
  }
  .no-move {
    transition: transform 0s;
  }
  .moving {
    opacity: 0.5 !important;
    background: #c8ebfb;
  }
  .list-main {
    min-height: 100%;
  }
  // 列表动画
  .list-enter-active,
  .list-leave-active {
    animation-name: swoopInLeft;
    animation-duration: 0.5s;
  }

  .list-enter-from,
  .list-leave-to {
    animation-name: swoopOutRight;
    animation-duration: 0.5s;
  }

  .list-enter {
    height: 30px;
  }
}
</style>
