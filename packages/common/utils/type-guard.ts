import type { GridComponent } from '@common/class/layout/grid'
import { isArray } from 'lodash-es'

/**
 * 判断 components 是不是 GridComponent
 * @param component
 * @returns {components is GridComponent}
 */
export const isGridComponent = (component: any): component is GridComponent => {
  return component.type === 'grid' && isArray(component.columns)
}
