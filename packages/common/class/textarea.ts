import type { IInput } from './/input'
import { BasicFormItem } from './basic-form'

type ITextarea = Pick<
  IInput,
  'allowClear' | 'defaultValue' | 'showCount' | 'value'
> & {
  autoSize: boolean | { minRows: number; maxRows: number }
}

/**
 * @class Textarea
 */
export class Textarea extends BasicFormItem {
  readonly tag = 'ATextarea'
  readonly type = 'textarea'
  readonly icon = 'textarea'
  public props: Partial<ITextarea> = {
    autoSize: undefined,
    allowClear: undefined,
    showCount: undefined,
    value: undefined
  }
  constructor(label = '文本域') {
    super(label)
  }
}
