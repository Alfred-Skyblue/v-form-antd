<!--
 * @author: ypt
 * @date: 2022/4/23
 * @description: 表单联动组件
-->
<template>
  <a-form-item label="关联字段">
    <a-select
      placeholder="请选择关联字段"
      :options="options"
      v-model:value="formConfig.currentItem.props.link"
    ></a-select>
  </a-form-item>
</template>

<script lang="ts">
import { computed, defineComponent, inject } from 'vue'
import type { IVFormDesignState } from '@design/types/form-design'

export default defineComponent({
  name: 'LinkItem',
  setup() {
    const { formConfig } = inject<IVFormDesignState>('formDesignState')!
    const options = computed(() => {
      // 过滤关联字段，之关联非自身和非布局组件
      const linkOptions = formConfig.value.formItems.filter(
        item => item.type !== 'grid' && item !== formConfig.value.currentItem
      )
      return linkOptions.map(item => {
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
