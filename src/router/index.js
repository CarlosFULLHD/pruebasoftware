import { createRouter, createWebHistory } from 'vue-router'
import Paises from '../views/Paises.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Paises',
      component: Paises
    }
  ]
})

export default router
