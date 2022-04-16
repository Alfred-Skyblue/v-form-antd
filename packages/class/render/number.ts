import { BasicFormItem } from './basic-form'
import type { Slot } from 'vue'
import type { IAnyObject } from '@/types'
interface INumber extends IAnyObject {
  /**
   * after label
   */
  addonAfter: Slot

  /**
   * before label
   */
  addonBefore: Slot

  /**
   * 前缀
   */
  prefix: Slot

  /**
   * border
   */
  bordered: boolean

  /**
   * 键盘事件
   */
  keyboard: boolean
  /**
   * get focus when component mounted
   * @default false
   * @type boolean
   */
  autoFocus: boolean

  /**
   * initial value
   * @type number
   */
  defaultValue: number

  controls: boolean

  /**
   * disable the input
   * @default false
   * @type boolean
   */
  disabled: boolean

  /**
   * Specifies the format of the value presented
   * @type Function
   */
  formatter: (
    value: number | string,
    info: { userTyping: boolean; input: string }
  ) => string

  /**
   * max value
   * @default Infinity
   * @type number
   */
  max: number

  /**
   * mix value
   * @default Infinity
   * @type number
   */
  min: number

  /**
   * Specifies the value extracted from formatter
   * @type Function
   */
  parser: (string: string) => number

  /**
   * precision of input value
   * @type number
   */
  precision: number

  /**
   * decimal separator
   * @type string
   */
  decimalSeparator: string

  /**
   * width of input box
   * @default 'default'
   * @type string
   */
  size: 'large' | 'small' | 'default'

  /**
   * The number to which the current value is increased or decreased. It can be an integer or decimal.
   * @default 1
   * @type number | string
   */
  step: number | string

  /**
   * current value
   * @type number | string
   */
  value: number

  /**
   * 字符值模式，开启后支持高精度小数。同时 change 事件将返回 string 类型
   */
  stringMode: boolean
}

/**
 * @class VNumber
 */
export class VNumber extends BasicFormItem {
  readonly tag = 'AInputNumber'
  readonly icon = 'number'
  readonly type = 'number'
  // props
  public props: Partial<INumber> = {
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
  constructor(label = '数字输入框') {
    super(label)
  }
}
