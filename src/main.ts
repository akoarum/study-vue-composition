import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCompositionApi from '@vue/composition-api'
import App from './App.vue'
import router from './router'

Vue.use(VueRouter)
Vue.use(VueCompositionApi)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
