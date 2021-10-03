import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import firebase from "firebase/compat/app";
import store from "../store"

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {title: "Главная"},
    component: Home
  },
  {
    path: '/pprun/lab1',
    name: 'PprunLab1',
    meta: {title: 'Лабораторная №1 (ППРУН)'},
    component: () => import('../views/PPRUN/Lab1.vue')
  },
  {
    path: '/pprun/lab2',
    name: 'PprunLab2',
    meta: {title: 'Лабораторная №2 (ППРУН)'},
    component: () => import('../views/PPRUN/Lab2.vue')
  },
  {
    path: '/trspv/lab1',
    name: 'TrspvLab2',
    meta: {title: 'Лабораторная №1 (ТРСПВ)'},
    component: () => import('../views/TRSPV/Lab1.vue')
  },
  {
    path: '/soon',
    name: 'Soon',
    meta: {title: 'Скоро'},
    component: () => import('../views/Soon.vue')
  },
  {
    path: '/progress',
    name: 'Progress',
    meta: {title: 'Прогресс'},
    component: () => import('../views/Progress.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    meta: {title: 'Сторонние проекты'},
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {title: 'Логин'},
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    meta: {title: 'Админ', auth: true, admin: true},
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    meta: {title: '404'},
    component: () => import('../views/404.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  document.title = `${to.meta.title}`
  const currentUser = firebase.auth().currentUser
  const requireAuth = to.matched.some(record => record.meta.auth)
  const requireAdmin = to.matched.some(record => record.meta.admin)
  if (requireAdmin && currentUser) {
    const uId = await store.dispatch('getUserId')
    const isAdmin = await firebase.database().ref(`/users/${uId}/info/isAdmin`).get()
    if (isAdmin) {
      next()
    } else {
      next('/404')
    }
  } else if (requireAuth && !currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router
