<!--
 * @author: 杨攀腾
 * @date: 2022/4/17
 * @description: $END$
-->
<template>
  <i :class="`v-align-middle iconfont icon-${type}`"></i>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Icon',
  props: {
    type: {
      type: String,
      default: ''
    }
  }
})
</script>
