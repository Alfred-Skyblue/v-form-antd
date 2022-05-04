<!--
 * @author: ypt
 * @date: 2022/5/2
 * @description: json预览组件
-->
<template>
  <div class="json-preview">
    <a-modal
      title="预览json"
      v-model:visible="visible"
      :width="800"
      :destroyOnClose="true"
      :getContainer="getContainer"
      ok-text="复制json"
      @ok="handleOk"
    >
      <JsonEditor ref="jsonEditor" :code="formConfig" />
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useFormDesign } from '@design/hooks/useFormDesign'
import JsonEditor from '@design/components/JsonEditor/index.vue'
import type { IJsonEditor } from '@design/components/JsonEditor/index.vue'
import { message } from 'ant-design-vue'

export interface IJsonPreview {
  handleOk: () => void
  handlePreview: () => void
}
const visible = ref(false)
const jsonEditor = ref<IJsonEditor>()

const { formConfig } = useFormDesign()

const getContainer = () => {
  return document.querySelector('.json-preview')
}
const handleOk = () => {
  const json = jsonEditor.value?.getValue()
  if (!navigator.clipboard) {
    message.error('当前浏览器不支持复制功能')
  }
  if (json) {
    navigator.clipboard.writeText(json).then(() => {
      message.success('复制成功')
    })
  }
}

const handlePreview = () => {
  visible.value = true
}
defineExpose<IJsonPreview>({
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
