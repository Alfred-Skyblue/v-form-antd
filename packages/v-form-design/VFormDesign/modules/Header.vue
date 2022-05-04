<!--
 * @author: ypt
 * @date: 2022/4/11
 * @description: Header组件
-->
<template>
  <header>
    {{ title }}
  </header>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'v-form-antd表单设计器'
  }
})
</script>
