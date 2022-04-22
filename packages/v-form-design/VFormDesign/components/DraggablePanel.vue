<!--
 * @author: 杨攀腾
 * @date: 2022/4/21
 * @description: $END$
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
    :list="modelValue"
    itemKey="_key"
    handle=".drag-move"
    @add="handleAdd"
  >
    <template #item="{ element }">
      <li
        class="draggable-item drag-move v-cursor-move"
        @dragstart="handleSelectItem(element)"
      >
        <layout-item :record="element"></layout-item>
      </li>
    </template>
  </draggable>
</template>

<script lang="ts" setup>
import Draggable from 'vuedraggable'
import { computed, defineProps, inject, Ref } from 'vue'
import type { IVFormDesignState } from '../../types/form-design'
import { cloneDeep } from 'lodash-es'
import { useVModel } from '@vueuse/core'
import LayoutItem from '@design/VFormDesign/components/LayoutItem.vue'
import type { BasicFormItem } from '@common/class/basic-form'
const { handleSelectItem } = inject<IVFormDesignState>('formDesignState')!
const props = defineProps({
  list: {
    type: Array,
    required: true
  },
  root: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:list'])

const modelValue = useVModel(props, 'list', emit) as Ref<BasicFormItem[]>

const draggableClass = computed(
  () => `v-w-full list-main  v-px-5 v-py-10 ${props.root ? 'v-absolute' : ''}`
)
const handleAdd = (event: { newIndex: number }) => {
  const { newIndex } = event
  const newItem = cloneDeep(modelValue.value[newIndex])
  newItem.generateKey()
  // modelValue.value[newIndex] = newItem
}
</script>

<style lang="less" scoped>
.draggable-item {
  min-height: 36px;
  border-width: 0 !important;
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
  animation-name: swoopInLeft;
  animation-duration: 0.5s;
}

.list-enter-from,
.list-leave-to {
  animation-name: swoopOutRight;
  animation-duration: 0.5s;
}

.list-enter {
  height: 30px;
}
</style>
