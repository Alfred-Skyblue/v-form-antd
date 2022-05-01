import { BasicFormItem } from '../basic-form'
import type { IAnyObject } from '@common/types'
import type { IFormItemOptions } from '@common/types/form'
import type { InputNumberProps } from 'ant-design-vue'

/**
 * @class VNumber
 */
export class VNumber extends BasicFormItem {
  static type = 'number'
  readonly type = VNumber.type
  readonly _tag = 'AInputNumber'
  readonly icon = 'number'
  // props
  public props: Partial<InputNumberProps & IAnyObject> = {
    autoFocus: undefined,
    defaultValue: undefined,
    disabled: undefined,
    max: undefined,
    min: undefined,
    precision: undefined,
    decimalSeparator: undefined,
    size: undefined,
    step: undefined,
    value: undefined
  }

  constructor(options?: IFormItemOptions) {
    super({ label: '数字输入框', ...options })
  }
}
