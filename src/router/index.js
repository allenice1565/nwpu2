import { createRouter, createWebHistory } from 'vue-router';
import Home from '@pages/home/index.vue';
import DefaultLayout from '@layouts/default/index.vue';

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        redirect: '/home',
        children: [
            {
                path: '/cross-correction',
                component: () => import('@pages/cross-correction/index.vue'),
            },
            {
                path: '/data-annotation',
                component: () => import('@pages/data-annotation/index.vue'),
            },
            {
                path: '/defect-detection',
                component: () => import('@pages/defect-detection/index.vue'),
            },
            {
                path: '/thickness-measurement',
                component: () =>
                    import('@pages/thickness-measurement/index.vue'),
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
