<template>
  <div>
    <div v-if="['grid'].includes(formConfig.currentItem['type'])">
      <div v-for="(item, index) of formConfig.currentItem['columns']" :key="index">
        <div class="options-box">
          <a-input v-model="item.span" class="options-value" />
          <a class="options-delete" @click="deleteGridOptions(index)">
            <a-icon type="delete"></a-icon>
          </a>
        </div>
      </div>
      <a @click="addGridOptions">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-plus"></use>
        </svg>
        添加栅格
      </a>
    </div>
    <div v-else>
      <div v-for="(item, index) of formConfig.currentItem['props'][key]" :key="index">
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
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, set, toRefs } from '@vue/composition-api'
import { useFormDesignState } from '@pack/hooks/useFormDesignState'
import { remove } from '@pack/utils'
import message from '@pack/utils/message'

export default defineComponent({
  name: 'FormOptions',
  props: {},
  setup() {
    const state = reactive({})
    const { formConfig } = useFormDesignState()
    const key =
      formConfig.value.currentItem?.type === 'treeSelect' ? 'treeData' : 'options'
    const addOptions = () => {
      if (!formConfig.value.currentItem?.props?.[key])
        set(formConfig.value.currentItem!.props!, key, [])
      const len = formConfig.value.currentItem?.props?.[key].length + 1
      formConfig.value.currentItem!.props![key].push({
        label: `选项${len}`,
        value: '' + len
      })
    }
    const deleteOptions = (index: number) => {
      remove(formConfig.value.currentItem?.props?.[key], index)
    }

    const addGridOptions = () => {
      formConfig.value.currentItem?.['columns']?.push({
        span: 12,
        children: []
      })
    }
    const deleteGridOptions = (index: number) => {
      if (index === 0) return message.warning('请至少保留一个栅格')

      remove(formConfig.value.currentItem!['columns']!, index)
    }
    return {
      ...toRefs(state),
      formConfig,
      addOptions,
      deleteOptions,
      key,
      deleteGridOptions,
      addGridOptions
    }
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
