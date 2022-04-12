import { BasicFormItem } from '@/class/basic-form'
import type { IAnyObject } from '@/types'

interface IRadioProps extends IAnyObject {
  /**
   * get focus when component mounted
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
  public props: Partial<IRadioProps> = {
    autoFocus: undefined,
    checked: undefined,
    disabled: undefined,
    value: undefined
  }
  constructor(label: string, field: string) {
    super(label, field)
  }
}
