<!--
 * @Author: 杨攀腾
 * @Date: 2022-05-02 20:30:42
 * @Description: 渲染表单项
-->
<template>
  <div v-if="record._isLayout">
    <RenderGrid
      v-if="getComponentType('grid')"
      :record="gridRecord"
      :form-config="formConfig"
    ></RenderGrid>
    <RenderTabs
      v-else-if="getComponentType('tabs')"
      :record="tabsRecord"
      :form-config="formConfig"
    ></RenderTabs>
  </div>
  <GFormItem v-else :form-config="formConfig" :record="record"></GFormItem>
</template>

<script lang="ts" setup>
import type { BasicFormItem } from '@common/class/basic-form'
import type { PropType } from 'vue'
import { computed, toRefs } from 'vue'
import type { GridComponent } from '@common/class/layout/grid'
import RenderGrid from './RenderGrid.vue'
import GFormItem from './GFormItem.vue'
import type { VFormConfig } from '@common/types/form'
import RenderTabs from '@render/VFormRender/components/RenderTabs.vue'
import type { Tabs } from '@common/class/layout/tabs'

const props = defineProps({
  record: {
    type: Object as PropType<Partial<BasicFormItem>>,
    required: true
  },
  formConfig: {
    type: Object as PropType<VFormConfig>,
    required: true
  },
  isFixed: {
    type: Boolean,
    default: true
  }
})

const gridRecord = computed(() => props.record as GridComponent)

const tabsRecord = computed(() => props.record as Tabs)

const { formConfig, isFixed } = toRefs(props)
// 计算表单项固定样式
const labelFlex = computed(() => {
  const { labelWidth, layout } = formConfig.value.config
  return isFixed.value && layout === 'horizontal' ? `0 0 ${labelWidth}px` : ''
})

const getComponentType = (type: string) => {
  return props.record.type === type
}
</script>

<style lang="less" scoped>
.form-item-box {
  :deep(.ant-form-item) {
    margin-bottom: 0;
    padding: 6px;
  }
}
.v-form-item-fixed {
  :deep(.ant-form-item) {
    margin-bottom: 0;
    padding: 6px;
    .ant-form-item-label {
      flex: v-bind(labelFlex);
    }
    .ant-form-item-control {
      width: 100% !important;
    }
  }
}
</style>
