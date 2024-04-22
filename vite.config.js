import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            less: {
                math: 'parens-division',
            },
        },
    },
    resolve: {
        alias: {
            '@': '/src',
            '@assets': '/src/assets',
            '@pages': '/src/pages',
            '@layouts': '/src/layouts',
            '@components': '/src/components',
        },
    },
});
