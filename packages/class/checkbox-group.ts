import { BasicFormItem } from '@/class/basic-form'
import type { IAnyObject } from '@/types'

interface ICheckboxGroup extends IAnyObject {
  disabled: boolean
  name: string
  options:
    | string[]
    | Array<{
        label: string
        value: string
        disabled?: boolean
        indeterminate?: boolean
        onChange?: (...args: any[]) => any
      }>
  value: string[]
}
export class CheckboxGroup extends BasicFormItem {
  public props: Partial<ICheckboxGroup> = {
    disabled: undefined,
    name: undefined,
    options: undefined,
    value: undefined
  }
  constructor(label: string, field: string) {
    super(label, field)
  }
}
