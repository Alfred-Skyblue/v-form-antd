import { Cascader } from './form/cascader'
import { Input } from './form/input'
import { Textarea } from './form/textarea'
import { Checkbox } from './form/checkbox'
import { DatePicker } from './form/date-picker'
import { Radio } from './form/radio'
import { Time } from './form/time'
import { Select } from './form/select'
import { Switch } from './form/switch'
import { Slider } from './form/slider'
import { Rate } from './form/rate'
import { VNumber } from './form/number'
import { DateRange } from './form/date-range'
import { TreeSelect } from './form/tree-select'
import { forEach } from 'lodash-es'
import type { BasicFormItem } from './basic-form'
import { UploadFile } from './form/uploadFile'

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
  treeSelect: TreeSelect,
  uploadFile: UploadFile
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
