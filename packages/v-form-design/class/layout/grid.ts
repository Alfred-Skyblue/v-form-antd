import { GridComponent } from '@common/class/layout/grid'
import type { Component } from '@common/types'
import { shallowRef } from 'vue'
import GridProps from '@design/components/VFProps/Grid/index.vue'

export class DesignGrid extends GridComponent {
  public propsCmp: Component = shallowRef(GridProps)
}
