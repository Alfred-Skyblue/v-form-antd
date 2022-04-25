<!--
 * @author: ypt
 * @date: 2022/4/25
 * @description: Number
-->
<template>
  <div></div>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent } from 'vue'

export default defineComponent({
  name: 'index',
  setup() {
    const state = reactive({})
    return { ...toRefs(state) }
  }
})
</script>

<style scoped></style>
