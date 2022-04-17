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
      itemKey="key"
    >
      <template #item="{ element, index }">
        <li
          class="draggable-item v-truncate"
          @dragstart="$emit('dragStart', element, index)"
          @click="handlePushItem(element)"
        >
          <Icon :type="element.icon" />
          <span class="v-ml-5 v-align-middle">
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
import type { BasicFormItem } from '@common/class/basic-form'
import { inject } from 'vue'
import type { IVFormDesignState } from '@design/types/form-design'
import Icon from '@design/components/Icon/index.vue'

defineProps({
  list: {
    type: Array as PropType<BasicFormItem[]>,
    default: () => []
  }
})
const { handlePushItem } = inject<IVFormDesignState>('formDesignState')!
</script>

<style lang="less" scoped>
.draggable-item {
  @apply v-px-12 v-transition-all v-h-36 v-cursor-move v-rounded;
  border: 1px solid #e6e6e6;
  line-height: 36px;
  &:hover {
    @apply v-text-primary v-border-primary;
    box-shadow: 0 2px 6px var(--primary-color);
  }
}
</style>
