import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    css: {
        preprocessorOptions: {
            less: {
                math: 'parens-division',
            },
        },
        postcss: {
            plugins: [tailwindcss, autoprefixer],
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
