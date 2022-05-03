<!--
 * @author: ypt
 * @date: 2022/5/3
 * @description: 表单预览
-->
<template>
  <div class="form-preview">
    <a-modal
      title="预览json"
      v-model:visible="visible"
      :width="800"
      :destroyOnClose="true"
      :getContainer="getContainer"
      @ok="handleOk"
    >
      <VFormRender :formConfig="formConfig"></VFormRender>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import VFormRender from '@render/VFormRender/index.vue'
import { useFormDesign } from '@design/hooks/useFormDesign'
import { ref } from 'vue'
export interface IFormPreview {
  handlePreview: () => void
  handleOk: () => void
}
const { formConfig } = useFormDesign()
const visible = ref(false)
const getContainer = () => {
  return document.querySelector('.form-preview')
}
const handlePreview = () => {
  visible.value = true
}
const handleOk = () => {
  console.log('ok')
}
defineExpose<IFormPreview>({
  handleOk,
  handlePreview
})
</script>
