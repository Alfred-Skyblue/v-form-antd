<!--
 * @author: ypt
 * @date: 2022/4/23
 * @description: 以复选框操作的属性
-->
<template>
  <div :class="{ 'action-props': list.length > 2 }">
    <a-form-item label="控制属性">
      <span v-for="item of list" :key="item.value">
        <a-checkbox
          v-if="!item.hidden"
          v-model:checked="currentItem.props[item.value]"
          v-on="item.on || {}"
        >
          {{ item.label }}
        </a-checkbox>
      </span>
    </a-form-item>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, Ref } from 'vue'
import { useFormDesign } from '@design/hooks/useFormDesign'
import type { IAnyEvent } from '@common/types'

export default defineComponent({
  name: 'CheckboxProps',
  props: {
    list: {
      type: Array as PropType<
        {
          label: string
          value: string
          on?: IAnyEvent
          hidden?: boolean | Ref<boolean>
        }[]
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
