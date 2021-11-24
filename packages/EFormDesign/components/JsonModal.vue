<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/23
 * @Description: $END$
-->
<template>
  <a-modal
    title="JSON数据"
    :footer="null"
    :visible="visible"
    @cancel="handleCancel"
    :destroyOnClose="true"
    wrapClassName="e-code-modal"
    style="top: 20px"
    width="850px"
  >
    <previewCode :editorJson="editorJson" />
  </a-modal>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  toRefs
} from '@vue/composition-api'
import { IObject } from '@pack/typings/baseType'
import PreviewCode from './PreviewCode.vue'
import { cloneDeep } from 'lodash-es'
import { IFormConfig } from '@pack/typings/EFormComponent'

export interface IJsonModalMethods {
  showModal: (jsonData: IObject) => void
}

const removeAttrs = (formConfig: IFormConfig) => {
  const copyFormConfig = cloneDeep(formConfig)
  delete copyFormConfig.currentItem
  return copyFormConfig
}
export default defineComponent({
  name: 'JsonModal',
  components: {
    PreviewCode
  },
  setup() {
    const state = reactive<{
      visible: boolean
      jsonData: IFormConfig
    }>({
      visible: false, // 控制json数据弹框显示
      jsonData: {} as IFormConfig // json数据
    })
    /**
     * 显示Json数据弹框
     * @param jsonData
     */
    const showModal = (jsonData: IFormConfig) => {
      state.visible = true
      state.jsonData = jsonData
    }
    // 计算json数据
    const editorJson = computed(() => {
      return JSON.stringify(removeAttrs(state.jsonData), null, '\t')
    })
    // 关闭弹框
    const handleCancel = () => {
      state.visible = false
    }
    return { ...toRefs(state), editorJson, handleCancel, showModal }
  }
})
</script>
