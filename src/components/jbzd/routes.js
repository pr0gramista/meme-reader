import Jbzd from './Jbzd.vue'
import JbzdSingle from './JbzdSingle.vue'

export default [
  {
    path: '/jbzd',
    name: 'Jbzd',
    component: Jbzd
  },
  {
    path: '/jbzd/page/:id',
    name: 'JbzdPaginator',
    component: Jbzd
  },
  {
    path: '/jbzd/:id',
    name: 'JbzdSingle',
    component: JbzdSingle
  }
]
