import { BasicFormItem } from '../basic-form'
import type { IFormItemOptions } from '@common/types/form'
import type { TextAreaProps } from 'ant-design-vue'
import type { IAnyObject } from '@common/types'

/**
 * @class Textarea
 */
export class Textarea extends BasicFormItem {
  readonly _tag = 'ATextarea'
  readonly type = 'textarea'
  readonly icon = 'textarea'
  public props: Partial<TextAreaProps & IAnyObject> = {
    autosize: undefined,
    allowClear: undefined,
    showCount: undefined,
    value: undefined
  }
  constructor(options?: IFormItemOptions) {
    super({ label: '文本域', ...options })
  }
}
