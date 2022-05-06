<template>
  <div class="config-aside">
    <a-tabs>
      <a-tab-pane key="1" tab="表单属性">
        <a-form layout="vertical">
          <VFormConfig></VFormConfig>
        </a-form>
      </a-tab-pane>
      <a-tab-pane key="2" tab="控件属性">
        <a-form layout="horizontal" :labelCol="{ span: 8 }">
          <div v-if="currentItem.type" class="config-box v-h-full">
            <slot
              :name="`${currentItem.type}Attrs`"
              v-bind="{ formItem: currentItem }"
            >
              <component
                :is="propsComponent"
                v-bind="{ formItem: currentItem }"
              ></component>
            </slot>
          </div>
          <a-empty
            v-else
            class="empty-text v-text-gray-500 !v-mt-200"
            description="未选中控件"
          />
        </a-form>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import VFormConfig from '@design/components/VFProps/VFormConfig/index.vue'
import { useFormDesign } from '@design/hooks/useFormDesign'
import type { BasicFormItem } from '@common/class/basic-form'
import { designPropsMap } from '@design/class/form'
import { computed } from 'vue'
import type { Component } from '@common/types'
import { designLayoutPropsMap } from '@design/class/layout'
import { designHighLevelPropsMap } from '@design/class/high-level'
import { isCustomComponent } from '@common/utils/type-guard'
import { msg } from '@common/utils/log'

const { currentItem } = useFormDesign<BasicFormItem>()

const propsComponent = computed<Component>(() => {
  const { type } = currentItem.value

  const propsMap = {
    ...designPropsMap,
    ...designLayoutPropsMap,
    ...designHighLevelPropsMap
  }
  let component: string | Component =
    propsMap[type as keyof typeof propsMap] || 'div'

  if (isCustomComponent(currentItem.value)) {
    component = currentItem.value.attrsConfig
  }
  if (!component) {
    msg('未找到对应配置项组件')
  }
  if (typeof component !== 'string') {
    component.inheritAttrs = false
  }
  return component
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
