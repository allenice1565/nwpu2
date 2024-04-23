import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'normalize.css/normalize.css';
import '@assets/css/tailwind.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '@assets/css/index.less';

const app = createApp(App);

app.use(router);
app.use(ElementPlus);

app.mount('#app');
