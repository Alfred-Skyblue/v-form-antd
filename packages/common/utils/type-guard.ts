import type { GridComponent } from '@common/layout/grid'
import { isArray } from 'lodash-es'

/**
 * 判断 component 是不是 GridComponent
 * @param component
 * @returns {component is GridComponent}
 */
export const isGridComponent = (component: any): component is GridComponent => {
  return component.type === 'grid' && isArray(component.columns)
}
