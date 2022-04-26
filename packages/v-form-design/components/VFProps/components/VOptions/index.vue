<!--
 * @author: ypt
 * @date: 2022/4/25
 * @description: 选项配置文件
-->
<template>
  <div class="v-options-config">
    <a-form-item label="选项">
      <div
        class="v-flex v-space-x-4 v-items-center"
        v-for="(option, index) in modelOptions"
        :key="index"
      >
        <a-input v-model:value="option.label" />
        <a-input v-model:value="option.value" />
        <a
          class="push v-rounded-full v-text-center hover:v-bg-red-300 v-transition-all v-bg-gray-200"
        >
          <Icon type="delete" />
        </a>
      </div>
    </a-form-item>
  </div>
</template>

<script lang="ts" setup>
import type { PropType, Ref } from 'vue'
import type { ISelectOption } from '@common/types/form'
import { useVModel } from '@vueuse/core'
import Icon from '@design/components/Icon/index.vue'

const emit = defineEmits(['update:options'])
const props = defineProps({
  options: {
    type: Array as PropType<ISelectOption[]>
  }
})

const modelOptions = useVModel(props, 'options', emit) as Ref<ISelectOption[]>
</script>

<style lang="less" scoped>
.v-options-config {
  :deep(.ant-form-item) {
    display: block;
    .ant-checkbox-wrapper + .ant-checkbox-wrapper {
      margin-left: 0;
    }
  }
  .push {
    flex: 0 0 25px;
  }
}
</style>
