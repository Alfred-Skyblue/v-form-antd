<template>
  <div class="hello">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// test
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
