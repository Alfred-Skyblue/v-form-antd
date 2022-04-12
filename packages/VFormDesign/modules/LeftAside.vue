<!--
 * @author: 杨攀腾
 * @date: 2022/4/11
 * @description: $END$
-->
<template>
  <a-collapse :defaultActiveKey="['1', '2', '3', '4']">
    <a-collapse-panel header="基础组件" key="1">
      <collapse-item></collapse-item>
    </a-collapse-panel>
    <a-collapse-panel header="高级组件" key="2">
      <collapse-item></collapse-item>
    </a-collapse-panel>
    <a-collapse-panel header="布局组件" key="3">布局组件</a-collapse-panel>
    <a-collapse-panel header="自定义组件" key="4">自定义组件</a-collapse-panel>
  </a-collapse>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent } from 'vue'
import CollapseItem from '@/VFormDesign/components/CollapseItem.vue'

export default defineComponent({
  name: 'LeftAside',
  components: { CollapseItem },
  setup() {
    const state = reactive({})
    return { ...toRefs(state) }
  }
})
</script>

<style scoped></style>
