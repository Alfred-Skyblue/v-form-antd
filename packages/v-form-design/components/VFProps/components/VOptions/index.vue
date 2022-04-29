<!--
 * @author: ypt
 * @date: 2022/4/25
 * @description: 选项配置文件
-->
<template>
  <div class="v-options-config" v-if="modelOptions">
    <a-form-item label="选项">
      <div
        class="v-flex v-space-x-6 v-space-y-4 v-items-center"
        v-for="(option, index) in modelOptions"
        :key="index"
      >
        <a-input v-model:value="option.label" />
        <a-input v-model:value="option.value" />
        <a
          class="remove v-rounded-full v-text-center hover:v-bg-red-300 v-transition-all v-bg-gray-200"
          @click="handleRemoveOption(option)"
        >
          <Icon type="delete" />
        </a>
      </div>
      <a class="v-mt-10 v-inline-block" @click="handleAddOptions">
        <Icon type="plus"></Icon>
        <span class="v-align-middle v-ml-4">添加选项</span>
      </a>
    </a-form-item>
  </div>
</template>

<script lang="ts" setup>
import type { PropType, Ref } from 'vue'
import type { ISelectOption } from '@common/types/form'
import { useVModel } from '@vueuse/core'
import Icon from '@design/components/Icon/index.vue'
import { remove } from 'lodash-es'

const emit = defineEmits(['update:options'])
const props = defineProps({
  options: {
    type: Array as PropType<ISelectOption[]>
  }
})

const modelOptions = useVModel(props, 'options', emit) as Ref<ISelectOption[]>

/**
 * 添加选项
 */
const handleAddOptions = () => {
  const len = modelOptions.value.length
  modelOptions.value.push({ label: `选项${len + 1}`, value: `value${len + 1}` })
}

/**
 * 删除选项
 * @param {ISelectOption} option
 */
const handleRemoveOption = (option: ISelectOption) => {
  remove(modelOptions.value, option)
}
</script>

<style lang="less" scoped>
.v-options-config {
  :deep(.ant-form-item) {
    display: block;
    .ant-checkbox-wrapper + .ant-checkbox-wrapper {
      margin-left: 0;
    }
  }
  .remove {
    flex: 0 0 25px;
  }
}
</style>
