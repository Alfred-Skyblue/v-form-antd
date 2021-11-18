<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/18
 * @Description:
-->
<template>
  <div class="form-panel">
    <a-empty
      class="empty-text"
      v-show="data.formItems.length === 0"
      description="从左侧选择控件添加"
    />
    <a-form-model>
      <a-row>
        <draggable
          tag="div"
          class="draggable-box"
          v-bind="{
            group: 'form-draggable',
            ghostClass: 'moving',
            animation: 180,
            handle: '.drag-move'
          }"
          v-model="data.formItems"
          @add="addItem"
        >
          <transition-group
            tag="div"
            name="list"
            class="list-main"
          ></transition-group>
        </draggable>
      </a-row>
    </a-form-model>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api'

export default defineComponent({
  name: 'FormComponentPanel',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {
    const state = reactive({})
    const addItem = (evt: any) => {
      const newIndex = evt.newIndex
      emit('handleSetSelectItem', props.data.formItems[newIndex])
    }
    return {
      addItem,
      ...toRefs(state)
    }
  }
})
</script>

<style lang="less" scoped>
.form-panel {
  position: relative;
  height: 100%;
  .empty-text {
    color: #aaa;
    height: 150px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
  }

  .list-main {
    height: 100vh;
  }
}
</style>
