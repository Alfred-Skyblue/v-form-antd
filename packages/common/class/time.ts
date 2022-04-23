import { BasicFormItem } from './basic-form'
import type { IAnyFunction, IAnyObject } from '@common/types'
import type { IFormItemOptions } from '@common/types/form'

interface ITimePicker extends IAnyObject {
  /**
   * allow clearing text
   * @default true
   * @type boolean
   */
  allowClear: boolean

  /**
   * get focus when components mounted
   * @default false
   * @type boolean
   */
  autoFocus: boolean

  bordered: boolean
  /**
   * clear tooltip of icon
   * @default 'clear'
   * @type string
   */
  clearText: string

  /**
   * to set default time
   */
  defaultValue: any

  /**
   * determine whether the Time is disabled
   * @default false
   * @type boolean
   */
  disabled: boolean

  /**
   * to specify the hours that cannot be selected
   * @type Function
   */
  disabledHours: IAnyFunction

  /**
   * to specify the minutes that cannot be selected
   * @type Function
   */
  disabledMinutes: (selectedHour: any) => any

  /**
   * to specify the seconds that cannot be selected
   * @type Function
   */
  disabledSeconds: (selectedHour: any, selectedMinute: any) => any

  /**
   * to set the time format
   * @default "HH:mm:ss"
   * @type string
   */
  format: string

  /**
   * to set the container of the floating layer, while the default is to create a div element in body
   * @type Function
   */
  getPopupContainer: (trigger: any) => any

  /**
   * hide the options that can not be selected
   * @default false
   * @type boolean
   */
  hideDisabledOptions: boolean

  /**
   * interval between hours in picker
   * @default 1
   * @type number
   */
  hourStep: number

  /**
   * Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices)
   * @default false
   * @type boolean
   */
  inputReadOnly: boolean

  /**
   * interval between minutes in picker
   * @default 1
   * @type number
   */
  minuteStep: number

  /**
   * whether to popup panel
   * @default false
   * @type boolean
   */
  open: boolean

  /**
   * display when there's no value
   * @default "Select a time"
   * @type string
   */
  placeholder: string

  /**
   * className of panel
   * @type string
   */
  popupClassName: string

  popupStyle: IAnyObject

  /**
   * interval between seconds in picker
   * @default 1
   * @type number
   */
  secondStep: number

  /**
   * The custom suffix icon
   * @type any (string | VNode | slot)
   */
  suffixIcon: any

  showNow: boolean

  /**
   * display as 12 hours format, with default format h:mm:ss a
   * @default false
   * @type boolean
   */
  use12Hours: boolean

  /**
   * to set time
   */
  value: any

  /**
   * Time picker size
   * @default 'default'
   * @type string
   */
  size: 'large' | 'default' | 'small'
}
export class Time extends BasicFormItem {
  readonly _tag = 'ATimePicker'
  readonly type = 'time'
  readonly icon = 'time-picker'

  public props: Partial<ITimePicker> = {
    allowClear: undefined,
    bordered: undefined,
    clearText: undefined,
    defaultValue: undefined,
    disabled: undefined,
    disabledHours: undefined,
    disabledMinutes: undefined,
    disabledSeconds: undefined,
    format: undefined,
    getPopupContainer: undefined,
    hideDisabledOptions: undefined,
    hourStep: undefined,
    inputReadOnly: undefined,
    minuteStep: undefined,
    open: undefined,
    placeholder: undefined,
    popupClassName: undefined,
    popupStyle: undefined,
    secondStep: undefined,
    suffixIcon: undefined,
    showNow: undefined,
    use12Hours: undefined,
    value: undefined,
    size: undefined
  }
  constructor(options?: IFormItemOptions) {
    super({ label: '时间选择', ...options })
  }
}
