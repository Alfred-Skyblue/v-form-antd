import type { App, Plugin } from 'vue'
import '@styles/index.less'
import VFormDesign from './VFormDesign/index.vue'
const components = { VFormDesign }

const install: Exclude<Plugin['install'], undefined> = function installTestLib(
  app: App
) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component)
  })
}

export default install
