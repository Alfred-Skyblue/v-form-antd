import {
  Button,
  Cascader,
  DatePicker,
  Input,
  InputNumber,
  Rate,
  Select,
  Slider,
  Switch,
  TimePicker,
  TreeSelect
} from 'ant-design-vue'

import VUpload from './VUpload.vue'
import VMonthRange from './VMonthRange.vue'
import EIconPicker from './VIconPicker.vue'
import Vue from 'vue'
import RadioButtonGroup from '@pack/components/RadioButtonGroup.vue'
import { CreateElement } from 'vue/types/vue'

Vue.component(RadioButtonGroup.name, RadioButtonGroup)
Vue.component(VMonthRange.name, VMonthRange)
Vue.component(EIconPicker.name, EIconPicker)
Vue.component(VUpload.name, VUpload)

export default {
  input: Input,
  number: InputNumber,
  textarea: Input.TextArea,
  select: Select,
  checkboxGroup: 'ACheckboxGroup',
  radioGroup: 'ARadioGroup',
  date: DatePicker,
  dateRange: 'ARangePicker',
  month: 'AMonthPicker',
  monthRange: VMonthRange,
  time: TimePicker,
  slider: Slider,
  rate: Rate,
  upload: VUpload,
  treeSelect: TreeSelect,
  cascader: Cascader,
  switch: Switch,
  iconPicker: EIconPicker,
  button: Button,
  slot: {
    render(h: CreateElement) {
      return h('span', '插槽')
    }
  }
}
