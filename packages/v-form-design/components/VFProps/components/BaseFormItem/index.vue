<!--
 * @author: ypt
 * @date: 2022/4/23
 * @description: 公用表单项容器
-->
<template>
  <a-form-item :label="label"></a-form-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  }
})
</script>
