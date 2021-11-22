<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/19
 * @Description: $END$
-->
<template>
  <div>
    <form-node
      :key="record.key"
      :record="record"
      :data="data"
      :current-item="currentItem"
      @handleCopy="$emit('handleCopy')"
      @handleDelete="$emit('handleDelete')"
      @handleShowRightMenu="$emit('handleShowRightMenu')"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'
import FormNode from './FormNode.vue'
export default defineComponent({
  name: 'LayoutItem',
  props: {
    record: {
      type: Object,
      required: true
    },
    currentItem: {
      type: Object,
      required: true
    },
    data: {
      type: Object,
      required: true
    }
  },
  components: {
    FormNode
  },
  setup() {
    const state = reactive({})
    return { ...toRefs(state) }
  }
})
</script>
