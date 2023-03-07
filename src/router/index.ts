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
    }
]
const history = createWebHistory();

const router = createRouter({
    history,
    routes
});

export default router;
