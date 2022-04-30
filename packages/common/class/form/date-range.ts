import { BasicFormItem } from '../basic-form'
import type { IFormItemOptions } from '@common/types/form'
import type { RangePickerProps } from 'ant-design-vue/es/vc-picker'
import type { IAnyObject } from '@common/types'

export class DateRange extends BasicFormItem {
  readonly _tag = 'ARangePicker'
  readonly type = 'dateRange'
  readonly icon = 'date-range'
  public props: Partial<RangePickerProps<any> & IAnyObject> = {}
  constructor(options?: IFormItemOptions) {
    super({ label: '日期范围', ...options })
  }
}
