import type { IAnyObject } from '@common/types/index'

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
