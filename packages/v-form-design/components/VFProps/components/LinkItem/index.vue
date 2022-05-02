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
      mode="multiple"
      :maxTagCount="1"
      v-model:value="currentItem.link"
    ></a-select>
  </a-form-item>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useFormDesign } from '@design/hooks/useFormDesign'

export default defineComponent({
  name: 'LinkItem',
  setup() {
    const { currentItem, formConfig } = useFormDesign()
    const options = computed(() => {
      // 过滤关联字段，之关联非自身和非布局组件
      const linkOptions = formConfig.value.formItems.filter(
        item => item.type !== 'grid' && item !== currentItem.value
      )
      return linkOptions.map(({ label, field }) => ({ label, value: field }))
    })
    return { formConfig, options, currentItem }
  }
})
</script>
