import { GridComponent } from '@common/class/layout/grid'
import type { IAnyObject } from '@common/types'
import { Divider } from '@common/class/layout/divider'
import { Tabs } from '@common/class/layout/tabs'

export const layoutComponents = {
  grid: GridComponent,
  divider: Divider,
  tabs: Tabs
}

type LayoutComponentType = keyof typeof layoutComponents
export const createLayoutComponent = <T extends LayoutComponentType>(
  name: T,
  options: IAnyObject
) => {
  return new layoutComponents[name](options)
}
