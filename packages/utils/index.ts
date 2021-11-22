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
 * @param [formItem] 需要生成 key 的控件，可选，如果不传，默认返回一个唯一 key
 * @returns {string|boolean} 返回一个唯一 id 或者 false
 */
export const generateKey = (formItem?: IEFormComponent) => {
  if (formItem) {
    formItem.key = uniqueId(`${formItem.type}_`)
    return false
  }
  return uniqueId('key_')
}
