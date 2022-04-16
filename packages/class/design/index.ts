import { DesignInput } from './input'
import { DesignVNumber } from './number'
import { DesignCascader } from './cascader'
import { DesignCheckbox } from './checkbox'
import { DesignRadio } from './radio'
import { DesignSelect } from './select'
import { DesignDatePicker } from './date-picker'
import { DesignDateRange } from './date-range'
import { DesignTime } from './time'
import { DesignSwitch } from './switch'
import { DesignSlider } from './slider'
import { DesignRate } from './rate'
import { DesignTextarea } from './textarea'
import { DesignTreeSelect } from './tree-select'
import type { BasicFormItem } from '@/class/render/basic-form'
import { forEach } from 'lodash-es'

type DesignComponentType = typeof designComponents

export const designComponents = {
  input: DesignInput,
  number: DesignVNumber,
  cascader: DesignCascader,
  checkbox: DesignCheckbox,
  radio: DesignRadio,
  select: DesignSelect,
  date: DesignDatePicker,
  dateRange: DesignDateRange,
  time: DesignTime,
  switch: DesignSwitch,
  slider: DesignSlider,
  rate: DesignRate,
  textarea: DesignTextarea,
  treeSelect: DesignTreeSelect
}

/**
 * 初始化设计器组件列表
 * @returns {BasicFormItem[]}
 */
export const initDesignComponents = () => {
  const components: BasicFormItem[] = []
  forEach(designComponents, (cmp, key) => {
    components.push(createDesignComponent(key as keyof DesignComponentType))
  })
  return components
}

/**
 * 创建设计器组件
 * @param {T} type
 * @param {string} label
 * @returns {BasicFormItem}
 */
export function createDesignComponent<T extends keyof DesignComponentType>(
  type: T,
  label?: string
): BasicFormItem {
  return new designComponents[type](label)
}
