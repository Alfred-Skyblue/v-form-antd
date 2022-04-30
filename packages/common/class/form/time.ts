import { BasicFormItem } from '../basic-form'
import type { IAnyObject } from '@common/types'
import type { IFormItemOptions } from '@common/types/form'
import type { TimePickerProps } from 'ant-design-vue'

export class Time extends BasicFormItem {
  readonly _tag = 'ATimePicker'
  readonly type = 'time'
  readonly icon = 'time-picker'

  public props: Partial<TimePickerProps & IAnyObject> = {
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
