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
                path: '/home',
                component: Home,
            },
            {
                path: '/cross-correction',
                component: () => import('@pages/cross-correction/index.vue'),
            },
            {
                path: '/data-annotation',
                component: () => import('@pages/data-annotation/index.vue'),
                redirect: '/data-annotation/statistics',
                children: [
                    {
                        path: '/data-annotation/statistics',
                        component: () =>
                            import(
                                '@pages/data-annotation/statistics/index.vue'
                            ),
                    },
                    {
                        path: '/data-annotation/annotation',
                        component: () =>
                            import(
                                '@pages/data-annotation/annotation/index.vue'
                            ),
                    },
                ],
            },
            {
                path: '/thickness-measurement',
                component: () =>
                    import('@pages/thickness-measurement/index.vue'),
            },
            {
                path: '/defect-detection',
                redirect: '/defect-detection/model-inference',
                component: () => import('@pages/defect-detection/index.vue'),
                children: [
                    {
                        path: '/defect-detection/model-inference',
                        component: () =>
                            import(
                                '@pages/defect-detection/model-inference/index.vue'
                            ),
                    },
                    {
                        path: '/defect-detection/result-display',
                        component: () =>
                            import(
                                '@pages/defect-detection/result-display/index.vue'
                            ),
                    },
                    {
                        path: '/defect-detection/model-training',
                        component: () =>
                            import(
                                '@pages/defect-detection/model-training/index.vue'
                            ),
                    },
                ],
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
