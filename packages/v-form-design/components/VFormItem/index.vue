<!--
 * @author: 杨攀腾
 * @date: 2022/4/16
 * @description: 表单项组件
-->
<template>
  <div
    class="form-item-box v-leading-normal"
    :class="{ 'v-form-item-fixed': isFixed }"
  >
    <a-form-item>
      <template #label>
        <div class="v-form-label-box">
          {{ record.label }}
        </div>
      </template>
      <component :is="record._tag" v-bind="record.props"></component>
    </a-form-item>
  </div>
</template>

<script lang="ts">
import type { BasicFormItem } from '@common/class/basic-form'
import type { PropType } from 'vue'
import { computed, defineComponent, inject } from 'vue'
import type { IVFormDesignState } from '@design/types/form-design'

export default defineComponent({
  name: 'VFormItem',
  props: {
    record: {
      type: Object as PropType<BasicFormItem>,
      required: true
    }
  },
  setup() {
    const { formConfig, isFixed } =
      inject<IVFormDesignState>('formDesignState')!
    // 计算表单项固定样式
    const labelFlex = computed(() => {
      const { labelWidth, layout } = formConfig.value.config
      return isFixed.value && layout === 'horizontal'
        ? `0 0 ${labelWidth}px`
        : ''
    })
    const wrapperFlex = computed(() => {
      return labelFlex.value ? 'auto' : '1 1 auto'
    })
    return { labelFlex, wrapperFlex, isFixed }
  }
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
