<!--
 * @author: 杨攀腾
 * @date: 2022/4/11
 * @description: CollapseItem
-->
<template>
  <div>
    <draggable
      tag="ul"
      :model-value="list"
      :group="{ name: 'form-draggable', pull: 'clone', put: false }"
      :sort="false"
      itemKey="type"
      @start="handleDragStart"
    >
      <template #item="{ element }">
        <li>
          <div class="drag-item-title">{{ element.title }}</div>
        </li>
      </template>
    </draggable>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent, PropType } from 'vue'
import draggable from 'vuedraggable'
import type { IAnyObject } from '@/types'

export default defineComponent({
  name: 'CollapseItem',
  components: {
    draggable
  },
  props: {
    list: {
      type: Array as PropType<any[]>,
      default: () => [
        { title: '标题1', content: '内容1', type: 'text' },
        { title: '标题2', content: '内容1', type: 'number' }
      ]
    }
  },
  setup(props, { emit }) {
    const state = reactive({})
    const handleDragStart = (e: IAnyObject, list: any[]) => {
      emit('start', list[e.oldIndex])
    }
    return { ...toRefs(state), handleDragStart }
  }
})
</script>
