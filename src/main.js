import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store.js';
import 'element-plus/dist/index.css';
import ElementPlus from 'element-plus';


createApp(App).use(store).use(router).use(ElementPlus).mount('#app')

console.log(process.env);
