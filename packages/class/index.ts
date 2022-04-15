import { Cascader } from '@/class/cascader'
import { Input } from '@/class/input'
import { Textarea } from '@/class/textarea'
import { Checkbox } from '@/class/checkbox'
import { DatePicker } from '@/class/date-picker'
import { Radio } from '@/class/radio'
import { Time } from '@/class/time'
import { Select } from '@/class/select'
import { Switch } from '@/class/switch'
import { Slider } from '@/class/slider'
import { Rate } from '@/class/rate'
import { VNumber } from '@/class/number'
import { DateRange } from '@/class/date-range'
import { TreeSelect } from '@/class/tree-select'
import { forEach } from 'lodash-es'
import type { BasicFormItem } from '@/class/basic-form'

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
  return new formComponents[type](label)
}
