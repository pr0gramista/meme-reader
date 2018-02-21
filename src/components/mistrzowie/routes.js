import Mistrzowie from './Mistrzowie.vue'

export default [
  {
    path: '/mistrzowie',
    name: 'Mistrzowie',
    component: Mistrzowie
  },
  {
    path: '/mistrzowie/page/:id',
    name: 'MistrzowiePaginator',
    component: Mistrzowie
  }
]
