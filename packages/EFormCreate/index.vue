<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/29
 * @Description: 根据json生成表单
-->
<template>
  <div></div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'

export default defineComponent({
  name: 'EFormCreate',
  setup() {
    const state = reactive({})
    return { ...toRefs(state) }
  }
})
</script>
