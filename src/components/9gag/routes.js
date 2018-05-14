import ngag from './ngag.vue'
import ngagnsfw from './ngag-nsfw.vue'
import ISngag from './ISngag.vue'
import ISngagnsfw from './ISngag-nsfw.vue'

export default [
  {
    path: '/9gag',
    name: '9gag',
    component: ngag
  },
  {
    path: '/9gag/scrolling',
    name: '9gagScrolling',
    component: ISngag
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
    path: '/9gagnsfw/scrolling',
    name: '9gagNSFWScrolling',
    component: ISngagnsfw
  },
  {
    path: '/9gagnsfw/page/:id',
    name: '9gagNSFWPaginator',
    component: ngagnsfw
  }
]
