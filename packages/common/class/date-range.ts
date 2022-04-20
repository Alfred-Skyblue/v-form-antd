import { BasicFormItem } from './basic-form'
import type { IDatePickerCommon } from '../types/date'
import type { IFormItemOptions } from '@common/types/form'

interface IDateRange extends Omit<IDatePickerCommon, 'disabled'> {
  allowEmpty: [boolean, boolean]

  /**
   * to set default picker date
   */
  defaultPickerValue: any[]

  disabled: [boolean, boolean]
  /**
   * to specify the time that cannot be selected
   * @type Function
   */
  disabledTime: (...args: []) => any

  /**
   * to set the date format, refer to moment.js
   * @default 'YYYY-MM-DD HH:mm:ss'
   * @type string
   * @see http://momentjs.com
   */
  format: string

  /**
   * preseted ranges for quick selection
   * @type object
   */
  ranges: { [range: string]: any[] } | { [range: string]: () => any[] }

  /**
   * class extra footer in panel by setting a scoped slot
   * @type any (slot="renderExtraFooter")
   */
  renderExtraFooter: any

  separator: any
  /**
   * to provide an additional time selection
   * showTime.defaultValue to set default time of selected date - type Moment[]
   * @default Time Options
   * @type object | boolean
   */
  showTime: object | boolean

  /**
   * to set date
   */
  value: any[]
}

export class DateRange extends BasicFormItem {
  readonly _tag = 'ARangePicker'
  readonly type = 'dateRange'
  readonly icon = 'date-range'
  public props: Partial<IDateRange> = {
    mode: undefined,
    picker: undefined,
    showTime: false,
    allowClear: true,
    bordered: true,
    autoFocus: false,
    open: false,
    placeholder: undefined,
    dropdownClassName: undefined,
    size: undefined,
    suffixIcon: undefined,
    prevIcon: undefined,
    nextIcon: undefined,
    superNextIcon: undefined,
    superPrevIcon: undefined,
    inputReadOnly: undefined,
    valueFormat: undefined
  }
  constructor(options?: IFormItemOptions) {
    super({ label: '日期范围', ...options })
  }
}
