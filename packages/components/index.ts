import {
  Cascader,
  Checkbox,
  DatePicker,
  InputNumber,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TimePicker,
  TreeSelect
} from 'ant-design-vue'

import EInput from './EInput.vue'
import EUpload from './EUpload.vue'

export default {
  input: EInput,
  number: InputNumber,
  textarea: 'ATextarea',
  select: Select,
  checkbox: Checkbox,
  radio: Radio,
  date: DatePicker,
  time: TimePicker,
  slider: Slider,
  rate: Rate,
  upload: EUpload,
  treeSelect: TreeSelect,
  cascader: Cascader,
  switch: Switch
}
