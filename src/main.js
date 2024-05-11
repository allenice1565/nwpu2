import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'normalize.css/normalize.css';
import '@assets/css/tailwind.css';
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import 'element-plus/dist/index.css';
import '@assets/css/index.less';

const app = createApp(App);

app.use(router);
app.use(ElementPlus, {
    locale: zhCn,
});
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app');
