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
import type { BasicFormItem } from '@common/class/basic-form'

type DesignComponentType = typeof designComponents

const designComponents = {
  input: DesignInput,
  textarea: DesignTextarea,
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
  treeSelect: DesignTreeSelect
}

/**
 * 初始化设计器组件列表
 * @returns {BasicFormItem[]}
 */
export const initDesignComponents = () => {
  return Object.entries(designComponents).map(([, Cmp]) => new Cmp())
}

/**
 * 创建设计器组件
 * @param {keyof DesignComponentType} type
 * @param {string} label
 * @returns {BasicFormItem}
 */
export function createDesignComponent<T extends keyof DesignComponentType>(
  type: T,
  label?: string
): BasicFormItem {
  return new designComponents[type]({ label })
}
