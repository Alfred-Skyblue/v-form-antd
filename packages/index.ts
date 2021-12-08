import './core'
import './mini'
import VFormDesign from './VFormDesign'
import EIconPicker from './EIconPicker'
import VFormItem from './VFormItem'
import { VueConstructor } from 'vue'
import { setFormDesignConfig } from '@pack/core/formItemConfig'
const components = [VFormDesign, VFormItem]
const install = (Vue: VueConstructor) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
export { VFormDesign, VFormItem, EIconPicker, setFormDesignConfig }
export default { install, VFormDesign, VFormItem, EIconPicker, setFormDesignConfig }
