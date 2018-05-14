import Anonimowe from './Anonimowe.vue'
import ISAnonimowe from './ISAnonimowe.vue'

export default [
  {
    path: '/anonimowe',
    name: 'Anonimowe',
    component: Anonimowe
  },
  {
    path: '/anonimowe/scrolling',
    name: 'AnonimoweScrolling',
    component: ISAnonimowe
  },
  {
    path: '/anonimowe/page/:id',
    name: 'AnonimowePaginator',
    component: Anonimowe
  }
]
