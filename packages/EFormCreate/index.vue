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
        @change="handleChange"
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
import { IEFormComponent, IFormConfig } from '@pack/typings/EFormComponent'
import { FormModel } from 'ant-design-vue/types/form-model/form'
import { useFormInstanceMethods } from '@pack/hooks/useFormInstanceMethods'
import { useEFormMethods } from '@pack/hooks/useEFormMethods'
import { isFunction } from 'lodash-es'
import { formItemsForEach } from '@pack/utils'

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
    useEFormMethods(props, context, eFormModel, props.formConfig, {
      submit,
      validate,
      validateField,
      resetFields,
      clearValidate
    })
    const linkOn: { [key: string]: Array<() => void> } = {}
    const initLink = () => {
      function traverse(formItems: IEFormComponent[]) {
        // 首次遍历，查找需要关联字段的表单
        formItemsForEach(formItems, formItem => {
          // 如果需要关联，则进行第二层遍历，查找表单中关联的字段，存到数组中
          formItemsForEach(formItems, item => {
            if (formItem.link?.includes(item.field!)) {
              if (!linkOn[item.field!]) linkOn[item.field!] = []
              isFunction(formItem.update) &&
                linkOn[item.field!].push(formItem.update!)
            }
          })
        })
      }
      traverse(props.formConfig.formItems)
    }
    initLink()
    const handleChange = (event: any) => {
      linkOn[event.field] && linkOn[event.field].forEach(cb => cb())
    }
    emit('getFormInstance', eFormModel)

    return {
      eFormModel,
      submit,
      validate,
      validateField,
      resetFields,
      clearValidate,
      handleChange
    }
  }
})
</script>

<style lang="less" scoped>
.e-form-model {
  overflow: hidden;
}
</style>
