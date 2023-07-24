//setting up create app and importing the app file
import { createApp } from 'vue';
import App from './App.vue';
//import vue router
import VueRouter from './router/index.js';
//.use then .mount
createApp(App).use(VueRouter).mount('#app');