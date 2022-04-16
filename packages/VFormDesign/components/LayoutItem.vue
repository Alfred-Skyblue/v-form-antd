<!--
 * @author: 杨攀腾
 * @date: 2022/4/15
 * @description: 表单项布局
-->
<template>
  <div>
    <form-node :record="record"></form-node>
  </div>
</template>

<script setup lang="ts">
import FormNode from '@/VFormDesign/components/FormNode.vue'
import type { BasicFormItem } from '@/class/render/basic-form'
import type { PropType } from 'vue'
defineProps({
  record: {
    type: Object as PropType<BasicFormItem>,
    required: true
  }
})
</script>

<style scoped></style>
