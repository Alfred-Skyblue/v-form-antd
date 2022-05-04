<!--
 * @author: ypt
 * @date: 2022/5/2
 * @description: 导入json
-->
<template>
  <div class="json-preview">
    <a-modal
      title="导入json（请严格按照指定格式进行导入）"
      v-model:visible="visible"
      :width="800"
      :destroyOnClose="true"
      :getContainer="getContainer"
      @ok="handleOk"
    >
      <JsonEditor ref="jsonEditor" :code="code" />
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { useFormDesign } from '@design/hooks/useFormDesign'
import type { IVFormConfig } from '@design/types/form-design'

import JsonEditor from '@design/components/JsonEditor/index.vue'
import type { IJsonEditor } from '@design/components/JsonEditor/index.vue'
import { useFormatForm } from '@common/hooks/useFormatForm'

export interface IImportJson {
  handleOk: () => void
  handlePreview: () => void
}
const visible = ref(false)
const jsonEditor = ref<IJsonEditor>()

const { formConfig } = useFormDesign()
const code = {
  formItems: [],
  config: {
    layout: 'horizontal',
    labelLayout: 'fixed',
    labelWidth: 100
  }
}
const getContainer = () => {
  return document.querySelector('.json-preview')
}
const handleOk = () => {
  const jsonStr = jsonEditor.value?.getValue()
  if (!jsonStr) return
  const config = ref(JSON.parse(jsonStr) as IVFormConfig)
  useFormatForm(config)
  config.value.currentItem = config.value.formItems[0] ?? {}
  formConfig.value = config.value
  handlePreview(false)
}

const handlePreview = (flag = true) => {
  visible.value = flag
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
