import EIconFontPicker from './index.vue'
import { VueConstructor } from 'vue'

import { iconFontConfig } from '@pack/EIconPicker/config'

/**
 * 动态加载js文件
 * @param url
 */
function addScript(url: string) {
  const script = document.createElement('script')
  script.setAttribute('type', 'text/javascript')
  script.setAttribute('src', url)
  document.getElementsByTagName('head')[0].appendChild(script)
}

const setIconConfig = (scriptUrl: string, jsonUrl: string) => {
  addScript(scriptUrl)
  fetch(jsonUrl).then(res => {
    res.json().then(data => {
      iconFontConfig.iconData = data
    })
  })
}

export default Object.assign(EIconFontPicker, {
  install(Vue: VueConstructor) {
    Vue.component(EIconFontPicker.name, EIconFontPicker)
  },
  setIconConfig
})
