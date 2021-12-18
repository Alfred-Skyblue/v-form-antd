<!--
 * @Author: ypt
 * @Date: 2021/11/29
 * @Description: 表单预览组件
-->
<template>
  <a-modal
    title="预览"
    :visible="visible"
    @ok="handleGetData"
    @cancel="handleCancel"
    okText="获取数据"
    cancelText="关闭"
    style="top: 20px"
    :destroyOnClose="true"
    :width="900"
  >
    <v-form-create :form-config="formConfig" v-model="fApi" @onSubmit="onSubmit">
      <template slot="slotName" slot-scope="{ formModel, field }">
        <a-input v-model="formModel[field]" placeholder="我是插槽传递的输入框"></a-input>
      </template>
    </v-form-create>
    <JsonModal ref="jsonModal"></JsonModal>
  </a-modal>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from '@vue/composition-api'
import { IFormConfig } from '@pack/typings/v-form-component'
import { IAnyObject } from '@pack/typings/base-type'
import VFormCreate from '../VFormCreate/index.vue'
import { formatRules } from '@pack/utils'
import { IVFormMethods } from '@pack/hooks/useVFormMethods'
import JsonModal from '@pack/VFormDesign/components/JsonModal.vue'
import { IToolbarMethods } from '@pack/VFormDesign/index.vue'

export default defineComponent({
  name: 'VFormPreview',
  components: {
    JsonModal,
    VFormCreate
  },
  setup() {
    const jsonModal = ref<IToolbarMethods | null>(null)
    const state = reactive<{
      formData: IAnyObject
      visible: boolean
      formConfig: IFormConfig
      fApi: IVFormMethods
    }>({
      formData: {},
      formConfig: {} as IFormConfig,
      visible: false,
      fApi: {} as IVFormMethods
    })

    /**
     * 显示Json数据弹框
     * @param jsonData
     */
    const showModal = (jsonData: IFormConfig) => {
      formatRules(jsonData.formItems)
      state.formConfig = jsonData
      state.visible = true
    }

    /**
     * 获取表单数据
     * @return {Promise<void>}
     */
    const handleGetData = async () => {
      const data = await state.fApi.submit?.()
      jsonModal.value?.showModal?.(data)
    }
    const handleCancel = () => {
      state.visible = false
    }
    const onSubmit = (data: IAnyObject) => {
      console.log('-> data', data)
    }
    return {
      handleGetData,
      handleCancel,
      ...toRefs(state),
      showModal,
      jsonModal,
      onSubmit
    }
  }
})
</script>
