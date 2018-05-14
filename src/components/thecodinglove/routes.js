import TheCodingLove from './TheCodingLove.vue'
import ISTheCodingLove from './ISTheCodingLove.vue'

export default [
  {
    path: '/thecodinglove',
    name: 'TheCodingLove',
    component: TheCodingLove
  },
  {
    path: '/thecodinglove/scrolling',
    name: 'TheCodingLoveScrolling',
    component: ISTheCodingLove
  },
  {
    path: '/thecodinglove/page/:id',
    name: 'TheCodingLovePaginator',
    component: TheCodingLove
  }
]
