import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components/Page'
import Jbzd from '@/components/jbzd/Jbzd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/jbzd/page/:id',
      name: 'Jbzd',
      component: Jbzd
    },
    {
      path: '/jbzd',
      name: 'Jbzd',
      component: Jbzd
    },
    {
      path: '/:page',
      name: 'Page',
      component: Page
    },
    {
      path: '/:page/page/:id',
      name: 'NPage',
      component: Page
    }
  ]
})
