import type { App, Plugin } from 'vue'
import '@styles/index.less'
import { VFormDesign } from './v-form-design'
import JsonEditor from '@design/components/JsonEditor/index.vue'
import type { CustomComponent } from '@common/class/custom'
import { setCustomComponents } from '@common/custom'
const components = { VFormDesign, JsonEditor }

const install: Exclude<Plugin['install'], undefined> = function (
  app: App,
  options?: { customComponents: CustomComponent[]; [key: string]: any }
) {
  if (options?.customComponents) setCustomComponents(options.customComponents)
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component)
  })
}

export default install
