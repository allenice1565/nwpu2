import { createRouter, createWebHistory } from 'vue-router';
import Home from '@pages/home/index.vue';
import DefaultLayout from '@layouts/default.vue';

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/defect-detection',
                component: () => import('@pages/defect-detection/index.vue'),
            },
        ],
    },
    {
        path: '/home',
        component: Home,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
