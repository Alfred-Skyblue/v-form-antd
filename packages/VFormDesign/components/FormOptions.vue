<template>
  <div>
    <div v-for="(item, index) of formConfig.currentItem.props[key]" :key="index">
      <div class="options-box">
        <a-input v-model="item.label" />
        <a-input v-model="item.value" class="options-value" />
        <a class="options-delete" @click="deleteOptions(index)">
          <a-icon type="delete"></a-icon>
        </a>
      </div>
    </div>
    <a @click="addOptions">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-plus"></use>
      </svg>
      添加选项
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, set, toRefs } from '@vue/composition-api'
import { useFormDesignState } from '@pack/hooks/useFormDesignState'
import { remove } from '@pack/utils'

export default defineComponent({
  name: 'FormOptions',
  setup() {
    const state = reactive({})
    const { formConfig } = useFormDesignState()
    const currentItem = formConfig.value.currentItem
    const key = currentItem?.type === 'treeSelect' ? 'treeData' : 'options'
    const addOptions = () => {
      if (!currentItem?.props?.[key]) set(formConfig.value.currentItem!.props!, key, [])
      const len = currentItem?.props?.[key].length + 1
      currentItem!.props![key].push({
        label: `选项${len}`,
        value: '' + len
      })
    }
    const deleteOptions = (index: number) => {
      remove(currentItem?.props?.[key], index)
    }
    return { ...toRefs(state), formConfig, addOptions, deleteOptions, key }
  }
})
</script>

<style lang="less" scoped>
.options-box {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  .options-value {
    margin: 0 8px;
  }
  .options-delete {
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    background: #f5f5f5;
    color: #666;
    &:hover {
      background: #ff4d4f;
    }
  }
}
</style>
