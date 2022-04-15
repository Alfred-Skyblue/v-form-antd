<!--
 * @author: 杨攀腾
 * @date: 2022/4/15
 * @description: 表单项布局
-->
<template>
  <div></div>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent } from 'vue'

export default defineComponent({
  name: 'LayoutItem',
  setup() {
    const state = reactive({})
    return { ...toRefs(state) }
  }
})
</script>

<style scoped></style>
