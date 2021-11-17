<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/17
 * @Description:
-->
<template>
  <div class="h-10 bg-blue-500 inline">
    {{ state.name }}
  </div>
</template>
<script>
import { defineComponent, reactive } from '@vue/composition-api'

export default defineComponent({
  name: 'HelloForm',
  setup() {
    const state = reactive({ name: 'xiaoming123' })
    return { state }
  }
})
</script>

<style scoped></style>
