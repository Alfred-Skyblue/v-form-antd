import { VueConstructor } from 'vue'
import HelloForm from './components/HelloForm.vue'

let installed = false
const components = [HelloForm]

const install = function (Vue: VueConstructor): void {
  // use ant组件
  if (installed) return
  installed = true
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

/**
 * @Author: kcz
 * @description: 配置组件及添加自定义组件
 * @return: Boolean
 * @param config
 */

function setFormDesignConfig(config: any): boolean {
  // eslint-disable-next-line no-debugger
  if (config || typeof config !== 'object') {
    console.error('传入config的参数必须为对象')
    return false
  }
  return true
}

/**
 * @author lizhichao<meteoroc@outlook.com>
 * @description 配置k-form-build(预览时)，暂只支持dynamicData的设置
 * @param { object }config
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function setFormBuildConfig(config: any): boolean | void {
  if (!config || typeof config !== 'object') {
    console.error('传入setFormBuildConfig的参数必须为对象')
    return false
  }
}

// 这里可以用es6的解构语法导入组件
export { install, setFormDesignConfig, setFormBuildConfig }

// 这里默认导入全部组件
export default {
  install,
  setConfig: setFormDesignConfig,
  setFormDesignConfig: setFormDesignConfig,
  setFormBuildConfig: setFormBuildConfig
}
