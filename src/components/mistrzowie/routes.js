import Mistrzowie from './Mistrzowie.vue'
import ISMistrzowie from './ISMistrzowie.vue'

export default [
  {
    path: '/mistrzowie',
    name: 'Mistrzowie',
    component: Mistrzowie
  },
  {
    path: '/mistrzowie/scrolling',
    name: 'MistrzowieInfiniteScrolling',
    component: ISMistrzowie
  },
  {
    path: '/mistrzowie/page/:id',
    name: 'MistrzowiePaginator',
    component: Mistrzowie
  }
]
