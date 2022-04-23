<!--
 * @author: 杨攀腾
 * @date: 2022/4/23
 * @description: $END$
-->
<template>
  <a-form-item label="关联字段">
    <a-select
      :options="options"
      v-model:value="formConfig.currentItem.props.link"
    ></a-select>
  </a-form-item>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'
import type { IVFormDesignState } from '@design/types/form-design'
import type { DesignInput } from '@design/class/form/input'

export default defineComponent({
  name: 'LinkItem',
  setup() {
    const { formConfig } =
      inject<IVFormDesignState<DesignInput>>('formDesignState')!
    const options = computed(() => {
      return formConfig.value.formItems.map(item => {
        return {
          label: item.label,
          value: item.field
        }
      })
    })
    return { formConfig, options }
  }
})
</script>

<style scoped></style>
