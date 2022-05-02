import { designComponents } from '@design/class/form'
import { designLayoutComponent } from '@design/class/layout'
import { designHighLevelComponent } from '@design/class/high-level'
import type { IAnyObject } from '@common/types'

export const allDesignComponentMap = {
  ...designComponents,
  ...designLayoutComponent,
  ...designHighLevelComponent
}

export type IDesignComponentType = keyof typeof allDesignComponentMap

/**
 * 创建布局类对象
 * @param {T} name
 * @param {IAnyObject} options
 * @returns {any}
 */
export const createDesignComponent = <T extends IDesignComponentType>(
  name: T,
  options: IAnyObject
) => {
  return new allDesignComponentMap[name](options)
}
