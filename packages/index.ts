import type { App, Plugin } from 'vue'
import '@styles/index.less'
import { VFormDesign } from './v-form-design'
import JsonEditor from '@design/components/JsonEditor/index.vue'
const components = { VFormDesign, JsonEditor }

const install: Exclude<Plugin['install'], undefined> = function installTestLib(
  app: App
) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component)
  })
}

export default install
