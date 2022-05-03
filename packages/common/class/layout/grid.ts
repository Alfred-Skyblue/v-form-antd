import type { Col } from '@common/class/layout/col'
import { BasicFormItem } from '@common/class/basic-form'
import type { IFormItemOptions } from '@common/types/form'

// interface IGridProps {
//   align?: 'top' | 'middle' | 'bottom'
//   gutter?: any
//   justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between'
//   wrap?: boolean
// }
export class GridComponent extends BasicFormItem {
  static type = 'grid'
  public type = GridComponent.type
  public _isLayout = true
  public _tag!: string
  public icon = 'grid'
  public columns: Col[] = []
  constructor(options?: IFormItemOptions) {
    super({ label: '栅格布局', ...options })
  }
}
