<!--
 * @author: ypt
 * @date: 2022/4/21
 * @description: 渲染栅格组件
-->
<template>
  <a-row v-bind="record.props">
    <a-col
      v-for="(item, index) of record.columns"
      :key="index"
      :span="item.span"
      class="layout-box v-bg-white"
    >
      <div v-for="formItem of item.list" :key="formItem._key">
        <GFormItem
          :record="formItem"
          :form-config="formConfig"
          :isFixed="isFixed"
        ></GFormItem>
      </div>
    </a-col>
  </a-row>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { GridComponent } from '@common/class/layout/grid'
import type { IFormConfig } from '@render/VFormRender/index.vue'
import GFormItem from '@render/VFormRender/components/GFormItem.vue'

defineProps({
  record: {
    type: Object as PropType<GridComponent>,
    required: true
  },
  formConfig: {
    type: Object as PropType<IFormConfig>,
    required: true
  },
  isFixed: {
    type: Boolean,
    default: true
  }
})
</script>
