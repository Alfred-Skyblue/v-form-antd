import { BasicFormItem } from '../basic-form'
import type { IFormItemOptions } from '@common/types/form'
import type { DatePickerProps } from 'ant-design-vue'
import type { IAnyObject } from '@common/types'

export class DatePicker extends BasicFormItem {
  readonly _tag = 'ADatePicker'
  readonly type = 'date'
  readonly icon = 'date-picker'
  public props: Partial<DatePickerProps & IAnyObject> = {
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
  constructor(options?: IFormItemOptions) {
    super({ label: '日期选择', ...options })
  }
}
