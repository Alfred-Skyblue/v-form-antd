import './core'
import './mini'
import EFormDesign from './EFormDesign'
import EIconPicker from './EIconPicker'
import EFormItem from './EFormItem'
import { VueConstructor } from 'vue'
const components = [EFormDesign, EFormItem]
const install = (Vue: VueConstructor) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export { EFormDesign, EFormItem, EIconPicker }
export default { install, EFormDesign, EFormItem, EIconPicker }
