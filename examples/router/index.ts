import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import formDesign from '../views/formDesign'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: formDesign
  }
]

const router = new VueRouter({
  routes
})

export default router
