<!--
 * @author: 杨攀腾
 * @date: 2022/4/15
 * @description: 表单项组件
-->
<template>
  <div></div>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent } from 'vue'

export default defineComponent({
  name: 'FormNode',
  setup() {
    const state = reactive({})
    return { ...toRefs(state) }
  }
})
</script>

<style scoped></style>
