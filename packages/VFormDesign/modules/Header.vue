<!--
 * @author: 杨攀腾
 * @date: 2022/4/11
 * @description: $END$
-->
<template>
  <header>
    {{ title }}
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'v-form-antd表单设计器'
    }
  }
})
</script>
