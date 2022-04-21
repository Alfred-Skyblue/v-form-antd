import type { IAnyObject } from '@common/types'
import { VFComponent } from '@common/class/component'
import type { Col } from '@common/layout/col'

interface IGridProps {
  align?: 'top' | 'middle' | 'bottom'
  gutter?: any
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between'
  wrap?: boolean
}
export class GridComponent extends VFComponent {
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
  constructor(options?: IAnyObject) {
    super()
    console.log('-> options', options)
  }
}
