import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCompositionAPI from '@vue/composition-api'
import EFormDesign, { EIconPicker } from '../packages/index'
Vue.use(VueCompositionAPI)
EIconPicker.setIconConfig(
  'https://at.alicdn.com/t/font_2957630_ikh28lbrtj.js',
  'https://at.alicdn.com/t/font_2957630_ikh28lbrtj.json?spm=a313x.7781069.1998910419.35&file=font_2957630_ikh28lbrtj.json'
)
Vue.use(EFormDesign)
Vue.use(EIconPicker)
Vue.config.productionTip = false
Vue.prototype.$log = console.log
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
