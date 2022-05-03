<!--
 * @Author: 杨攀腾
 * @Date: 2022-05-02 20:30:33
 * @Description: 吐槽一下命名太难了
-->
<template>
  <div
    class="form-item-box v-leading-normal"
    :class="{ 'v-form-item-fixed': isFixed }"
  >
    <a-form-item
      v-bind="{
        rules: record.rules,
        required: record.required,
        name: record.field
      }"
    >
      <template #label v-if="!record._isLayout">
        <div class="v-form-label-box">
          {{ record.label }}
        </div>
      </template>
      <component
        :is="record._tag"
        v-bind="record.props"
        v-on="record.on || {}"
      ></component>
    </a-form-item>
  </div>
</template>

<script lang="ts" setup>
import type { BasicFormItem } from '@common/class/basic-form'
import type { PropType } from 'vue'
import { computed, toRefs } from 'vue'
import type { VFormConfig } from '@common/types/form'

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

const { formConfig, isFixed } = toRefs(props)
// 计算表单项固定样式
const labelFlex = computed(() => {
  const { labelWidth, layout } = formConfig.value.config
  return isFixed.value && layout === 'horizontal' ? `0 0 ${labelWidth}px` : ''
})
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
