import VueRouter, { RouterOptions } from 'vue-router'
import Vue3 from './pages/Vue3.vue'

const routes: any = [{ path: '/vue3', component: Vue3 }]

export default new VueRouter({
  mode: 'history',
  routes
})
