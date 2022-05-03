<!--
 * @author: ypt
 * @date: 2022/5/3
 * @description: 表单预览
-->
<template>
  <div class="form-preview">
    <a-modal
      title="预览表单"
      v-model:visible="visible"
      :width="800"
      :destroyOnClose="true"
      :getContainer="getContainer"
      ok-text="获取数据"
      @ok="handleOk"
    >
      <VFormRender
        :formConfig="previewFormConfig"
        ref="vFormRef"
        :form-data="formData"
      ></VFormRender>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import VFormRender from '@render/VFormRender/index.vue'
import { useFormDesign } from '@design/hooks/useFormDesign'
import { computed, ref } from 'vue'
import { cloneDeep } from 'lodash-es'
import type { VFormConfig } from '@common/types/form'
export interface IFormPreview {
  handlePreview: () => void
  handleOk: () => void
}
const { formConfig } = useFormDesign()
const previewFormConfig = computed<VFormConfig>(() => {
  return cloneDeep(formConfig.value) as unknown as VFormConfig
})
const visible = ref(false)
const vFormRef = ref<{ submit: () => Promise<any> }>()
const formData = ref({ field41: '' })
const getContainer = () => {
  return document.querySelector('.form-preview')
}
const handlePreview = () => {
  visible.value = true
}
const handleOk = async () => {
  const data = await vFormRef.value?.submit()
  console.log('=>(FormPreview.vue:41) data', data)
}
defineExpose<IFormPreview>({
  handleOk,
  handlePreview
})
</script>
