//importing create router and create web history
import {createRouter, createWebHistory } from "vue-router";

//import views
import HomeView from '../views/Home.vue';
import WatchView from '../views/Watch.vue';
import GenView from '../views/Gen.vue';



//setting up the router const, paths and views
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //each view is an object
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/watch',
            name: 'watch',
            component: WatchView,
        },
        {
            path: '/generator',
            name: 'generator',
            component: GenView,
        }
    ],
});

export default router;