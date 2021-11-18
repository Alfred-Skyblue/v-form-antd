<template>
  <div>
    <EFormDesign></EFormDesign>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import EFormDesign from '../../../packages/EFormDesign/index.vue'
export default defineComponent({
  name: 'formDesign',
  components: { EFormDesign },
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
