import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('../views/Home.vue')
    },
    {
        name: 'Expanding-Cards',
        path: '/Expanding-Cards',
        component: () => import('../views/projects/Day1-Expanding-Cards.vue')
    },
    {
        name: 'Progress-Steps',
        path: '/Progress-Steps',
        component: () => import('../views/projects/Day2-Progress-Steps.vue')
    },
    {
        name: 'Rotating-Nav-Ani',
        path: '/Rotating-Nav-Ani',
        component: () => import('../views/projects/Day3-Rotating-Nav-Ani.vue')
    },
    {
        name: 'Hidden-Search',
        path: '/Hidden-Search',
        component: () => import('../views/projects/Day4-Hidden-Search.vue')
    },
    {
        name: 'Blurry-Loading',
        path: '/Blurry-Loading',
        component: () => import('../views/projects/Day5-Blurry-Loading.vue')
    }
]
const history = createWebHistory();

const router = createRouter({
    history,
    routes
});

export default router;
