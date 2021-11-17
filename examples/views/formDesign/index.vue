<template>
  <div>
    <HelloForm></HelloForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
export default defineComponent({
  name: 'formDesign',
  setup() {
    const state = reactive({ name: '小明', age: 18 })
    const handleClick = () => {
      console.log(state?.name)
    }
    return {
      handleClick,
      state
    }
  }
})
</script>

<style scoped></style>
