<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/29
 * @Description: 根据json生成表单
-->
<template>
  <div>
    <a-form-model
      class="e-form-model"
      ref="eFormModel"
      :model="formData"
      v-on="$listeners"
    >
      <FormRender
        v-for="(record, index) of formConfig.formItems"
        :key="index"
        :record="record"
        :formConfig="formConfig"
        :formData="formData"
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
import { defineComponent, PropType, ref, watch } from '@vue/composition-api'
import FormRender from './components/FormRender.vue'
import { IFormConfig } from '@pack/typings/EFormComponent'
import { FormModel } from 'ant-design-vue/types/form-model/form'
import { useFormInstanceMethods } from '@pack/hooks/useFormInstanceMethods'
import { useEFormMethods } from '@pack/hooks/useEFormMethods'

export default defineComponent({
  name: 'EFormCreate',
  components: {
    FormRender
  },
  props: {
    formData: {
      type: Object,
      default: () => ({
        name: '张三'
      })
    },
    formConfig: {
      type: Object as PropType<IFormConfig>,
      required: true
    }
  },
  setup(props, context) {
    const { emit } = context
    const eFormModel = ref<FormModel | null>(null)
    const { submit, validate, validateField, resetFields, clearValidate } =
      useFormInstanceMethods(props, context, eFormModel)
    useEFormMethods(props, context, eFormModel, {
      submit,
      validate,
      validateField,
      resetFields,
      clearValidate
    })
    watch(
      () => props.formData.name,
      (newVal, oldVal) => {
        console.log('-> newVal,oldVal', newVal, oldVal)
      },
      { deep: true }
    )
    emit('getFormInstance', eFormModel)

    return {
      eFormModel,
      submit,
      validate,
      validateField,
      resetFields,
      clearValidate
    }
  }
})
</script>

<style lang="less" scoped>
.e-form-model {
  overflow: hidden;
}
</style>
