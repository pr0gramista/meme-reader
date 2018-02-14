import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import jbzdRoutes from '@/components/jbzd/routes.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: Home
    }
  ].concat(jbzdRoutes)
})
