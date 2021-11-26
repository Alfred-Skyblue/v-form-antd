<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/26
 * @Description: $END$
-->
<template>
  <a-input v-model="value" v-on="$listeners" v-bind="props" />
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { vModelMixin } from '@pack/mixins/v-model-mixni'
import { useVModel } from '@vueuse/core'

export default defineComponent({
  name: 'EInput',
  mixins: [vModelMixin],
  props: ['modelValue', 'props'],
  setup(props, { emit }) {
    const value = useVModel(props, 'modelValue', emit)
    return { value }
  }
})
</script>
