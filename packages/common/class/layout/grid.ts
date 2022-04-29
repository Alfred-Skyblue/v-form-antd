import type { Col } from '@common/class/layout/col'
import { BasicFormItem } from '@common/class/basic-form'

interface IGridProps {
  align?: 'top' | 'middle' | 'bottom'
  gutter?: any
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between'
  wrap?: boolean
}
export class GridComponent extends BasicFormItem {
  public _isLayout = true
  public _tag!: string
  public type = 'grid'
  public icon = 'grid'
  public label = '栅格布局'
  public props!: IGridProps
  public columns: Col[] = [
    {
      span: 12,
      list: []
    },
    {
      span: 12,
      list: []
    }
  ]
}
