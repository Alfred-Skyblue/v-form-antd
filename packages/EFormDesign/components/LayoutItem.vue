<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/19
 * @Description: 表单项布局控件
-->
<template>
  <form-node
    :key="record.key"
    :record="record"
    :data="data"
    :current-item="currentItem"
    @handleCopy="$emit('handleCopy')"
    @handleDelete="$emit('handleDelete')"
    @handleShowRightMenu="$emit('handleShowRightMenu')"
  />
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  toRefs
} from '@vue/composition-api'
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
  setup(props) {
    const state = reactive({})
    const colProps = computed(() => {
      const { span } = props.record
      return { span }
    })
    return { ...toRefs(state), colProps }
  }
})
</script>
