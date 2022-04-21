import { GridComponent } from '@common/layout/grid'
import type { IAnyObject } from '@common/types'

const layoutComponents = {
  grid: GridComponent
}

type LayoutComponentType = keyof typeof layoutComponents
export const createLayoutComponent = <T extends LayoutComponentType>(
  name: T,
  options?: IAnyObject
) => {
  return new layoutComponents[name](options)
}
