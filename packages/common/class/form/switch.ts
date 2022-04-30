import { BasicFormItem } from '../basic-form'
import type { IAnyObject } from '@common/types'
import type { IFormItemOptions } from '@common/types/form'
import type { SwitchProps } from 'ant-design-vue'

export class Switch extends BasicFormItem {
  readonly _tag = 'ASwitch'
  readonly type = 'switch'
  readonly icon = 'switch'
  public props: Partial<SwitchProps & IAnyObject> = {
    autoFocus: false,
    checked: false,
    checkedValue: 'boolean',
    disabled: false,
    size: 'default',
    unCheckedValue: false
  }
  constructor(options?: IFormItemOptions) {
    super({ label: '开关', ...options })
  }
}
