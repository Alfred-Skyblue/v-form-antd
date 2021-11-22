<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/18
 * @Description: 中间表单布局面板
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
          group="form-draggable"
          ghostClass="moving"
          :animation="180"
          handle=".drag-move"
          v-model="data.formItems"
          @add="addItem"
        >
          <transition-group tag="div" name="list" class="list-main">
            <LayoutItem
              v-for="record in data.formItems"
              :key="record.key"
              :record="record"
              :data="data"
              :current-item="currentItem"
            ></LayoutItem>
          </transition-group>
        </draggable>
      </a-row>
    </a-form-model>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  PropType
} from '@vue/composition-api'
import LayoutItem from '../components/LayoutItem.vue'
import { IEFormComponent, IFormConfig } from '@pack/typings/EFormComponent'
import { cloneDeep } from 'lodash-es'

export default defineComponent({
  name: 'FormComponentPanel',
  props: {
    data: {
      type: Object as PropType<IFormConfig>,
      required: true
    },
    currentItem: {
      type: Object as PropType<IEFormComponent>,
      required: true
    }
  },
  components: {
    LayoutItem
  },
  setup(props, { emit }) {
    const state = reactive({})
    /**
     * 拖拽完成事件
     * @param newIndex
     */
    const addItem = ({ newIndex }: any) => {
      const formItems = props.data.formItems
      formItems[newIndex] = cloneDeep(formItems[newIndex])
      emit('handleSetSelectItem', formItems[newIndex])
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
