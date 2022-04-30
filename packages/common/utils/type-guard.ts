import type { GridComponent } from '@common/class/layout/grid'
import { isArray } from 'lodash-es'
import type { Tabs } from '@common/class/layout/tabs'

/**
 * 判断 components 是不是 GridComponent
 * @param component
 * @returns {components is GridComponent}
 */
export const isGridComponent = (component: any): component is GridComponent => {
  return component.type === 'grid' && isArray(component.columns)
}

export const isTabsComponent = (component: any): component is Tabs => {
  return component.type === 'tabs' && isArray(component.columns)
}
