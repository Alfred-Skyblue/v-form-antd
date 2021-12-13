import './static/styles/index.less'

import VFormDesign from './VFormDesign'
import VIconPicker from './VIconPicker'
import VFormItem from './VFormItem'
import VFormCreate from './VFormCreate'

import { VueConstructor } from 'vue'
import { setFormDesignConfig } from '@pack/core/formItemConfig'
const components = [VFormDesign, VFormItem, VFormCreate]
const install = (Vue: VueConstructor) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
export { VFormDesign, VFormItem, VIconPicker, setFormDesignConfig, VFormCreate }
export default {
  install,
  VFormDesign,
  VFormItem,
  VIconPicker,
  setFormDesignConfig,
  VFormCreate
}
