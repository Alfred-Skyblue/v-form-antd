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
    <form-node-action :record="record"></form-node-action>
  </div>
</template>

<script setup lang="ts">
import { PropType, inject } from 'vue'
import { BasicFormItem } from '@common/class/basic-form'
import type { IVFormDesignState } from '@design/types/form-design'
import VFormItem from '@design/components/VFormItem/index.vue'
import FormNodeAction from '@design/VFormDesign/components/FormNodeAction.vue'
defineProps({
  record: {
    type: Object as PropType<BasicFormItem>,
    required: true
  }
})
// 注入状态
const formDesignState = inject<IVFormDesignState>('formDesignState')!
const { formConfig, handleSelectItem } = formDesignState
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
    word-wrap: break-word;
    &::before {
      @apply v-absolute v-h-full v-w-full v-top-0 v-left-0;
      content: '';
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
    line-height: 30px;
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
