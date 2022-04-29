import { DesignGrid } from '@design/class/layout/grid'
import { DesignDivider } from '@design/class/layout/divider'
import type { IAnyObject } from '@common/types'

export const designLayoutComponent = {
  grid: DesignGrid,
  divider: DesignDivider
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
