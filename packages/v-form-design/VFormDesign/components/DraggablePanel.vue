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
      class: 'v-w-full list-main v-absolute v-px-5 v-py-10'
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
import { defineProps, inject } from 'vue'
import { IVFormDesignState } from '../../types/form-design'
const { handleSelectItem } = inject<IVFormDesignState>('formDesignState')!
defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
</script>

<style scoped></style>
