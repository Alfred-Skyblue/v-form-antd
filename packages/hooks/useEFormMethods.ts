import { IAnyObject } from '@pack/typings/baseType'
import { Ref, SetupContext } from '@vue/composition-api'
import { FormModel } from 'ant-design-vue'
import { IFormConfig } from '@pack/typings/EFormComponent'
interface IFormInstanceMethods extends FormModel {
  submit: () => Promise<any>
}

export function useEFormMethods(
  props: IAnyObject,
  context: SetupContext,
  formInstance: Ref<FormModel | null>,
  formConfig: IFormConfig,
  formInstanceMethods: Partial<IFormInstanceMethods>
) {
  return {}
}
