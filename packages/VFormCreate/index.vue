<!--
 * @Author: ypt
 * @Date: 2021/11/29
 * @Description: 根据json生成表单
-->
<template>
  <div class="v-form-container">
    <a-form-model
      class="v-form-model"
      ref="eFormModel"
      :model="formData"
      v-on="$listeners"
      v-bind="formModelProps"
    >
      <FormRender
        v-for="(record, index) of formConfig.formItems"
        :key="index"
        :record="record"
        :formConfig="formConfig"
        :formData="formData"
        @change="handleChange"
        @submit="handleSubmit"
        @reset="resetFields"
      >
        <template :slot="record.props.slotName">
          <slot
            :name="record.props.slotName"
            v-bind="{ formModel: formData, field: record.field, record }"
          />
        </template>
      </FormRender>
    </a-form-model>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, ref } from '@vue/composition-api'
import FormRender from './components/FormRender.vue'
import { IVFormComponent, IFormConfig } from '@pack/typings/v-form-component'
import { FormModel } from 'ant-design-vue/types/form-model/form'
import { useFormInstanceMethods } from '@pack/hooks/useFormInstanceMethods'
import { IVFormMethods, useVFormMethods } from '@pack/hooks/useVFormMethods'
import { useVModel } from '@vueuse/core'
import { omit } from 'lodash-es'
//
export default defineComponent({
  name: 'VFormCreate',
  components: {
    FormRender
  },
  model: {
    prop: 'fApi',
    event: 'update:fApi'
  },
  props: {
    fApi: {},
    formData: {
      type: Object,
      default: () => ({})
    },
    formConfig: {
      type: Object as PropType<IFormConfig>,
      required: true
    }
  },
  setup(props, context) {
    const { emit } = context
    const eFormModel = ref<FormModel | null>(null)
    const fApi = useVModel(props, 'fApi', emit)
    const { submit, validate, validateField, resetFields, clearValidate } =
      useFormInstanceMethods(props, context, eFormModel)

    const { linkOn, ...methods } = useVFormMethods(props, context, eFormModel, {
      submit,
      validate,
      validateField,
      resetFields,
      clearValidate
    })
    // 暴露给父组组件可调用的操作方法并且冻结对象，不可修改
    fApi.value = Object.freeze(methods)
    const handleChange = (record: IVFormComponent) => {
      const { field } = record
      linkOn[field!]?.forEach(
        formItem => {
          formItem.update?.(
            props.formData[formItem.field!],
            formItem,
            fApi.value as IVFormMethods
          )
        }
        // cb(field, cloneDeep(props.formData[field!]), record, fApi.value)
      )
    }
    /**
     * 获取表单属性
     */
    const formModelProps = computed(() =>
      omit(props.formConfig.config, ['disabled', 'labelWidth'])
    )

    const handleSubmit = () => {
      submit()
    }
    return {
      eFormModel,
      submit,
      validate,
      validateField,
      resetFields,
      clearValidate,
      handleChange,
      formModelProps,
      handleSubmit
    }
  }
})
</script>

<style lang="less" scoped>
.v-form-model {
  overflow: hidden;
}
</style>
