import { BasicFormItem } from '../basic-form'
import type { IFormItemOptions } from '@common/types/form'
import type { CascaderProps } from 'ant-design-vue'
import type { IAnyObject } from '@common/types'

export class Cascader extends BasicFormItem {
  static type = 'cascader'
  readonly _tag = 'ACascader'
  readonly type = Cascader.type
  readonly icon = 'cascader'
  public props: Partial<CascaderProps & IAnyObject> = {
    options: []
  }
  constructor(options?: IFormItemOptions) {
    super({ label: '级联选择', ...options })
  }
}
