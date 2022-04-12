import { BasicFormItem } from '@/class/basic-form'
import type { IAnyObject } from '@/types'

interface IRadioGroupProps extends IAnyObject {
  disabled: boolean
  name: string
  options:
    | string[]
    | Array<{ label: string; value: string; disabled?: boolean }>
  size: 'large' | 'default' | 'small'
  buttonStyle: 'outline' | 'solid'
  optionType: 'button' | 'default'
}
export class RadioGroup extends BasicFormItem {
  public props: Partial<IRadioGroupProps> = {
    defaultValue: undefined,
    disabled: undefined,
    name: undefined,
    options: undefined,
    size: undefined,
    buttonStyle: undefined
  }
  constructor(label: string, field: string) {
    super(label, field)
  }
}
