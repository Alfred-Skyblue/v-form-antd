<!--
 * @author: ypt
 * @date: 2022/4/15
 * @description: 表单节点组件
-->
<template>
  <div
    class="drag-move-box v-relative v-p-8 v-overflow-hidden v-transition-all"
    :class="[
      { active: record._key === currentItem._key },
      { '!v-bg-red-200 v-opacity-50': record.hidden }
    ]"
    @click.stop="handleSelectItem(record)"
  >
    <v-form-item :record="record"></v-form-item>
    <div class="show-key-box">
      {{ record.label + (record.field ? '/' + record.field : '') }}
    </div>
    <form-node-action :record="record"></form-node-action>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { BasicFormItem } from '@common/class/basic-form'
import VFormItem from '@design/components/VFormItem/index.vue'
import FormNodeAction from '@design/VFormDesign/components/FormNodeAction.vue'
import { useFormDesign } from '@design/hooks/useFormDesign'
const props = defineProps({
  record: {
    type: Object as PropType<BasicFormItem>,
    required: true
  }
})
const { currentItem, handleSelectItem } = useFormDesign()
</script>
