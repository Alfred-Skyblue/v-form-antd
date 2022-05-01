import { DesignVSlot } from '@design/class/high-level/slot'
import type { IAnyObject } from '@common/types'

export const designHighLevelComponent = {
  vSlot: DesignVSlot
}

export const createDesignHighLevelComponent = <
  T extends keyof typeof designHighLevelComponent
>(
  name: T,
  options: IAnyObject
) => {
  return new designHighLevelComponent[name](options)
}

/**
 * 布局属性对象
 * @type {{[p: string]: {}}}
 */
export const designHighLevelPropsMap = Object.entries(
  designHighLevelComponent
).reduce(
  (acc, [, { designType, designProps }]) => ({
    ...acc,
    [designType]: designProps
  }),
  {}
)

export const initDesignHighLevelComponents = () =>
  Object.entries(designHighLevelComponent).map(([, Cmp]) => new Cmp({}))
