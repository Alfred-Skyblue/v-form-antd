<!--
 * @Author: 杨攀腾
 * @Date: 2022-05-03 13:26:38
 * @Description: 渲染tabs
-->
<template>
  <a-tabs v-bind="record.props">
    <a-tab-pane
      v-for="item of record.columns"
      :key="item.value"
      :tab="item.label"
    >
      <div v-for="formItem of item.list" :key="formItem._key">
        <RenderFormItem
          :record="formItem"
          :form-config="formConfig"
          :isFixed="isFixed"
        ></RenderFormItem>
      </div>
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { Tabs } from '@common/class/layout/tabs'
import type { VFormConfig } from '@common/types/form'
import RenderFormItem from '@render/VFormRender/components/RenderFormItem.vue'

defineProps({
  record: {
    type: Object as PropType<Tabs>,
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
</script>

<style lang="less" scoped></style>
