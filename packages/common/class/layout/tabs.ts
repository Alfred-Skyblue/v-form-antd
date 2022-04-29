import { BasicFormItem } from '@common/class/basic-form'

export class Tabs extends BasicFormItem {
  public _isLayout = true
  public _tag!: string
  public type = 'grid'
  public icon = 'grid'
  public label = '栅格布局'
  public props = {}
}
