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
    <e-form-create ref="eFormCreate" :form-config="formConfig">
      <template slot="slotName" slot-scope="{ formModel, field, record }">
        {{ $log('作用域', formModel, field, record) }}
        <a-input v-model="formModel[field]"></a-input>
      </template>
    </e-form-create>
  </a-modal>
</template>
<script lang="ts">
import { defineComponent, del, reactive, ref, toRefs } from '@vue/composition-api'
import { IFormConfig } from '@pack/typings/EFormComponent'
import { IAnyObject } from '@pack/typings/baseType'
import { cloneDeep, isArray } from 'lodash-es'
import EFormCreate from '../EFormCreate/index.vue'
import { FormModel } from 'ant-design-vue/types/form-model/form'
import { formItemsForEach } from '@pack/utils'
interface IFormSubmit extends FormModel {
  submit: () => IAnyObject
}
export default defineComponent({
  name: 'EFormPreview',
  components: {
    EFormCreate
  },
  setup() {
    const state = reactive<{
      formData: IAnyObject
      visible: boolean
      formConfig: IFormConfig
    }>({ formData: {}, formConfig: {} as IFormConfig, visible: false })

    const eFormCreate = ref<IFormSubmit | null>(null)

    // ;(getCurrentInstance()!.parent as IAnyObject)!.$formModel = eFormModel

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
    return {
      handleGetData,
      handleCancel,
      handleSubmit,
      ...toRefs(state),
      showModal,
      eFormCreate
    }
  }
})
</script>
