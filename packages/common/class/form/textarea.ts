import type { IInput } from './/input'
import { BasicFormItem } from '../basic-form'
import type { IFormItemOptions } from '@common/types/form'

type ITextarea = Pick<
  IInput,
  'allowClear' | 'defaultValue' | 'showCount' | 'value'
> & {
  autosize: boolean | { minRows: number; maxRows: number }
}

/**
 * @class Textarea
 */
export class Textarea extends BasicFormItem {
  readonly _tag = 'ATextarea'
  readonly type = 'textarea'
  readonly icon = 'textarea'
  public props: Partial<ITextarea> = {
    autosize: undefined,
    allowClear: undefined,
    showCount: undefined,
    value: undefined
  }
  constructor(options?: IFormItemOptions) {
    super({ label: '文本域', ...options })
  }
}
