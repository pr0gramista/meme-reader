import Jbzd from './Jbzd.vue'
import ISJbzd from './ISJbzd.vue'
// import JbzdSingle from './JbzdSingle.vue'

export default [
  {
    path: '/jbzd',
    name: 'Jbzd',
    component: Jbzd
  },
  {
    path: '/jbzd/scrolling',
    name: 'JbzdScrolling',
    component: ISJbzd
  },
  {
    path: '/jbzd/page/:id',
    name: 'JbzdPaginator',
    component: Jbzd
  }
  // Disabled until endpoint will be working again
  // {
  //   path: '/jbzd/:id',
  //   name: 'JbzdSingle',
  //   component: JbzdSingle
  // }
]
