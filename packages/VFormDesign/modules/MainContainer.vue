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
        type: 'transition-group',
        name: 'list',
        class: 'v-overflow-hidden v-h-full'
      }"
      group="form-draggable"
      ghostClass="moving"
      :animation="180"
      :list="formConfig.formItems"
      itemKey="key"
      handle=".drag-move"
      @add="handleChange"
    >
      <template #item="{ element }">
        <li class="draggable-item drag-move v-cursor-move">
          <form-node :record="element"></form-node>
        </li>
      </template>
    </draggable>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, defineComponent, ref, inject } from 'vue'
import draggable from 'vuedraggable'
import { cloneDeep } from 'lodash-es'
import FormNode from '@/VFormDesign/components/FormNode.vue'
import type { IVFormDesignState } from '@/types/form-design'
export default defineComponent({
  name: 'MainContainer',
  components: {
    FormNode,
    draggable
  },
  setup() {
    const dargOptions = ref({
      animation: 200,
      disabled: false,
      ghostClass: 'ghost'
    })
    const { formConfig } = inject<IVFormDesignState>('formDesignState')!
    console.log(formConfig)
    const state = reactive({})
    const handleChange = ({ newIndex }: any) => {
      const formItems = formConfig.value.formItems
      formItems[newIndex] = cloneDeep(formItems[newIndex])
      console.log('-> formItems[newIndex]', formItems[newIndex])
      debugger
    }

    return { ...toRefs(state), handleChange, dargOptions, formConfig }
  }
})
</script>

<style lang="less" scoped>
.component-panel {
  .draggable-item {
    min-height: 36px;
    border-width: 0 !important;
  }
  .flip-list-move {
    transition: transform 0.5s;
  }
  .no-move {
    transition: transform 0s;
  }
  .moving {
    opacity: 0.5 !important;
    background: #c8ebfb;
  }
  // 列表动画
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(-100px);
  }

  .list-enter {
    height: 30px;
  }
}
</style>
