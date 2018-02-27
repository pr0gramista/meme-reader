import TheCodingLove from './TheCodingLove.vue'

export default [
  {
    path: '/thecodinglove',
    name: 'TheCodingLove',
    component: TheCodingLove
  },
  {
    path: '/thecodinglove/page/:id',
    name: 'TheCodingLovePaginator',
    component: TheCodingLove
  }
]
