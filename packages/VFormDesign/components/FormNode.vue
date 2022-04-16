<!--
 * @author: 杨攀腾
 * @date: 2022/4/15
 * @description: 表单项组件
-->
<template>
  <div
    class="drag-move-box v-relative v-p-8 v-overflow-hidden v-transition-all"
    :class="{ active: record.key === formConfig.currentItem.key }"
    @click="handleSelectItem(record)"
  >
    <v-form-item :record="record"></v-form-item>
  </div>
</template>

<script setup lang="ts">
import { PropType, inject } from 'vue'
import type { BasicFormItem } from '@/class/render/basic-form'
import type { IVFormDesignState } from '@/types/form-design'
import VFormItem from '@/components/VFormItem/index.vue'
defineProps({
  record: {
    type: Object as PropType<BasicFormItem>,
    required: true
  }
})
// 注入状态
const formDesignState = inject<IVFormDesignState>('formDesignState')!
const { formConfig, handleSelectItem } = formDesignState
console.log('-> handleSelectItem', handleSelectItem)
</script>

<style lang="less" scoped>
.drag-move-box {
  min-height: 36px;
  &:hover {
    background-color: var(--hover-primary-color);
  }
  // 选择时 start
  &::before {
    @apply v-bg-primary v-absolute v-top-0 v-transition-all v-w-full v-h-5;
    content: '';
    right: -100%;
  }

  &.active {
    &::before {
      right: 0;
    }
    background: var(--hover-primary-color);
    outline-offset: 0;
  }
  // 选择时 end
  .form-item-box {
    position: relative;
    box-sizing: border-box;
    word-wrap: break-word;
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 888;
    }

    .ant-form-item {
      margin: 0;
      padding-bottom: 6px;
    }
  }

  .show-key-box {
    // 显示key
    @apply v-absolute v-bottom-2 v-right-2;
    font-size: 14px;
    z-index: 999;
    color: var(--text-key-color);
  }
  .copy,
  .delete {
    @apply v-absolute v-top-0 v-w-30 v-h-30 v-text-center;
    position: absolute;
    top: 0;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    z-index: 989;
    transition: all 0.3s;

    &.unactivated {
      opacity: 0 !important;
      pointer-events: none;
    }

    &.active {
      opacity: 1 !important;
    }
  }
  .copy {
    @apply v-bg-primary;
    border-radius: 0 0 0 8px;
    right: 30px;
  }

  .delete {
    @apply v-bg-primary;
    right: 0;
  }
}
</style>
