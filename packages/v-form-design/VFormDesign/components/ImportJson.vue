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
import { formForEach } from '@common/utils/util'
import type { IVFormConfig } from '@design/types/form-design'

import type { IDesignComponentType } from '@design/class'
import { createDesignComponent } from '@design/class'
import JsonEditor from '@design/components/JsonEditor/index.vue'
import type { IJsonEditor } from '@design/components/JsonEditor/index.vue'

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
  const config = JSON.parse(jsonStr) as IVFormConfig
  formForEach(config.formItems, (item, index, ctx) => {
    const { label, type } = item
    const formItem = createDesignComponent(type as IDesignComponentType, {
      label
    })
    ctx[index] = Object.assign(formItem, item)
  })
  config.currentItem = config.formItems[0] ?? {}
  formConfig.value = config
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
