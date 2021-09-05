import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/prune',
    name: 'Prune',
    component: () => import('../views/PRUNE.vue')
  },
  {
    path: '/soon',
    name: 'Soon',
    component: () => import('../views/Soon.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
