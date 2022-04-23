<!--
 * @author: 杨攀腾
 * @date: 2022/4/16
 * @description: 表单项组件
-->
<template>
  <div class="form-item-box v-leading-normal">
    <a-form-item :label="record.label">
      <component :is="record._tag" v-bind="record.props"></component>
    </a-form-item>
  </div>
</template>

<script lang="ts">
import type { BasicFormItem } from '@common/class/basic-form'
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VFormItem',
  props: {
    record: {
      type: Object as PropType<BasicFormItem>,
      required: true
    }
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
</style>
