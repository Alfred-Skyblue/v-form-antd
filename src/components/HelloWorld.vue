<!--
 * @author: ypt
 * @date: 2022/5/26
 * @description: $END$
-->
<template>
  <div>{{ message }}</div>
</template>

<script lang="ts" setup>
defineProps({
  message: {
    type: String,
    default: 'Hello World!'
  }
})
</script>
