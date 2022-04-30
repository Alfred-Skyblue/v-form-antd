import { BasicFormItem } from '@common/class/basic-form'

export interface ITabsColumn {
  value: string
  label: string
  list: BasicFormItem[]
}
export class Tabs extends BasicFormItem {
  public _isLayout = true
  public _tag!: 'ATabs'
  public type = 'tabs'
  public icon = 'tabs'
  public label = '标签页布局'
  public props = {
    animated: true
  }
  public columns: ITabsColumn[] = []
}
