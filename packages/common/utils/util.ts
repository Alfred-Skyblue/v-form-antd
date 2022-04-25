import type { BasicFormItem } from '@common/class/basic-form'
import { forEach } from 'lodash-es'
import { isGridComponent } from '@common/utils/type-guard'

/**
 * 生成随机 id
 * @returns {string}
 */
export function randomUUID() {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return (
    S4() +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    '-' +
    S4() +
    S4() +
    S4()
  )
}

export const formForEach = (
  formItems: BasicFormItem[],
  callback: (
    formItem: BasicFormItem,
    array: BasicFormItem[],
    index: number
  ) => void
) => {
  forEach(formItems, (item, index) => {
    if (item) {
      callback(item, formItems, index)
      if (isGridComponent(item)) {
        forEach(item.columns, colItem => {
          formForEach(colItem.list, callback)
        })
      }
    }
  })
}

/**
 * 查找指定表单项，递归查找
 * @param {BasicFormItem[]} formItems
 * @param {(formItem: BasicFormItem) => boolean} cb
 * @returns {BasicFormItem | undefined}
 */
export const findFormItem: (
  formItems: BasicFormItem[],
  cb: (formItem: BasicFormItem) => boolean
) => BasicFormItem | undefined = (formItems, cb) => {
  let res
  const traverse = (formItems: BasicFormItem[]): boolean => {
    return formItems.some((formItem: BasicFormItem) => {
      // 处理栅格
      if (isGridComponent(formItem)) {
        return formItem.columns?.some(item => traverse(item.list))
      }
      if (cb(formItem)) res = formItem
      return cb(formItem)
    })
  }
  traverse(formItems)
  return res
}

// export function remove<T>(
//   array: Array<T>,
//   value: number | ((item: T, index: number, array: Array<T>) => boolean)
// ): T | undefined {
//   let removeVal: Array<T | undefined> = []
//   if (isNumber(value)) {
//     removeVal = array.splice(value, 1)
//   } else {
//     const index = array.findIndex(value)
//     if (index !== -1) {
//       removeVal = array.splice(index, 1)
//     }
//   }
//   return removeVal.shift()
// }

// export const findFormItem: (
//   formItems: BasicFormItem[],
//   cb: (formItem: BasicFormItem) => boolean
// ) => BasicFormItem | undefined = (formItems, cb) => {
//   let res
//   const traverse = (formItems: BasicFormItem[]): boolean => {
//     return formItems.some((formItem: BasicFormItem) => {
//       // 处理栅格
//       if (isGridComponent(formItem))
//         return formItem.columns.some(item => traverse(item.list))
//       if (cb(formItem)) res = formItem
//       return cb(formItem)
//     })
//   }
//   traverse(formItems)
//   return res
// }
