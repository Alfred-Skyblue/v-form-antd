<!--
 * @author: 杨攀腾
 * @date: 2022/4/13
 * @description: 设计器面板
-->
<template>
  <div class="component-panel">
    <a-empty class="position-center" v-show="isEmpty" />
    <a-form class="v-h-full" v-bind="formProps">
      <a-row class="wh-full v-overflow-auto v-relative">
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
          itemKey="key"
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

const { formConfig, handleSelectItem } =
  inject<IVFormDesignState>('formDesignState')!

const handleAdd = ({ newIndex }: any) => {
  const formItems = formConfig.value.formItems
  formItems[newIndex] = cloneDeep(formItems[newIndex])
  handleSelectItem(formItems[newIndex])
}

const isEmpty = computed(() => {
  return formConfig.value.formItems.length === 0
})

const formProps = computed(() => {
  return formConfig.value.config
})
</script>

<style lang="less" scoped>
.component-panel {
  height: calc(100% - var(--toolbar-height));
  position: relative;
  .draggable-item {
    min-height: 36px;
    border-width: 0 !important;
  }
  .flip-list-move {
    transition: transform 0.5s;
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
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(-100px);
  }

  .list-enter {
    height: 30px;
  }
}
</style>
