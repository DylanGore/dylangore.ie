import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Projects from './views/Projects.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            meta: { layout: 'nocss' },
            component: Home
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        }
    ]
});
