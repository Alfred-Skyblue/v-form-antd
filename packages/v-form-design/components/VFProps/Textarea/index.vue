<!--
 * @author: 杨攀腾
 * @date: 2022/4/25
 * @description: 文本域属性配置
-->
<template>
  <div>12456</div>
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
