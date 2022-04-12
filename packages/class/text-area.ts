import type { InputProps } from '@/class/input'
import { Input } from '@/class/input'

type VITextArea = Pick<
  InputProps,
  'allowClear' | 'defaultValue' | 'showCount' | 'value'
> & {
  autosize: boolean | { minRows: number; maxRows: number }
}

/**
 * @class TextArea
 */
export class TextArea extends Input {
  public type = 'textarea'
  public props: Partial<VITextArea> = {}
  constructor(label: string, field: string) {
    super(label, field)
  }
}
