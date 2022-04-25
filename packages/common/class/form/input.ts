import { BasicFormItem } from '../basic-form'
import type { IAnyObject, StringAndSlot } from '@common/types'
import type { IFormItemOptions } from '@common/types/form'
export interface IInput extends IAnyObject {
  /**
   * The label text displayed after (on the right side of) the input field.
   * @type any (string | slot)
   */
  addonAfter: StringAndSlot
  placeholder: string

  /**
   * The label text displayed before (on the left side of) the input field.
   * @type any (string | slot)
   */
  addonBefore: StringAndSlot

  /**
   * The initial input content
   * @type string
   */
  defaultValue: string | number

  /**
   * The input content value
   * @type string | number
   */
  value: string | number

  /**
   * Whether the input is disabled.
   * @default false
   * @type boolean
   */
  disabled: boolean

  /**
   * The ID for input
   * @type string
   */
  id: string

  maxlength: number
  /**
   * The prefix icon for the Input.
   * @type any (string | slot)
   */
  prefix: StringAndSlot

  /**
   * The size of the input box. Note: in the context of a form, the large size is used. Available: large default small
   * @default 'default'
   * @type string
   */
  size: 'small' | 'large' | 'default'

  /**
   * The suffix icon for the Input.
   * @type any (string | slot)
   */
  suffix: StringAndSlot

  /**
   * The showCount of reveal text count.
   * @type boolean
   */
  showCount: boolean

  allowClear?: boolean
}

export class Input extends BasicFormItem {
  readonly _tag = 'AInput'
  readonly icon = 'input'
  // componentType
  readonly type = 'input'
  // props
  public props: Partial<IInput> = {
    // link: [],
    addonAfter: undefined,
    addonBefore: undefined,
    defaultValue: undefined,
    disabled: undefined,
    id: undefined,
    prefix: undefined,
    size: undefined,
    suffix: undefined,
    showCount: undefined,
    allowClear: undefined
  }

  constructor(options?: IFormItemOptions) {
    super({ label: '输入框', ...options })
  }
}