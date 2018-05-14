import Kwejk from './Kwejk.vue'
import ISKwejk from './ISKwejk.vue'
import KwejkSingle from './KwejkSingle.vue'

export default [
  {
    path: '/kwejk',
    name: 'Kwejk',
    component: Kwejk
  },
  {
    path: '/kwejk/scrolling',
    name: 'KwejkScrolling',
    component: ISKwejk
  },
  {
    path: '/kwejk/page/:id',
    name: 'KwejkPaginator',
    component: Kwejk
  },
  {
    path: '/kwejk/:id',
    name: 'KwejkSingle',
    component: KwejkSingle
  }
]
