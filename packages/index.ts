import './core'
import './mini'
import EFormDesign from './EFormDesign'
import EFormItem from './EFormItem'
import { VueConstructor } from 'vue'
import { Icon } from 'ant-design-vue'
console.log('-> antIcons', Icon)
const components = [EFormDesign, EFormItem]
const install = (Vue: VueConstructor) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export { EFormDesign, EFormItem }
export default { install, EFormDesign, EFormItem }
