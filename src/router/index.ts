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
    },
    {
        name: 'Event-Keyboard',
        path: '/Event-Keyboard',
        component: () => import('../views/projects/Day11-Event-Keyboard.vue')
    },
    {
        name: 'Faq-Collapse',
        path: '/Faq-Collapse',
        component: () => import('../views/projects/Day12-Faq-Collapse.vue')
    },
    {
        name: '/RandoAnimated-Navigation',
        path: '/Random-Choice-Picker',
        component: () => import('../views/projects/Day13-Random-Choice-Picker.vue')
    },
    {
        name: 'Animated-Navigation',
        path: '/Animated-Navigation',
        component: () => import('../views/projects/Day14-Animated-Navigation.vue')
    },
    {
        name: 'Increasing-Counter',
        path: '/Increasing-Counter',
        component: () => import('../views/projects/Day15-Increasing-Counter.vue')
    },
    {
        name: 'Drink-Water',
        path: '/Drink-Water',
        component: () => import('../views/projects/Day16-Drink-Water.vue')
    },
    {
        name: 'Movie-App',
        path: '/Movie-App',
        component: () => import('../views/projects/Day17-Movie-App.vue')
    },
    {
        name: 'Background-Slider',
        path: '/Background-Slider',
        component: () => import('../views/projects/Day18-Background-Slider.vue')
    },
    {
        name: 'Theme-Clock',
        path: '/Theme-Clock',
        component: () => import('../views/projects/Day19-Theme-Clock.vue')
    },
    {
        name: 'Button-Ripple-Effect',
        path: '/Button-Ripple-Effect',
        component: () => import('../views/projects/Day20-Button-Ripple-Effect.vue')
    },
    {
        name: 'Drag-N-Drop',
        path: '/Drag-N-Drop',
        component: () => import('../views/projects/Day21-Drag-N-Drop.vue')
    },
    {
        name: 'Drawing-App',
        path: '/Drawing-App',
        component: () => import('../views/projects/Day22-Drawing-App.vue')
    },
    {
        name: 'Kinetic-Loader',
        path: '/Kinetic-Loader',
        component: () => import('../views/projects/Day23-Kinetic-Loader.vue')
    },
    {
        name: 'Skeleton-Loading',
        path: '/Skeleton-Loading',
        component: () => import('../views/projects/Day24-Skeleton-Loading.vue')
    },
    {
        name: 'Sticky-Navigation',
        path: '/Sticky-Navigation',
        component: () => import('../views/projects/Day25-Sticky-Navigation.vue')
    },
    {
        name: 'Double-Verticle-Slider',
        path: '/Double-Verticle-Slider',
        component: () => import('../views/projects/Day26-Double-Verticle-Slider.vue')
    },
    {
        name: 'Toast-Notification',
        path: '/Toast-Notification',
        component: () => import('../views/projects/Day27-Toast-Notification.vue')
    },
    {
        name: 'Github-Profile',
        path: '/Github-Profile',
        component: () => import('../views/projects/Day28-Github-Profile.vue')
    },
    {
        name: 'Double-Click-Heart',
        path: '/Double-Click-Heart',
        component: () => import('../views/projects/Day29-Double-Click-Heart.vue')
    },
    {
        name: 'Auto-Text-Effect',
        path: '/Auto-Text-Effect',
        component: () => import('../views/projects/Day30-Auto-Text-Effect.vue')
    },
    {
        name: 'Password-Generator',
        path: '/Password-Generator',
        component: () => import('../views/projects/Day31-Password-Generator.vue')
    }
]
const history = createWebHistory();

const router = createRouter({
    history,
    routes
});

export default router;
