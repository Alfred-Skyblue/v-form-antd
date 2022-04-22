import { DesignGrid } from '@design/class/layout/grid'
import type { IAnyObject } from '@common/types'

export const designLayoutComponent = {
  grid: DesignGrid
}

type DesignLayoutComponentType = keyof typeof designLayoutComponent

export const createDesignLayoutComponent = <
  T extends DesignLayoutComponentType
>(
  name: T,
  options: IAnyObject
) => {
  return new designLayoutComponent[name](options)
}

export const initDesignLayoutComponents = () => {
  return Object.entries(designLayoutComponent).map(([, Cmp]) => new Cmp({}))
}
