<!--
 * @author: 杨攀腾
 * @date: 2022/4/23
 * @description: 尺寸选项组件
-->
<template>
  <a-form-item label="尺寸">
    <a-radio-group
      v-model:value="formConfig.currentItem.props.size"
      button-style="solid"
      size="small"
      option-type="button"
      :options="options"
    ></a-radio-group>
  </a-form-item>
</template>

<script lang="ts">
import { defineComponent, inject, reactive } from 'vue'
import type { IVFormDesignState } from '@design/types/form-design'
import type { DesignInput } from '@design/class/form/input'

export default defineComponent({
  name: 'VFormSize',
  setup() {
    const { formConfig } =
      inject<IVFormDesignState<DesignInput>>('formDesignState')!

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
    return { formConfig, options }
  }
})
</script>

<style scoped></style>
