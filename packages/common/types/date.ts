import type { Slot } from 'vue'
import type { IAnyObject } from './index'

export interface IDatePickerCommon extends IAnyObject {
  /**
   * Whether to show clear button
   * @default true
   * @type boolean
   */
  allowClear: boolean

  bordered: boolean
  /**
   * get focus when components mounted
   * @default false
   * @type boolean
   */
  autoFocus: boolean

  /**
   * custom rendering function for date cells by setting a scoped slot
   * @type any (slot="dateRender" slot-scope="current, today")
   */
  dateRender: Slot

  /**
   * determine whether the DatePicker is disabled
   * @default false
   * @type boolean
   */
  disabled: boolean

  /**
   * specify the date that cannot be selected
   * @type Function
   */
  disabledDate: (...args: any[]) => boolean

  /**
   * to set the container of the floating layer, while the default is to create a div element in body
   * @type Function
   */
  getCalendarContainer: (trigger: any) => any

  /**
   * localization configuration
   * @type any
   */
  locale: any

  /**
   * open state of picker
   * @type boolean
   */
  open: boolean

  /**
   * placeholder of date input
   * @type string | string[]
   */
  placeholder: string | string[]

  /**
   * to customize the style of the popup calendar
   * @type object
   */
  popupStyle: Partial<CSSStyleDeclaration>

  /**
   * to customize the className of the popup calendar
   * @type string
   */
  dropdownClassName: string

  getPopupContainer: (trigger: any) => any
  /**
   * determine the size of the input box, the height of large and small, are 40px and 24px respectively, while default size is 32px
   * @type string
   */
  size: 'large' | 'small' | 'default'

  /**
   * The custom suffix icon
   * @type any (VNode | slot)
   */
  suffixIcon: Slot
  mode: 'time' | 'date' | 'month' | 'year' | 'decade'
  picker: 'date' | 'week' | 'month' | 'quarter' | 'year'
  prevIcon: Slot
  nextIcon: Slot
  superNextIcon: Slot
  superPrevIcon: Slot
  inputReadOnly: boolean
  valueFormat: string
}
