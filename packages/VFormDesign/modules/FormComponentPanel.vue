<!--
 * @Author: ypt
 * @Date: 2021/11/18
 * @Description: 中间表单布局面板
-->
<template>
  <div class="form-panel v-form-container">
    <a-empty
      class="empty-text"
      v-show="formConfig.formItems.length === 0"
      description="从左侧选择控件添加"
    />
    <a-form-model v-bind="formConfig.config">
      <a-row :style="{ height: '100%' }">
        <draggable
          tag="div"
          class="draggable-box"
          group="form-draggable"
          ghostClass="moving"
          :animation="180"
          handle=".drag-move"
          v-model="formConfig.formItems"
          @add="addItem"
          @start="handleDragStart"
        >
          <transition-group tag="div" name="list" class="list-main">
            <LayoutItem
              v-for="record in formConfig.formItems"
              :key="record.key"
              :span="record.span"
              class="drag-move"
              :record="record"
              :data="formConfig"
              :current-item="formConfig.currentItem"
            ></LayoutItem>
          </transition-group>
        </draggable>
      </a-row>
    </a-form-model>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import LayoutItem from '../components/LayoutItem.vue'
import { cloneDeep } from 'lodash-es'
import { useFormDesignState } from '@pack/hooks/useFormDesignState'

export default defineComponent({
  name: 'FormComponentPanel',
  components: {
    LayoutItem
  },
  setup(props, { emit }) {
    const { formConfig } = useFormDesignState()

    /**
     * 拖拽完成事件
     * @param newIndex
     */
    const addItem = ({ newIndex }: any) => {
      const formItems = formConfig.value.formItems
      formItems[newIndex] = cloneDeep(formItems[newIndex])
      emit('handleSetSelectItem', formItems[newIndex])
    }

    /**
     * 拖拽开始事件
     * @param e {Object} 事件对象
     */
    const handleDragStart = (e: any) => {
      emit('handleSetSelectItem', formConfig.value.formItems[e.oldIndex])
    }

    // 获取祖先组件传递的currentItem

    // 计算布局元素，水平模式下为ACol，非水平模式下为div
    const layoutTag = computed(() => {
      return formConfig.value.config.layout === 'horizontal' ? 'ACol' : 'div'
    })

    return {
      addItem,
      handleDragStart,
      formConfig,
      layoutTag
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
    top: -10%;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
    z-index: 100;
  }
  .draggable-box {
    .drag-move {
      cursor: move;
      min-height: 62px;
    }
    .list-main {
      overflow: auto;
      height: 100vh;
      // 列表动画
      .list-enter-active {
        transition: all 0.5s;
      }

      .list-leave-active {
        transition: all 0.3s;
      }

      .list-enter,
      .list-leave-to {
        opacity: 0;
        transform: translateX(-100px);
      }

      .list-enter {
        height: 30px;
      }
    }
  }
}
</style>
