import { BasicFormItem } from '../basic-form'
import type { IAnyObject } from '@common/types'
import type { IFormItemOptions } from '@common/types/form'
import type { TreeSelectProps } from 'ant-design-vue'

export class TreeSelect extends BasicFormItem {
  static type = 'treeSelect'
  readonly type = TreeSelect.type
  readonly _tag = 'ATreeSelect'
  readonly icon = 'tree-select'
  public props: Partial<TreeSelectProps & IAnyObject> = {}
  constructor(options?: IFormItemOptions) {
    super({ label: '树形选择', ...options })
  }
}
