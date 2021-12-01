<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/29
 * @Description: $END$
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
    :width="800"
  >
    <e-form-create ref="eFormCreate" :form-config="formValue">
      <template slot="slotName" slot-scope="{ formModel, field, record }">
        {{ $log('作用域', formModel, field, record) }}
        <a-input v-model="formModel[field]"></a-input>
      </template>
    </e-form-create>
  </a-modal>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from '@vue/composition-api'
import { IFormConfig } from '@pack/typings/EFormComponent'
import { IAnyObject } from '@pack/typings/baseType'
import { cloneDeep } from 'lodash-es'
import EFormCreate from '../EFormCreate/index.vue'
import { FormModel } from 'ant-design-vue/types/form-model/form'
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

    const formValue = {
      formItems: [
        {
          type: 'input',
          label: '数字输入框',
          icon: 'icon-number',
          field: 'number_1',
          span: 24,
          props: {},
          on: {},
          key: 'number_1'
        },
        {
          type: 'textarea',
          label: '文本域',
          icon: 'icon-number',
          field: 'textarea_1',
          span: 24,
          props: {},
          on: {},
          key: 'number_1'
        },
        {
          type: 'radioGroup',
          label: '单选框',
          icon: 'icon-radio',
          field: 'radio_group_2',
          link: ['number_1', 'select_3', 'textarea_1'],
          update() {
            console.log('联动成功')
          },
          span: 24,
          props: {
            options: [
              {
                label: '选项一',
                value: '1'
              },
              {
                label: '选项二',
                value: '2'
              }
            ]
          },
          key: 'radio_group_2'
        },
        {
          type: 'select',
          label: '下拉选择',
          icon: 'icon-select',
          field: 'select_3',
          span: 24,
          props: {
            options: [
              {
                label: '选项一',
                value: '1'
              },
              {
                label: '选项二',
                value: '2'
              }
            ]
          },
          key: 'select_3'
        }
      ],
      config: {
        layout: 'horizontal',
        labelLayout: 'flex',
        labelWidth: 100,
        labelCol: {},
        wrapperCol: {}
      },
      activeKey: 2
    }
    const eFormCreate = ref<IFormSubmit | null>(null)

    // ;(getCurrentInstance()!.parent as IAnyObject)!.$formModel = eFormModel

    /**
     * 显示Json数据弹框
     * @param jsonData
     */
    const showModal = (jsonData: IFormConfig) => {
      state.formConfig = cloneDeep(jsonData)
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
      eFormCreate,
      formValue
    }
  }
})
</script>
