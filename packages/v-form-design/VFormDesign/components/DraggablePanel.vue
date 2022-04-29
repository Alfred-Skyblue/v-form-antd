<!--
 * @author: ypt
 * @date: 2022/4/21
 * @description: 拖拽面板
-->
<template>
  <draggable
    tag="transition-group"
    :component-data="{
      tag: 'ul',
      type: 'transition-group',
      name: 'list',
      class: draggableClass
    }"
    group="form-draggable"
    ghostClass="moving"
    :animation="180"
    :list="list"
    itemKey="_key"
    handle=".drag-move"
    @add="handleAdd"
  >
    <template #item="{ element }">
      <a-col
        :span="formItemSpan(element.span)"
        class="draggable-item drag-move v-cursor-move"
        @dragstart="handleSelectItem(element)"
      >
        <layout-item :record="element"></layout-item>
      </a-col>
    </template>
  </draggable>
</template>

<script lang="ts" setup>
import Draggable from 'vuedraggable'
import { computed, inject, PropType } from 'vue'
import type { IVFormDesignState } from '../../types/form-design'
import LayoutItem from '@design/VFormDesign/components/LayoutItem.vue'
import type { BasicFormItem } from '@common/class/basic-form'
const { handleSelectItem } = inject<IVFormDesignState>('formDesignState')!
const props = defineProps({
  list: {
    type: Array as PropType<BasicFormItem[]>,
    required: true
  },
  root: {
    type: Boolean,
    default: false
  }
})

const draggableClass = computed(
  () => `draggable-main ant-row  ${props.root ? 'v-absolute' : ''}`
)

const handleAdd = (e: { newIndex: number }) => {
  handleSelectItem(props.list[e.newIndex])
}

const formItemSpan = computed(() => {
  return (span?: number) => span ?? 24
})
</script>

<style lang="less" scoped>
.draggable-item {
  min-height: 36px;
  border-width: 0 !important;
}
.draggable-main {
  @apply v-w-full list-main  v-px-5 v-py-10 v-content-start;
}
.no-move {
  transition: transform 0s;
}
.moving {
  opacity: 0.5 !important;
  background: #c8ebfb;
}
.list-main {
  min-height: 100%;
}
// 列表动画
.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.list-enter {
  height: 30px;
}
</style>
