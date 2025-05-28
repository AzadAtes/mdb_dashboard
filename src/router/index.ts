/*import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/movie' // Leitet zur Movie-Seite weiter
    },
    {
        path: '/movie',
        name: 'Movie',
        component: () => import('@/views/Movie.vue')
    },
    {
        path: '/series',
        name: 'Series',
        component: () => import('@/views/Series.vue')
    },
    {
        path: '/actors',
        name: 'Actors',
        component: () => import('@/views/Actors.vue')
    },
    {
        path: '/directors',
        name: 'Directors',
        component: () => import('@/views/Directors.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        redirect: '/movie'
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router */