import { BasicFormItem } from './basic-form'
import type { IAnyObject } from '@common/types'
import type { IFormItemOptions } from '@common/types/form'

interface ICheckbox extends IAnyObject {
  /**
   * get focus when components mounted
   * @default false
   * @type boolean
   */
  autoFocus: boolean

  /**
   * Specifies whether the checkbox is selected.
   * @default false
   * @type boolean
   */
  checked: boolean

  /**
   * Disable checkbox
   * @default false
   * @type boolean
   */
  disabled: boolean

  /**
   * indeterminate checked state of checkbox
   * @default false
   * @type boolean
   */
  indeterminate: boolean
}

export class Checkbox extends BasicFormItem {
  readonly _tag = 'ACheckbox'
  readonly type = 'checkbox'
  readonly icon = 'checkbox'
  public props: Partial<ICheckbox> = {
    autoFocus: undefined,
    checked: undefined,
    disabled: undefined,
    indeterminate: undefined
  }
  constructor(options?: IFormItemOptions) {
    super({ label: '复选框', ...options })
  }
}
