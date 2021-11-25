import { VueConstructor } from 'vue'
import { IEFormComponent } from '../typings/EFormComponent'
import { isArray, isNumber, uniqueId } from 'lodash-es'
/**
 * 组件install方法
 * @param comp 需要挂载install方法的组件
 */
export function withInstall<T extends { name: string }>(comp: T) {
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
export function generateKey(formItem?: IEFormComponent): string | boolean {
  if (formItem) {
    const key = uniqueId(`${formItem.type}_`)
    formItem.key = key
    formItem.field = key
    return true
  }
  return uniqueId('key_')
}

/**
 * 移除数组中指定元素，value可以是一个数字下标，也可以是一个函数，删除函数第一个返回true的元素
 * @param array {Array<T>} 需要移除元素的数组
 * @param value {number | ((item: T, index: number, array: Array<T>) => boolean}
 * @returns {T} 返回删除的数组项
 */
export function remove<T>(
  array: Array<T>,
  value: number | ((item: T, index: number, array: Array<T>) => boolean)
): T | undefined {
  let removeVal: Array<T | undefined> = []
  if (!isArray(array)) return undefined
  if (isNumber(value)) {
    removeVal = array.splice(value, 1)
  } else {
    const index = array.findIndex(value)
    if (index !== -1) {
      removeVal = array.splice(index, 1)
    }
  }
  return removeVal.shift()
}

/**
 * 判断数据类型
 * @param value
 */
export function getType(value: any): string {
  return Object.prototype.toString.call(value).slice(8, -1)
}
