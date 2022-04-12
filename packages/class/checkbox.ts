import { BasicFormItem } from '@/class/basic-form'
import type { IAnyObject } from '@/types'

interface ICheckboxProps extends IAnyObject {
  /**
   * get focus when component mounted
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
  public props: Partial<ICheckboxProps> = {
    autoFocus: undefined,
    checked: undefined,
    disabled: undefined,
    indeterminate: undefined
  }
  constructor(label: string, field: string) {
    super(label, field)
  }
}
