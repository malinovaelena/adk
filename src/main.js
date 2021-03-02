import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import './components/props.css'
import './components/UI/index'
import routes from './router'
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router: routes,
  render: h => h(App)
}).$mount('#app')
