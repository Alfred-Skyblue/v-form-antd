<!--
 * @author: ypt
 * @date: 2022/5/26
 * @description: demo页面
-->
<template>
  <div>{{ message }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    message: {
      type: String,
      default: 'Hello World!'
    }
  }
})
</script>
