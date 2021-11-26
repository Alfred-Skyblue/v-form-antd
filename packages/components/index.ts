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
  TreeSelect,
  Upload
} from 'ant-design-vue'

import EInput from './EInput.vue'

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
  upload: Upload,
  treeSelect: TreeSelect,
  cascader: Cascader,
  switch: Switch
}
