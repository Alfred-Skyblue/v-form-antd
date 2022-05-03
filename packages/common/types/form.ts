import type { IAnyObject } from '@common/types/index'
import type { BasicFormItem } from '@common/class/basic-form'
import type { VForm } from '@common/class/form/form'

export interface IFormItemOptions extends IAnyObject {
  label?: string
  field?: string
  hidden?: boolean
}

export interface ISelectOption {
  label: string
  value: string
  children?: ISelectOption[]
}

type VRenderOptions = Partial<BasicFormItem> & IAnyObject

export interface VFormConfig extends IAnyObject {
  formItems: VRenderOptions[]
  config: Partial<VForm> & IAnyObject
}
