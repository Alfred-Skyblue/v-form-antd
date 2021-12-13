<!--
 * @Author: ypt
 * @Date: 2021/11/26
 * @Description: 单选框按钮组
-->
<template>
  <div>
    <a-radio-group v-bind="props" v-on="$listeners" buttonStyle="solid" v-model="value">
      <a-radio-button v-for="item of options" :key="item.value" :value="item.value">
        {{ item.label }}
      </a-radio-button>
    </a-radio-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import { vModelMixin } from '@pack/mixins/v-model-mixni'
import { useVModel } from '@vueuse/core'

export default defineComponent({
  name: 'RadioButtonGroup',
  mixins: [vModelMixin],
  props: ['modelValue', 'options', 'props'],
  setup(props, { emit }) {
    // useVModel 解析为 emit('update:modelValue', 'modelValue') 来触发双向绑定
    const value = useVModel(props, 'modelValue', emit)
    return { value }
  }
})
</script>

<style scoped></style>
