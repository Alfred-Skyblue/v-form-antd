<template>
  <div class="config-aside">
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="表单属性">
        <a-form layout="vertical">
          <VFormConfig></VFormConfig>
        </a-form>
      </a-tab-pane>
      <a-tab-pane key="2" tab="控件属性">
        <div
          class="config-box v-h-full"
          v-if="currentItem && currentItem.propsCmp"
        >
          <a-form layout="horizontal" :labelCol="{ span: 8 }">
            <component :is="currentItem.propsCmp"></component>
          </a-form>
        </div>
        <a-empty
          v-else
          class="empty-text v-text-gray-500 !v-mt-200"
          description="未选中控件"
        />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

import VFormConfig from '@design/components/VFProps/VFormConfig/index.vue'
import { useFormDesign } from '@design/hooks/useFormDesign'
import type { BasicFormItem } from '@common/class/basic-form'
const { currentItem } = useFormDesign<BasicFormItem & { propsCmp: string }>()
const activeKey = ref('1')
watch(currentItem, newValue => {
  activeKey.value = newValue?._key ? '2' : '1'
})
</script>

<style lang="less" scoped>
.config-aside {
  :deep(.ant-form-item) {
    padding-bottom: 12px;
    margin: 5px 0 12px 0;
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
