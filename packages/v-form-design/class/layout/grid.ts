import { GridComponent } from '@common/class/layout/grid'
import GridProps from '@design/components/VFProps/Grid/index.vue'
import type { Col } from '@common/class/layout/col'

export class DesignGrid extends GridComponent {
  static designType = GridComponent.type
  static designProps = GridProps
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
