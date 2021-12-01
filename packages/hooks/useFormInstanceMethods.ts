import { IAnyObject } from '@pack/typings/baseType'
import { Ref, SetupContext } from '@vue/composition-api'
import { FormModel } from 'ant-design-vue'

export function useFormInstanceMethods(
  props: IAnyObject,
  context: SetupContext,
  formInstance: Ref<FormModel | null>
) {
  const { emit } = context
  /**
   * 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise
   * @param callback
   */
  const validate: FormModel['validate'] = callback =>
    formInstance.value?.validate(callback)

  /**
   * 对部分表单字段进行校验
   * @param props
   * @param callback
   */
  const validateField: FormModel['validateField'] = (props, callback) =>
    formInstance.value?.validateField(props, callback)

  /**
   * 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
   */
  const resetFields: FormModel['resetFields'] = () =>
    formInstance.value?.resetFields()

  /**
   * 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果
   * @param props
   */
  const clearValidate: FormModel['clearValidate'] = props =>
    formInstance.value?.clearValidate(props)

  const submit = async () => {
    await validate()
    emit('submit', props.formData)
    props.formConfig.config.submit?.(props.formData)
    return props.formData
  }

  return {
    validate,
    validateField,
    resetFields,
    clearValidate,
    submit
  }
}
