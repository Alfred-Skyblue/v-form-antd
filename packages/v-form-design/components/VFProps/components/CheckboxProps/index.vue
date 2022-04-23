<!--
 * @author: 杨攀腾
 * @date: 2022/4/23
 * @description: 以复选框操作的属性
-->
<template>
  <div class="action-props">
    <a-form-item label="控制属性">
      <a-checkbox
        v-for="item of list"
        v-model:checked="formConfig.currentItem.props[item.value]"
        :key="item.value"
      >
        {{ item.label }}
      </a-checkbox>
    </a-form-item>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import type { IVFormDesignState } from '@design/types/form-design'
import type { DesignInput } from '@design/class/form/input'

export default defineComponent({
  name: 'CheckboxProps',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  setup() {
    const { formConfig } =
      inject<IVFormDesignState<DesignInput>>('formDesignState')!
    return { formConfig }
  }
})
</script>

<style lang="less" scoped>
.action-props {
  :deep(.ant-form-item) {
    display: block;
  }
}
</style>
