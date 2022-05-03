<!--
 * @author: ypt
 * @date: 2022/5/3
 * @description: VSwitch 二次封装开关组件，兼容双向绑定值为 value
-->
<template>
  <a-switch v-model:checked="newValue"></a-switch>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useVModel } from '@vueuse/core'

export default defineComponent({
  name: 'VSwitch',
  props: {
    value: {
      type: Boolean
    }
  },
  setup(props, { emit }) {
    const newValue = useVModel(props, 'value', emit)
    return { newValue }
  }
})
</script>
