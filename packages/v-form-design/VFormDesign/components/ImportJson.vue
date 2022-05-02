<!--
 * @author: ypt
 * @date: 2022/5/2
 * @description: 导入json
-->
<template>
  <div class="json-preview">
    <a-modal
      title="预览json"
      v-model:visible="visible"
      :width="800"
      :destroyOnClose="true"
      :getContainer="getContainer"
      @ok="handleOk"
    >
      <JsonEditor :code="formConfig" @change="jsonChange" />
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { useFormDesign } from '@design/hooks/useFormDesign'
import { formForEach } from '@common/utils/util'
import type { IVFormConfig } from '@design/types/form-design'

import type { IDesignComponentType } from '@design/class'
import { createDesignComponent } from '@design/class'
import JsonEditor from '@design/components/JsonEditor/index.vue'

export interface IImportJson {
  handleOk: () => void
  handlePreview: () => void
}
const visible = ref(false)

const { formConfig } = useFormDesign()

const getContainer = () => {
  return document.querySelector('.json-preview')
}
const handleOk = () => {
  console.log('ok')
}

const handlePreview = () => {
  visible.value = true
}
const jsonChange = (val: string) => {
  console.log('=>(ImportJson.vue:45) val', JSON.parse(val))
  const config = JSON.parse(val) as IVFormConfig
  formForEach(config.formItems, (item, index, ctx) => {
    const { label, type } = item
    const formItem = createDesignComponent(type as IDesignComponentType, {
      label
    })
    ctx[index] = Object.assign(formItem, item)
  })
}
defineExpose<IImportJson>({
  handleOk,
  handlePreview
})
</script>

<style lang="less" scoped>
.json-preview {
  :deep(.ant-modal-root) {
    .ant-modal-body {
      padding: 0 !important;
    }
  }
}
</style>
