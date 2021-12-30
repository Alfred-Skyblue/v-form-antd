import '../styles/index.less'
import './assets/iconfont'

import VFormDesign from './VFormDesign'
import VFormCreate from './VFormCreate'
import pkg from '/package.json'

import { VueConstructor } from 'vue'
import { setFormDesignComponents } from '@pack/core/formItemConfig'
const components = [VFormDesign, VFormCreate]
const install = (Vue: VueConstructor) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
export { VFormDesign, setFormDesignComponents, VFormCreate }
export default {
  install,
  version: pkg.version,
  VFormDesign,
  setFormDesignComponents,
  VFormCreate
}
