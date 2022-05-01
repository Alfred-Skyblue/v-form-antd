import { BasicFormItem } from '../basic-form'
import type { IAnyObject } from '@common/types'
import type { IFormItemOptions } from '@common/types/form'
import type { CheckboxProps } from 'ant-design-vue'

export class Checkbox extends BasicFormItem {
  static type = 'checkbox'
  readonly _tag = 'ACheckboxGroup'
  readonly type = Checkbox.type
  readonly icon = 'checkbox'
  public props: Partial<CheckboxProps & IAnyObject> = {
    checked: undefined,
    disabled: undefined,
    indeterminate: undefined
  }
  constructor(options?: IFormItemOptions) {
    super({ label: '复选框', ...options })
  }
}
