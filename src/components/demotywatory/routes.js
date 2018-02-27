import Demotywatory from './Demotywatory.vue'
import DemotywatorySingle from './DemotywatorySingle.vue'

export default [
  {
    path: '/demotywatory',
    name: 'Demotywatory',
    component: Demotywatory
  },
  {
    path: '/demotywatory/page/:id',
    name: 'DemotywatoryPaginator',
    component: Demotywatory
  },
  {
    path: '/demotywatory/:id',
    name: 'DemotywatorySingle',
    component: DemotywatorySingle
  }
]
