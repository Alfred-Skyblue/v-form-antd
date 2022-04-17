<!--
 * @author: 杨攀腾
 * @date: 2022/4/11
 * @description: 布局组件
-->
<template>
  <div class="v-form-antd-layout">
    <header class="v-form-antd-header xy-center">
      <slot name="header"></slot>
    </header>
    <div class="v-form-antd-body">
      <div class="v-form-cmp-list">
        <slot name="cmp-list"></slot>
      </div>
      <div class="v-form-main">
        <slot></slot>
      </div>
      <div class="v-form-cfg">
        <slot name="config"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Layout'
})
</script>

<style lang="less" scoped>
.v-form-antd-layout {
  @apply v-h-full v-flex v-flex-col;
  .v-form-antd-header {
    @apply v-bg-primary v-mb-5;
    min-height: 56px;
    color: var(--header-text-color);
    font-size: 20px;
  }
  .v-form-antd-body {
    @apply v-flex v-gap-8 v-h-full;
    & > div {
      box-shadow: 0 0 1px 1px var(--shadow-color);
    }
  }
  .v-form-cmp-list {
    @apply v-h-full v-w-270;
  }
  .v-form-main {
    @apply v-flex-auto;
  }
  .v-form-cfg {
    @apply v-w-270;
  }
}
</style>
