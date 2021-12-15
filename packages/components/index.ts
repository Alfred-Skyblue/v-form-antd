import vuedraggable from 'vuedraggable'
import VUpload from './VUpload.vue'
import VMonthRange from './VMonthRange.vue'
import VIconPicker from './VIconPicker.vue'
import Vue from 'vue'
import RadioButtonGroup from '@pack/components/RadioButtonGroup.vue'
import { CreateElement } from 'vue/types/vue'
import VColorPicker from '@pack/components/VColorPicker.vue'

Vue.component(RadioButtonGroup.name, RadioButtonGroup)
Vue.component(VMonthRange.name, VMonthRange)
Vue.component(VIconPicker.name, VIconPicker)
Vue.component(VUpload.name, VUpload)
Vue.component(vuedraggable.name, vuedraggable)
Vue.component(VColorPicker.name, VColorPicker)

export default {
  input: 'AInput',
  number: 'AInputNumber',
  textarea: 'ATextarea',
  select: 'ASelect',
  checkboxGroup: 'ACheckboxGroup',
  radioGroup: 'ARadioGroup',
  date: 'ADatePicker',
  dateRange: 'ARangePicker',
  month: 'AMonthPicker',
  monthRange: VMonthRange,
  time: 'ATimePicker',
  slider: 'ASlider',
  rate: 'ARate',
  upload: VUpload,
  treeSelect: 'ATreeSelect',
  cascader: 'ACascader',
  switch: 'ASwitch',
  iconPicker: VIconPicker,
  button: 'AButton',
  colorPicker: VColorPicker,
  slot: {
    render(h: CreateElement) {
      return h('span', '插槽')
    }
  }
}
