import type { IAnyObject } from '@common/types'
import type { Col } from '@common/layout/col'
import { BasicFormItem } from '@common/class/basic-form'

interface IGridProps {
  align?: 'top' | 'middle' | 'bottom'
  gutter?: any
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between'
  wrap?: boolean
}
export class GridComponent extends BasicFormItem {
  public _tag!: string
  public type = 'ARow'
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
  constructor(options: IAnyObject) {
    super(options)
  }
}
