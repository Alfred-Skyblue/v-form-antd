import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import formDesign from '../views/form-design'
import formCreate from '../views/form-create/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: formDesign
  },
  {
    path: '/form-create',
    name: 'formCreate',
    component: formCreate
  }
]

const router = new VueRouter({
  routes
})

export default router
