<template>
  <div class="config-aside">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="表单属性">
        <a-form layout="vertical">
          <VFormConfig></VFormConfig>
        </a-form>
      </a-tab-pane>
      <a-tab-pane key="2" tab="控件属性">
        <div class="config-box v-h-full">
          <a-form layout="horizontal" :labelCol="{ span: 8 }">
            <component :is="formConfig.currentItem.propsCmp"></component>
          </a-form>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import type { IVFormDesignState } from '@design/types/form-design'
import type { DesignInput } from '@design/class/form/input'
import VFormConfig from '@design/components/VFProps/VFormConfig/index.vue'
const { formConfig } =
  inject<IVFormDesignState<DesignInput>>('formDesignState')!
console.log('-> formConfig', formConfig)

// console.log('-> currentItem')
const activeKey = ref('1')
</script>

<style lang="less" scoped>
.config-aside {
  :deep(.ant-form-item) {
    padding-bottom: 12px;
    margin-top: 5px;
    border-bottom: 1px solid #ccc;
    .ant-slider-rail {
      background-color: #e0d0d0;
    }
  }

  height: 100%;
  :deep(.ant-tabs) {
    height: 100%;
    .ant-tabs-content {
      padding: 16px;
      height: 100%;
      overflow: auto !important;
    }
    .ant-tabs-ink-bar {
      background: radial-gradient(
        circle,
        rgba(63, 94, 251, 1) 0%,
        rgba(252, 70, 107, 1) 100%
      );
    }
    .ant-tabs-nav {
      margin: 0;
      border-bottom: 1px solid #ccc;
      .ant-tabs-nav-list {
        width: 100%;
      }
      .ant-tabs-nav-wrap {
        @apply v-place-content-center;
      }
      .ant-tabs-tab {
        justify-content: center;
        flex: 1;
        padding: 10px 30px;
        margin: 0;
      }
      .ant-tabs-top {
        height: 100%;
        overflow: auto;
      }
    }
  }
}
</style>
