import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCompositionAPI from '@vue/composition-api'
import VFormDesign, { VIconPicker, setFormDesignConfig } from '../packages/index'

setFormDesignConfig({
  type: 'customCmp',
  label: '自定义组件',
  props: {},
  component: {
    render(h) {
      return h('span', {}, '我是自定义组件')
    }
  }
})
Vue.use(VueCompositionAPI)
VIconPicker.setIconConfig(
  'https://at.alicdn.com/t/font_2957630_ikh28lbrtj.js',
  'https://at.alicdn.com/t/font_2957630_ikh28lbrtj.json?spm=a313x.7781069.1998910419.35&file=font_2957630_ikh28lbrtj.json'
)
Vue.use(VFormDesign)
Vue.use(VIconPicker)
Vue.config.productionTip = false
Vue.prototype.$log = console.log
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
