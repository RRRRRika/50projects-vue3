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
    },
    {
        name: 'Scroll-Animation',
        path: '/Scroll-Animation',
        component: () => import('../views/projects/Day6-Scroll-Animation.vue')
    },
    {
        name: 'Split-Landing-Page',
        path: '/Split-Landing-Page',
        component: () => import('../views/projects/Day7-Split-Landing-Page.vue')
    },
    {
        name: 'Form-Wave',
        path: '/Form-Wave',
        component: () => import('../views/projects/Day8-Form-Wave.vue')
    },
    {
        name: 'Sound-Board',
        path: '/Sound-Board',
        component: () => import('../views/projects/Day9-Sound-Board.vue')
    },
    {
        name: 'Dad-Jokes',
        path: '/Dad-Jokes',
        component: () => import('../views/projects/Day10-Dad-Jokes.vue')
    }
]
const history = createWebHistory();

const router = createRouter({
    history,
    routes
});

export default router;
