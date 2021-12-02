<!--
 * @Author: 杨攀腾
 * @Date: 2021/11/29
 * @Description: 根据json生成表单
-->
<template>
  <div class="e-form-container">
    <a-form-model
      class="e-form-model"
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
      >
        <template :slot="record.props.slotName">
          <slot :name="record.props.slotName" v-bind="{ formModel: formData, field: record.field, record }" />
        </template>
      </FormRender>
    </a-form-model>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, ref } from '@vue/composition-api'
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
    const { submit, validate, validateField, resetFields, clearValidate } = useFormInstanceMethods(
      props,
      context,
      eFormModel
    )
    const { linkOn } = useEFormMethods(props, context, eFormModel, props.formConfig, {
      submit,
      validate,
      validateField,
      resetFields,
      clearValidate
    })

    const handleChange = (event: any) => linkOn[event.field] && linkOn[event.field].forEach(cb => cb())
    const formModelProps = computed(() => {
      const { layout } = props.formConfig.config
      return { layout }
    })
    emit('getFormInstance', eFormModel)

    return {
      eFormModel,
      submit,
      validate,
      validateField,
      resetFields,
      clearValidate,
      handleChange,
      formModelProps
    }
  }
})
</script>

<style lang="less" scoped>
.e-form-model {
  overflow: hidden;
}
</style>
