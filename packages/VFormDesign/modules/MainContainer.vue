<!--
 * @author: 杨攀腾
 * @date: 2022/4/13
 * @description: 设计器面板
-->
<template>
  <div class="component-panel v-h-full">
    <draggable
      tag="transition-group"
      :component-data="{
        tag: 'ul',
        type: 'transition-group'
      }"
      v-bind="dargOptions"
      class="draggable-box v-h-full v-bg-red-500"
      group="form-draggable"
      :animation="180"
      :list="formConfig.formItems"
      itemKey="type"
      handle=".drag-move"
      @add="handleChange"
    >
      <template #item="{ element }">
        <li class="draggable-item drag-move">
          <component :is="element.tag"></component>
        </li>
      </template>
    </draggable>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent, ref, inject } from 'vue'
import draggable from 'vuedraggable'
import { cloneDeep } from 'lodash-es'
export default defineComponent({
  name: 'MainContainer',
  props: {},
  components: {
    draggable
  },
  setup() {
    const dargOptions = ref({
      animation: 200,
      disabled: false,
      ghostClass: 'ghost'
    })
    const formConfig = inject<any>('formConfig')
    const state = reactive({})
    const handleChange = ({ newIndex }: any) => {
      const formItems = formConfig.value.formItems
      formItems[newIndex] = cloneDeep(formItems[newIndex])
    }

    return { ...toRefs(state), handleChange, dargOptions, formConfig }
  }
})
</script>

<style lang="less" scoped>
.component-panel {
  .draggable-item {
    max-height: 36px;
  }
  .flip-list-move {
    transition: transform 0.5s;
  }
  .no-move {
    transition: transform 0s;
  }

  .ghost {
    opacity: 0.5;
    background: #c8ebfb;
  }
}
</style>
