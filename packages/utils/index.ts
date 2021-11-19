import { VueConstructor } from 'vue'
import { IEFormComponent } from '../typings/EFormComponent'
import { uniqueId } from 'lodash-es'
/**
 * 组件install方法
 * @param comp 需要挂载install方法的组件
 */
export const withInstall = <T extends { name: string }>(comp: T) => {
  return Object.assign(comp, {
    install(Vue: VueConstructor) {
      Vue.component(comp.name, comp)
    }
  })
}

/**
 * 生成key
 * @param formItem
 */
export const generateKey = (formItem: IEFormComponent) => {
  formItem.key = uniqueId(`${formItem.type}_`)
}
