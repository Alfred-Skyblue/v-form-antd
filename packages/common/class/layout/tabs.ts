import { BasicFormItem } from '@common/class/basic-form'
import type { IFormItemOptions } from '@common/types/form'

export interface ITabsColumn {
  value: string
  label: string
  list: BasicFormItem[]
}
export class Tabs extends BasicFormItem {
  static type = 'tabs'
  public type = Tabs.type
  public _isLayout = true
  public _tag!: 'ATabs'
  public icon = 'tabs'
  public label = '标签页布局'
  public props = {
    animated: true
  }
  public columns: ITabsColumn[] = []
  constructor(options?: IFormItemOptions) {
    super({ label: '标签页布局', ...options })
  }
}
