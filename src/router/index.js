import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import jbzdRoutes from '@/components/jbzd/routes.js'
import kwejkRoutes from '@/components/kwejk/routes.js'
import ninegagRoutes from '@/components/9gag/routes.js'
import demotywatoryRoutes from '@/components/demotywatory/routes.js'
import mistrzowieRoutes from '@/components/mistrzowie/routes.js'
import anonimoweRoutes from '@/components/anonimowe/routes.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ].concat(jbzdRoutes)
    .concat(kwejkRoutes)
    .concat(ninegagRoutes)
    .concat(demotywatoryRoutes)
    .concat(mistrzowieRoutes)
    .concat(anonimoweRoutes)
})
