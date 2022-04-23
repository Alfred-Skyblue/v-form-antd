import { BasicFormItem } from './basic-form'
import type { IAnyObject } from '@common/types'
import type { IFormItemOptions } from '@common/types/form'

interface IRadio extends IAnyObject {
  /**
   * get focus when components mounted
   * @default false
   * @type boolean
   */
  autoFocus: boolean

  /**
   * Specifies whether the radio is selected.
   * @type boolean
   */
  checked: boolean

  /**
   * Disable radio
   * @default false
   * @type boolean
   */
  disabled: boolean

  /**
   * According to value for comparison, to determine whether the selected
   * @type any
   */
  value: any
}

export class Radio extends BasicFormItem {
  readonly _tag = 'ARadio'
  readonly icon = 'radio'
  readonly type = 'radio'
  public props: Partial<IRadio> = {
    autoFocus: undefined,
    checked: undefined,
    disabled: undefined,
    value: undefined
  }
  constructor(options?: IFormItemOptions) {
    super({ label: '单选框', ...options })
  }
}
