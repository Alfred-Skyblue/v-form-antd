<!--
 * @author: ypt
 * @date: 2022/4/11
 * @description: 布局组件
-->
<template>
  <div class="v-form-antd-layout v-h-full v-flex v-flex-col">
    <header class="v-form-antd-header xy-center v-bg-primary v-mb-5">
      <slot name="header"></slot>
    </header>
    <div class="v-form-antd-body v-flex v-gap-8 v-h-full v-overflow-hidden">
      <div class="v-form-cmp-list v-h-full v-w-270">
        <slot name="cmp-list"></slot>
      </div>
      <div class="v-form-main v-flex-auto">
        <slot></slot>
      </div>
      <div class="v-form-cfg v-w-270">
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
  .v-form-antd-header {
    min-height: 56px;
    color: var(--header-text-color);
    font-size: 20px;
  }
  .v-form-antd-body {
    & > div {
      box-shadow: 0 0 1px 1px var(--shadow-color);
    }
  }
}
</style>
