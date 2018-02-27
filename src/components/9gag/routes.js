import ngag from './ngag.vue'

export default [
  {
    path: '/9gag',
    name: '9gag',
    component: ngag
  },
  {
    path: '/9gag/page/:id',
    name: '9gagPaginator',
    component: ngag
  }
]
