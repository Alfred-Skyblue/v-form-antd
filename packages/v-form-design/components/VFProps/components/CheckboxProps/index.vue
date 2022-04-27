<!--
 * @author: ypt
 * @date: 2022/4/23
 * @description: 以复选框操作的属性
-->
<template>
  <div class="action-props">
    <a-form-item label="控制属性">
      <a-checkbox
        v-for="item of list"
        v-model:checked="currentItem.props[item.value]"
        :key="item.value"
        v-on="item.on || {}"
      >
        {{ item.label }}
      </a-checkbox>
    </a-form-item>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useFormDesign } from '@design/hooks/useFormDesign'
import type { IAnyEvent } from '@common/types'

export default defineComponent({
  name: 'CheckboxProps',
  props: {
    list: {
      type: Array as PropType<
        { label: string; value: string; on?: IAnyEvent }[]
      >,
      default: () => []
    }
  },
  setup() {
    const { currentItem } = useFormDesign()
    return { currentItem }
  }
})
</script>

<style lang="less" scoped>
.action-props {
  :deep(.ant-form-item) {
    display: block;
    .ant-checkbox-wrapper + .ant-checkbox-wrapper {
      margin-left: 0;
    }
  }
}
</style>
