import { BasicFormItem } from '../basic-form'
import type { IAnyObject } from '@common/types'
import type { IFormItemOptions } from '@common/types/form'
import type { SelectProps } from 'ant-design-vue'

export class Select extends BasicFormItem {
  static type = 'select'
  readonly type = Select.type
  readonly _tag = 'ASelect'
  readonly icon = 'select'
  public props: Partial<SelectProps & IAnyObject> = {
    mode: undefined,
    maxTagCount: undefined,
    maxTagTextLength: undefined,
    notFoundContent: undefined,
    optionFilterProp: undefined,
    optionLabelProp: undefined,
    placeholder: undefined,
    showSearch: undefined,
    showArrow: undefined,
    size: undefined,
    tokenSeparators: undefined,
    value: undefined,
    defaultOpen: undefined,
    open: undefined,
    options: []
  }
  constructor(options?: IFormItemOptions) {
    super({ label: '下拉选择', ...options })
  }
}
