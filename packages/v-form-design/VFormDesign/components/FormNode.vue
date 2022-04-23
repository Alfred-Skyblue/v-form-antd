<!--
 * @author: 杨攀腾
 * @date: 2022/4/15
 * @description: 表单项组件
-->
<template>
  <div
    class="drag-move-box v-relative v-p-8 v-overflow-hidden v-transition-all"
    :class="{ active: record._key === formConfig.currentItem._key }"
    @click.stop="handleSelectItem(record)"
  >
    <v-form-item :record="record"></v-form-item>
    <form-node-action :record="record"></form-node-action>
  </div>
</template>

<script setup lang="ts">
import { PropType, inject } from 'vue'
import type { BasicFormItem } from '@common/class/basic-form'
import type { IVFormDesignState } from '@design/types/form-design'
import VFormItem from '@design/components/VFormItem/index.vue'
import FormNodeAction from '@design/VFormDesign/components/FormNodeAction.vue'
defineProps({
  record: {
    type: Object as PropType<BasicFormItem>,
    required: true
  }
})
// 注入状态
const formDesignState = inject<IVFormDesignState>('formDesignState')!
const { formConfig, handleSelectItem } = formDesignState
</script>
