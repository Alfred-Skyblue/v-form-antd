import { BasicFormItem } from './basic-form'
import type { IAnyObject } from '@design/types'

interface ISwitch extends IAnyObject {
  /**
   * get focus when component mounted
   * @default false
   * @type boolean
   */
  autoFocus: boolean

  /**
   * determine whether the Switch is checked
   * @default false
   * @type boolean
   */
  checked: boolean

  /**
   * content to be shown when the state is checked
   * @type any (string | slot)
   */
  checkedChildren: any

  checkedValue: 'boolean' | 'string' | 'number'

  /**
   * Disable switch
   * @default false
   * @type boolean
   */
  disabled: boolean

  /**
   * loading state of switch
   * @default false
   * @type boolean
   */
  loading: boolean

  /**
   * the size of the Switch, options: default small
   * @default 'default'
   * @type string
   */
  size: 'small' | 'default'

  /**
   * content to be shown when the state is unchecked
   * @type any (string | slot)
   */
  unCheckedChildren: any

  unCheckedValue: any
}
export class Switch extends BasicFormItem {
  readonly _tag = 'ASwitch'
  readonly type = 'switch'
  readonly icon = 'switch'
  public props: Partial<ISwitch> = {
    autoFocus: false,
    checked: false,
    checkedValue: 'boolean',
    disabled: false,
    size: 'default',
    unCheckedValue: false
  }
  constructor(label = '开关') {
    super(label)
  }
}
