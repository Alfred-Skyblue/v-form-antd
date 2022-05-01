import { DesignGrid } from '@design/class/layout/grid'
import { DesignDivider } from '@design/class/layout/divider'
import type { IAnyObject } from '@common/types'
import { DesignTabs } from '@design/class/layout/tabs'

/**
 * 布局类对象
 */
export const designLayoutComponent = {
  grid: DesignGrid,
  divider: DesignDivider,
  tabs: DesignTabs
}

type DesignLayoutComponentType = keyof typeof designLayoutComponent

/**
 * 创建布局类对象
 * @param {T} name
 * @param {IAnyObject} options
 * @returns {any}
 */
export const createDesignLayoutComponent = <
  T extends DesignLayoutComponentType
>(
  name: T,
  options: IAnyObject
) => {
  return new designLayoutComponent[name](options)
}

/**
 * 布局属性对象
 * @type {{[p: string]: {}}}
 */
export const designLayoutPropsMap = Object.entries(
  designLayoutComponent
).reduce(
  (acc, [, { designType, designProps }]) => ({
    ...acc,
    [designType]: designProps
  }),
  {}
)

/**
 * 初始化布局列表
 * @returns {(DesignDivider | DesignGrid | DesignTabs)[]}
 */
export const initDesignLayoutComponents = () => {
  return Object.entries(designLayoutComponent).map(([, Cmp]) => new Cmp({}))
}
