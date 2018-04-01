import Anonimowe from './Anonimowe.vue'

export default [
  {
    path: '/anonimowe',
    name: 'Anonimowe',
    component: Anonimowe
  },
  {
    path: '/anonimowe/page/:id',
    name: 'AnonimowePaginator',
    component: Anonimowe
  }
]
