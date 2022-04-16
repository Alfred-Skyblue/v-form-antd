<!--
 * @author: 杨攀腾
 * @date: 2022/4/16
 * @description: 工具栏
-->
<template>
  <div class="toolbar-box v-h-45 v-flex v-items-center"></div>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent } from 'vue'

export default defineComponent({
  name: 'Toolbar',
  setup() {
    const state = reactive({})
    return { ...toRefs(state) }
  }
})
</script>

<style lang="less" scoped>
.toolbar-box {
  height: var(--toolbar-height);
  border-bottom: 2px solid #ccc;
}
</style>
