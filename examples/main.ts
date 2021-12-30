import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCompositionAPI from '@vue/composition-api'
import VFormDesign, { setFormDesignComponents } from '../packages/index'
setFormDesignComponents({
  type: 'customCmp',
  label: '自定义组件',
  component: {
    render(h) {
      return h('input', {}, '我是自定义组件')
    }
  }
})

Vue.use(VFormDesign)
Vue.use(VueCompositionAPI)

Vue.config.productionTip = false
Vue.prototype.$log = console.log
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
