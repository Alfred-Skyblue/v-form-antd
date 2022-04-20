import { Cascader } from './cascader'
import { Input } from './input'
import { Textarea } from './textarea'
import { Checkbox } from './checkbox'
import { DatePicker } from './date-picker'
import { Radio } from './radio'
import { Time } from './time'
import { Select } from './select'
import { Switch } from './switch'
import { Slider } from './slider'
import { Rate } from './rate'
import { VNumber } from './number'
import { DateRange } from './date-range'
import { TreeSelect } from './tree-select'
import { forEach } from 'lodash-es'
import type { BasicFormItem } from './basic-form'

export const formComponents = {
  input: Input,
  number: VNumber,
  cascader: Cascader,
  checkbox: Checkbox,
  radio: Radio,
  select: Select,
  date: DatePicker,
  dateRange: DateRange,
  time: Time,
  switch: Switch,
  slider: Slider,
  rate: Rate,
  textarea: Textarea,
  treeSelect: TreeSelect
}
export type IFormComponent = typeof formComponents

/**
 * 创建初始化表单列表
 * @returns {BasicFormItem[]}
 */
export const initFormComponent = () => {
  const components: BasicFormItem[] = []
  forEach(formComponents, (cmp, key) => {
    components.push(createFormComponent(key as keyof IFormComponent))
  })
  return components
}

export function createFormComponent<T extends keyof IFormComponent>(
  type: T,
  label?: string
): BasicFormItem {
  return new formComponents[type]({ label })
}
