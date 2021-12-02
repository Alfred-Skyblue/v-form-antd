import { IAnyObject } from '@pack/typings/baseType'
import { Ref, SetupContext } from '@vue/composition-api'
import { FormModel } from 'ant-design-vue'
import { IEFormComponent, IFormConfig } from '@pack/typings/EFormComponent'
import { formItemsForEach } from '@pack/utils'
import { isFunction } from 'lodash-es'
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
  const linkOn: { [key: string]: Set<(...arg: any[]) => void> } = {}

  const initLink = (formItems: IEFormComponent[]) => {
    // 首次遍历，查找需要关联字段的表单
    formItemsForEach(formItems, formItem => {
      // 如果需要关联，则进行第二层遍历，查找表单中关联的字段，存到Set中
      formItemsForEach(formItems, item => {
        if (formItem.link?.includes(item.field!)) {
          if (!linkOn[item.field!]) linkOn[item.field!] = new Set<() => void>()
          isFunction(formItem.update) && linkOn[item.field!].add(formItem.update!)
          // 如果自身存在update，则添加到Set中
          isFunction(item.update) && linkOn[item.field!].add(formItem.update!)
        }
      })
    })
  }
  initLink(props.formConfig.formItems)
  return { linkOn }
}
