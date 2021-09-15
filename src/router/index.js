import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import firebase from "firebase/compat";
import store from "../store"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/pprun/lab1',
        name: 'PprunLab1',
        component: () => import('../views/PPRUN/Lab1.vue')
    },
    {
        path: '/pprun/lab2',
        name: 'PprunLab2',
        component: () => import('../views/PPRUN/Lab2.vue')
    },
    {
        path: '/soon',
        name: 'Soon',
        component: () => import('../views/Soon.vue')
    },
    {
        path: '/progress',
        name: 'Progress',
        component: () => import('../views/Progress.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/admin',
        name: 'Admin',
        meta: {auth: true, admin: true},
        component: () => import('../views/Admin.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../views/404.vue')
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach(async (to, from, next) => {
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
