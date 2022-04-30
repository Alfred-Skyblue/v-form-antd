import { GridComponent } from '@common/class/layout/grid'
import type { Component } from '@common/types'
import { shallowRef } from 'vue'
import GridProps from '@design/components/VFProps/Grid/index.vue'
import type { Col } from '@common/class/layout/col'

export class DesignGrid extends GridComponent {
  public propsCmp: Component = shallowRef(GridProps)
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
