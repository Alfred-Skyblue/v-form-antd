import { BasicFormItem } from '../basic-form'
import type { IAnyObject } from '@common/types'
import type { IFormItemOptions } from '@common/types/form'
import type { InputProps } from 'ant-design-vue'

export class Input extends BasicFormItem {
  readonly _tag = 'AInput'
  readonly icon = 'input'
  // componentType
  readonly type = 'input'
  // props
  public props: Partial<InputProps & IAnyObject> = {
    // link: [],
    addonAfter: undefined,
    addonBefore: undefined,
    defaultValue: undefined,
    disabled: undefined,
    id: undefined,
    prefix: undefined,
    size: undefined,
    suffix: undefined,
    showCount: undefined,
    allowClear: undefined
  }

  constructor(options?: IFormItemOptions) {
    super({ label: '输入框', ...options })
  }
}
