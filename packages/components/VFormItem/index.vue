<!--
 * @author: 杨攀腾
 * @date: 2022/4/16
 * @description: 表单项组件
-->
<template>
  <div class="form-item-box v-leading-normal">
    <a-form-item :label="record.label">
      <component :is="record.tag"></component>
    </a-form-item>
  </div>
</template>

<script setup lang="ts">
import type { BasicFormItem } from '@/class/basic-form'
import type { PropType } from 'vue'

defineProps({
  record: {
    type: Object as PropType<BasicFormItem>
  }
})
</script>

<style lang="less" scoped>
.form-item-box {
  /deep/ .ant-form-item {
    margin-bottom: 0;
    padding: 6px;
  }
}
</style>
