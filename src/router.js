import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            meta: { layout: 'cover' },
            component: () => import('./views/Home')
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('./views/Projects')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('./views/Contact')
        },
        // 404 Page & Redirect
        { path: '/404', component: () => import('./views/error/NotFound') },
        { path: '*', redirect: '/404' }
    ]
});
