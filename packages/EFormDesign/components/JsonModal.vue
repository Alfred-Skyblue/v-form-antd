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

export interface IJsonModalMethods {
  showModal: (jsonData: IObject) => void
}
export default defineComponent({
  name: 'JsonModal',
  components: {
    PreviewCode
  },
  setup() {
    const state = reactive<{ visible: boolean; jsonData: IObject }>({
      visible: true,
      jsonData: {}
    })
    const showModal = (jsonData: IObject) => {
      state.visible = true
      state.jsonData = jsonData
    }
    const editorJson = computed(() => {
      return JSON.stringify(state.jsonData, null, '\t')
    })
    const handleCancel = () => {
      state.visible = false
    }
    return { ...toRefs(state), editorJson, handleCancel, showModal }
  }
})
</script>
