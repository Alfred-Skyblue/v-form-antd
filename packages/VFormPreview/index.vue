<!--
 * @Author: 杨攀腾
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
    <v-form-create ref="eFormCreate" :form-config="formConfig" v-model="fApi">
      <template slot="slotName" slot-scope="{ formModel, field }">
        <a-input v-model="formModel[field]" placeholder="我是插槽传递的输入框"></a-input>
      </template>
    </v-form-create>
  </a-modal>
</template>
<script lang="ts">
import { defineComponent, del, reactive, ref, toRefs } from '@vue/composition-api'
import { IFormConfig } from '@pack/typings/v-form-component'
import { IAnyObject } from '@pack/typings/base-type'
import { cloneDeep, isArray } from 'lodash-es'
import VFormCreate from '../VFormCreate/index.vue'
import { FormModel } from 'ant-design-vue/types/form-model/form'
import { formItemsForEach } from '@pack/utils'
import { IVFormMethods } from '@pack/hooks/useVFormMethods'
interface IFormSubmit extends FormModel {
  submit: () => IAnyObject
}
export default defineComponent({
  name: 'VFormPreview',
  components: {
    VFormCreate
  },
  setup() {
    const state = reactive<{
      formData: IAnyObject
      visible: boolean
      formConfig: IFormConfig
      fApi: Partial<IVFormMethods>
    }>({ formData: {}, formConfig: {} as IFormConfig, visible: false, fApi: {} })

    const eFormCreate = ref<IFormSubmit | null>(null)

    /**
     * 显示Json数据弹框
     * @param jsonData
     */
    const showModal = (jsonData: IFormConfig) => {
      const formConfig = cloneDeep(jsonData)
      formItemsForEach(formConfig.formItems, item => {
        if ('required' in item) {
          !isArray(item.rules) && (item.rules = [])
          item.rules.push({ required: true, message: item.message })
          del(item, 'required')
          del(item, 'message')
        }
      })
      state.formConfig = formConfig
      state.visible = true
    }

    const handleGetData = async () => {
      const data = await eFormCreate.value!.submit()
      console.log('-> data', data)
    }
    const handleCancel = () => {
      state.visible = false
    }
    const handleSubmit = () => {
      console.log('handleSubmit')
    }
    const handleClick = () => {
      state.fApi.setValue!('name', '李四')
    }

    return {
      handleGetData,
      handleCancel,
      handleSubmit,
      ...toRefs(state),
      showModal,
      eFormCreate,
      handleClick
    }
  }
})
</script>
