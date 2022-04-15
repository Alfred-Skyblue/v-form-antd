import { BasicFormItem } from '@/class/basic-form'
import type { IDatePickerCommon } from '@/types/date'
import type { Slot } from 'vue'

interface IDatePicker extends IDatePickerCommon {
  /**
   * Default Picker Value
   * @description to set default picker date
   * @default undefined
   */
  defaultPickerValue: object | string

  /**
   * Disabled Time
   * @description to specify the time that cannot be selected
   * @default undefined
   * @type Function (function(date))
   */
  disabledTime: (...args: any[]) => any

  /**
   * Format
   * @default 'YYYY-MM-DD'
   * @type string
   */
  format: string

  /**
   * Render Extra Footer
   * @description render extra footer in panel by setting a scoped slot
   * @default undefined
   * @type any (slot="renderExtraFooter")
   */
  renderExtraFooter: Slot

  showNow: boolean
  /**
   * Show Time
   * @description to provide an additional time selection
   * --
   * @default Time Options
   * @type object | boolean
   */
  showTime: object | boolean

  /**
   * Show Today
   * @description whether to show "Today" button
   * @default true
   * @type boolean
   */
  showToday: boolean

  /**
   * Value
   * @description to set date
   * @default undefined
   */
  value: object | string
}

export class DatePicker extends BasicFormItem {
  readonly tag = 'ADatePicker'
  readonly type = 'date'
  readonly icon = 'date-picker'
  public props: Partial<IDatePicker> = {
    allowClear: undefined,
    autoFocus: undefined,
    bordered: undefined,
    disabled: undefined,
    format: undefined,
    locale: undefined,
    open: undefined,
    placeholder: undefined,
    popupStyle: undefined,
    showNow: undefined,
    showToday: undefined,
    size: undefined,
    suffixIcon: undefined,
    mode: undefined,
    picker: undefined,
    superNextIcon: undefined,
    superPrevIcon: undefined,
    inputReadOnly: undefined,
    valueFormat: undefined
  }
  constructor(label = '日期选择') {
    super(label)
  }
}
