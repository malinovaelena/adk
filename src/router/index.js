import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './../components/Main/MainPage.vue'
import Page from './../components/Page.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Page,
      children: [
        {
          path: 'catalog/',
          component: MainPage,
          props: true
          // children: [{
          //   name: 'cards'
          //   // add card container
          // }
          // ]
        },
        {
          path: 'auctions',
          props: true
        }
      ]
    }
  ]
})
