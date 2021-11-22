<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/18
 * @Description: 左侧表单拖拽项
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
      @add="handleAdd"
    >
      <li
        class="bs-box"
        v-for="(item, index) in list"
        :key="index"
        @dragstart="$emit('addAttrs', list, index)"
        @click="$emit('handleListPush', item)"
      >
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="`#${item.icon}`"></use>
        </svg>
        {{ item.label }}
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
    const handleAdd = (e: any) => {
      console.log(e)
    }
    return { state, handleStart, handleAdd }
  }
})
</script>
