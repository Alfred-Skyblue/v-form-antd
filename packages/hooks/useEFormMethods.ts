import { IAnyObject } from '@pack/typings/baseType'
import { Ref, SetupContext, watch } from '@vue/composition-api'
import { FormModel } from 'ant-design-vue'
interface IFormInstanceMethods extends FormModel {
  submit: () => Promise<any>
}
export function useEFormMethods(
  props: IAnyObject,
  context: SetupContext,
  formInstance: Ref<FormModel | null>,
  formInstanceMethods: Partial<IFormInstanceMethods>
) {
  watch(
    () => props.formData,
    (newVal, oldVal) => {
      console.log('-> newVal,oldVal', newVal, oldVal)
    },
    { deep: true }
  )

  return {}
}
