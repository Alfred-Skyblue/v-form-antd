import {
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

import EUpload from './EUpload.vue'
import EMonthRange from './EMonthRange.vue'
import EIconPicker from './EIconPicker.vue'
import Vue from 'vue'
import RadioButtonGroup from '@pack/components/RadioButtonGroup.vue'
import { CreateElement } from 'vue/types/vue'

Vue.component(RadioButtonGroup.name, RadioButtonGroup)
Vue.component(EMonthRange.name, EMonthRange)
Vue.component(EIconPicker.name, EIconPicker)
Vue.component(EUpload.name, EUpload)

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
  monthRange: EMonthRange,
  time: TimePicker,
  slider: Slider,
  rate: Rate,
  upload: EUpload,
  treeSelect: TreeSelect,
  cascader: Cascader,
  switch: Switch,
  iconPicker: EIconPicker,
  slot: {
    render(h: CreateElement) {
      return h('span', '插槽')
    }
  }
}
