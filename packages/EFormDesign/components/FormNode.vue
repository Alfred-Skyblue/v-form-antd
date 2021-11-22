<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/19
 * @Description: $END$
-->
<template>
  <div
    class="drag-move-box"
    @click.stop="$emit('handleSelectItem', record)"
    :class="{ active: record.key === currentItem.key }"
  >
    <div class="form-item-box">
      <EFormItem :data="data" :record="record" />
    </div>
    <div class="show-key-box">
      {{ record.label + (record.field ? '/' + record.field : '') }}
    </div>
    <FormNodeOperate :record="record" :currentItem="currentItem" />
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  PropType
} from '@vue/composition-api'
import { IEFormComponent, IFormConfig } from '@pack/typings/EFormComponent'
import FormNodeOperate from './FormNodeOperate.vue'

export default defineComponent({
  name: 'FormNode',
  components: {
    FormNodeOperate
  },
  props: {
    data: {
      type: Object as PropType<IFormConfig>,
      required: true
    },
    record: {
      type: Object as PropType<IEFormComponent>,
      required: true
    },
    currentItem: {
      type: Object as PropType<IEFormComponent>,
      required: true
    }
  },
  setup() {
    const state = reactive({})
    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="less" scoped>
@import '~@pack/styles/variable.less';
.drag-move-box {
  position: relative;
  box-sizing: border-box;
  padding: 8px;
  overflow: hidden;
  transition: all 0.3s;
  min-height: 36px;

  &:hover {
    background: @primary-hover-bg-color;
  }

  // 选择时 start
  &::before {
    content: '';
    height: 5px;
    width: 100%;
    background: @primary-color;
    position: absolute;
    top: 0;
    right: -100%;
    transition: all 0.3s;
  }

  &.active {
    &::before {
      right: 0;
    }

    background: @primary-hover-bg-color;
    outline-offset: 0;
  }

  // 选择时 end
  .form-item-box {
    position: relative;
    box-sizing: border-box;
    word-wrap: break-word;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 888;
    }

    .ant-form-item {
      // 修改ant form-item的margin为padding
      margin: 0;
      padding-bottom: 6px;
    }
  }

  .show-key-box {
    // 显示key
    position: absolute;
    bottom: 2px;
    right: 5px;
    font-size: 14px;
    z-index: 999;
    color: @primary-color;
  }

  .copy,
  .delete {
    position: absolute;
    top: 0;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #fff;
    z-index: 989;
    transition: all 0.3s;

    &.unactivated {
      opacity: 0 !important;
      pointer-events: none;
    }

    &.active {
      opacity: 1 !important;
    }
  }

  .copy {
    border-radius: 0 0 0 8px;
    right: 30px;
    background: @primary-color;
  }

  .delete {
    right: 0;
    background: @primary-color;
  }
}
</style>
