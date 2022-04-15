<!--
 * @author: 杨攀腾
 * @date: 2022/4/11
 * @description: CollapseItem
-->
<template>
  <div>
    <Draggable
      class="p-5 v-grid v-grid-cols-2 v-gap-4"
      tag="ul"
      :list="list"
      :group="{ name: 'form-draggable', pull: 'clone', put: false }"
      :sort="false"
      itemKey="type"
    >
      <template #item="{ element, index }">
        <li
          class="draggable-item"
          @dragstart="$emit('dragStart', element, index)"
        >
          <i :class="`v-align-middle iconfont icon-${element.icon}`"></i>
          <span class="v-ml-5 v-align-middle v-truncate">
            {{ element.label }}
          </span>
        </li>
      </template>
    </Draggable>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import Draggable from 'vuedraggable'
import type { IFormItemType } from '@/config/form-item-config'

defineProps({
  list: {
    type: Array as PropType<IFormItemType[]>,
    default: () => [
      { title: '标题1', content: '内容1', type: 'text' },
      { title: '标题2', content: '内容1', type: 'number' }
    ]
  }
})
</script>

<style lang="less" scoped>
.draggable-item {
  @apply v-px-12 v-transition-all v-h-36 v-cursor-move v-border v-rounded;
  line-height: 36px;
  &:hover {
    @apply v-text-primary v-border-primary;
    box-shadow: 0 2px 6px var(--primary-color);
  }
}
</style>
