import { BasicFormItem } from '../basic-form'
import type { IAnyObject } from '@common/types'
import type { IFormItemOptions } from '@common/types/form'
import type { RadioProps } from 'ant-design-vue'

export class Radio extends BasicFormItem {
  static type = 'radio'
  readonly type = Radio.type
  readonly _tag = 'ARadioGroup'
  readonly icon = 'radio'
  public props: Partial<RadioProps & IAnyObject> = {
    autoFocus: undefined,
    checked: undefined,
    disabled: undefined,
    value: undefined
  }
  constructor(options?: IFormItemOptions) {
    super({ label: '单选框', ...options })
  }
}
