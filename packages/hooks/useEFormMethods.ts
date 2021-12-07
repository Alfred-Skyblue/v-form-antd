import { Ref, SetupContext, set as setRef } from '@vue/composition-api'
import { FormModel } from 'ant-design-vue'
import { IEFormComponent, IFormConfig } from '@pack/typings/EFormComponent'
import { findFormItem, formItemsForEach } from '@pack/utils'
import { cloneDeep, isFunction } from 'lodash-es'
import { IAnyObject } from '@pack/typings/baseType'

interface IFormInstanceMethods extends FormModel {
  submit: () => Promise<any>
}

interface IProps {
  formConfig: IFormConfig
  formData: IAnyObject
}

type ISet = <T extends keyof IEFormComponent>(
  field: string,
  key: T,
  value: IEFormComponent[T]
) => void
type IGet = (field: string) => IEFormComponent | undefined
type IGetValue = (field: string) => any
type ISetValue = (field: string, value: any) => void
type IHidden = (field: string) => void
type IShow = (field: string) => void
type ISetProps = (field: string, key: string, value: any) => void
type IGetData = () => Promise<IAnyObject>
interface ILinkOn {
  [key: string]: Set<(...arg: any[]) => void>
}

export interface IEFormMethods extends Partial<IFormInstanceMethods> {
  set: ISet
  get: IGet
  getValue: IGetValue
  setValue: ISetValue
  hidden: IHidden
  show: IShow
  setProps: ISetProps
  linkOn: ILinkOn
  getData: IGetData
}
export function useEFormMethods(
  props: IProps,
  context: SetupContext,
  formInstance: Ref<FormModel | null>,
  formInstanceMethods: Partial<IFormInstanceMethods>
): IEFormMethods {
  /**
   * 监听表单字段联动时触发
   * @type {{}}
   */
  const linkOn: ILinkOn = {}
  const initLink = (formItems: IEFormComponent[]) => {
    // 首次遍历，查找需要关联字段的表单
    formItemsForEach(formItems, formItem => {
      // 如果需要关联，则进行第二层遍历，查找表单中关联的字段，存到Set中
      formItemsForEach(formItems, item => {
        if (!linkOn[item.field!]) linkOn[item.field!] = new Set<() => void>()
        if (formItem.link?.includes(item.field!)) {
          isFunction(formItem.update) && linkOn[item.field!].add(formItem.update!)
        }
        // 如果自身存在update，则添加到Set中
        isFunction(item.update) && linkOn[item.field!].add(formItem.update!)
      })
    })
  }
  initLink(props.formConfig.formItems)

  /**
   * 根据field获取表单项
   * @param {string} field
   * @return {IEFormComponent | undefined}
   */
  const get: IGet = field =>
    cloneDeep(findFormItem(props.formConfig.formItems, item => item.field === field))

  /**
   * 根据表单field设置表单项字段值
   * @param {string} field
   * @param {keyof IEFormComponent} key
   * @param {never} value
   */
  const set: ISet = (field, key, value) => {
    const formItem = get(field)
    if (formItem) setRef(formItem, key, value)
  }

  /**
   * 设置表单项的props
   * @param {string} field 需要设置的表单项field
   * @param {string} key 需要设置的key
   * @param value 需要设置的值
   */
  const setProps: ISetProps = (field, key, value) => {
    const formItem = get(field)
    if (formItem) {
      if (formItem.props) setRef(formItem.props, key, value)
    }
  }
  /**
   * 设置字段的值，设置后触发校验
   * @param {string} field  需要设置的字段
   * @param value  需要设置的值
   */
  const setValue: ISetValue = (field, value) => {
    // props.formData[field] = value
    setRef(props.formData, field, value)
    formInstance.value?.validateField(field, errorMessage => errorMessage)
  }

  /**
   * 根据表单项field获取字段值，如果field为空，则
   * @param {string} field  需要设置的字段
   */
  const getValue: IGetValue = field => {
    const formData = cloneDeep(props.formData)
    return formData[field]
  }

  const getData: IGetData = async () => {
    return cloneDeep(props.formData)
  }
  /**
   * 隐藏指定表单项
   * @param {string} field 需要隐藏的表单项的field
   */
  const hidden: IHidden = field => {
    set(field, 'hidden', true)
  }

  /**
   * 显示表单项
   * @param {string} field 需要显示的表单项的field
   */
  const show: IShow = field => {
    set(field, 'hidden', false)
  }

  return {
    linkOn,
    setValue,
    getValue,
    hidden,
    show,
    set,
    get,
    setProps,
    getData,
    ...formInstanceMethods
  }
}
