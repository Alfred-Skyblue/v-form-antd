<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/18
 * @Description:
-->
<template>
  <div>
    <draggable
      tag="ul"
      :value="list"
      v-bind="{
        group: { name: 'form-draggable', pull: 'clone', put: false },
        sort: false,
        animation: 180,
        ghostClass: 'moving'
      }"
      @start="handleStart($event, list)"
    >
      <li
        class="bs-box"
        v-for="(val, index) in list"
        :key="index"
        @dragstart="$emit('generateKey', list, index)"
        @click="$emit('handleListPush', val)"
      >
        {{ val.label }}
      </li>
    </draggable>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import { IEFormComponent } from '../../typings/EFormComponent'

export default defineComponent({
  name: 'CollapseItem',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { emit }) {
    const state = reactive({})
    const handleStart = (e: any, list: IEFormComponent[]) => {
      emit('start', list[e.oldIndex].type)
    }
    return { state, handleStart }
  }
})
</script>
