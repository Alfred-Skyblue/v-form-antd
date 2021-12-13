<!--
 * @Author: ypt
 * @Date: 2021/11/19
 * @Description: 表单项布局控件
-->
<template>
  <component
    :is="layoutTag"
    :span="record.span"
    :class="{ 'hidden-item': record.hidden }"
  >
    <template v-if="['grid'].includes(record.type)">
      <div
        class="grid-box"
        :class="{ active: record.key === currentItem.key }"
        @click.stop="handleSetSelectItem(record)"
      >
        <a-row class="grid-row" v-bind="record.props">
          <a-col
            class="grid-col"
            v-for="(colItem, index) in record.columns"
            :key="index"
            :span="colItem.span || 0"
          >
            <draggable
              tag="div"
              class="draggable-box"
              v-bind="{
                group: 'form-draggable',
                ghostClass: 'moving',
                animation: 180,
                handle: '.drag-move'
              }"
              v-model="colItem.children"
              @start="$emit('dragStart', $event, colItem.children)"
              @add="$emit('handleColAdd', $event, colItem.children)"
            >
              <transition-group tag="div" name="list" class="list-main">
                <layoutItem
                  class="drag-move"
                  v-for="item in colItem.children"
                  :key="item.key"
                  :record="item"
                  :current-item="currentItem"
                  @handleCopy="$emit('handleCopy')"
                  @handleDelete="$emit('handleDelete')"
                />
              </transition-group>
            </draggable>
          </a-col>
        </a-row>
        <FormNodeOperate :record="record" :currentItem="currentItem" />
      </div>
    </template>
    <form-node
      v-else
      :key="record.key"
      :record="record"
      :current-item="currentItem"
      @handleCopy="$emit('handleCopy')"
      @handleDelete="$emit('handleDelete')"
    />
  </component>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  reactive,
  toRefs
} from '@vue/composition-api'
import FormNode from './FormNode.vue'
import FormNodeOperate from './FormNodeOperate.vue'
import { useFormDesignState } from '@pack/hooks/useFormDesignState'
import { IVFormComponent } from '@pack/typings/v-form-component'
export default defineComponent({
  name: 'LayoutItem',
  props: {
    record: {
      type: Object as PropType<IVFormComponent>,
      required: true
    },
    currentItem: {
      type: Object,
      required: true
    }
  },
  components: {
    FormNode,
    FormNodeOperate
  },
  setup(props) {
    const {
      formDesignMethods: { handleSetSelectItem },
      formConfig
    } = useFormDesignState()
    const state = reactive({})
    const colProps = computed(() => {
      const { span } = props.record
      return { span }
    })
    // 计算布局元素，水平模式下为ACol，非水平模式下为div
    const layoutTag = computed(() => {
      return formConfig.value.config.layout === 'horizontal' ? 'ACol' : 'div'
    })

    return { ...toRefs(state), colProps, handleSetSelectItem, layoutTag }
  }
})
</script>

<style lang="less" scoped>
.layout-width {
  width: 100%;
}
.hidden-item {
  background-color: rgb(240, 191, 195);
  //opacity: 0.5;
}
</style>
