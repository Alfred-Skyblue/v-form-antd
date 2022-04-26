<!--
 * @author: ypt
 * @date: 2022/4/23
 * @description: 尺寸选项组件
-->
<template>
  <a-form-item label="尺寸">
    <a-radio-group
      v-model:value="currentItem.props.size"
      button-style="solid"
      size="small"
      option-type="button"
      :options="options"
    ></a-radio-group>
  </a-form-item>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useFormDesign } from '@design/hooks/useFormDesign'

export default defineComponent({
  name: 'VFormSize',
  setup() {
    const { currentItem } = useFormDesign()

    const options = reactive([
      {
        label: 'large',
        value: 'large'
      },
      {
        label: 'default',
        value: 'default'
      },
      {
        label: 'small',
        value: 'small'
      }
    ])
    return { currentItem, options }
  }
})
</script>
