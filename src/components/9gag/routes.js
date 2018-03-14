import ngag from './ngag.vue'
import ngagnsfw from './ngag-nsfw.vue'

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
  },
  {
    path: '/9gagnsfw',
    name: '9gagNSFWPaginator',
    component: ngagnsfw
  },
  {
    path: '/9gagnfw/page/:id',
    name: '9gagNSFWPaginator',
    component: ngagnsfw
  }
]
