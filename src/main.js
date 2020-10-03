import { createApp } from 'vue';

// 插件
import RouterIndex from './router/index.js';

// 视图及样式
import App from './App.vue';
import './index.css';

const instance = createApp(App);

instance.use(RouterIndex);
instance.mount('#app');
