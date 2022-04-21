import { GridComponent } from '@common/layout/grid'

/**
 * 判断 component 是不是 GridComponent
 * @param component
 * @returns {component is GridComponent}
 */
export const isGridComponent = (component: any): component is GridComponent => {
  return component instanceof GridComponent
}
