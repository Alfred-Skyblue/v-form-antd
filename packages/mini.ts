import './static/styles/index.less'

import VFormDesign from './VFormDesign'
import VIconPicker from './VIconPicker'
import VFormItem from './VFormItem'
import { VueConstructor } from 'vue'
import { setFormDesignConfig } from '@pack/core/formItemConfig'
const components = [VFormDesign, VFormItem]
const install = (Vue: VueConstructor) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
export { VFormDesign, VFormItem, VIconPicker, setFormDesignConfig }
export default { install, VFormDesign, VFormItem, VIconPicker, setFormDesignConfig }
