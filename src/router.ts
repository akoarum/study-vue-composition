import VueRouter from 'vue-router'
import Vue2 from './pages/Vue2.vue'
import Vue3 from './pages/Vue3.vue'
import Vue3Counter from './pages/Vue3Counter.vue'

const routes: any = [
  { path: '/vue2', component: Vue2 },
  { path: '/vue3', component: Vue3 },
  { path: '/vue3-counter', component: Vue3Counter }
]

export default new VueRouter({
  mode: 'history',
  routes
})
