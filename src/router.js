import Vue from 'vue';
import Router from 'vue-router';

import firebase from 'firebase/app';
import 'firebase/auth';

Vue.use(Router);

let router = new Router({
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
            path: '/projects/:id',
            name: 'project',
            component: () => import('./views/projects/Project')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('./views/Contact')
        },
        {
            path: '/login',
            name: 'login',
            meta: {
                requiresGuest: true
            },
            component: () => import('./views/auth/Login')
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            meta: {
                requiresAuth: true
            },
            component: () => import('./views/Dashboard')
        },
        // 404 Page & Redirect
        { path: '/404', component: () => import('./views/error/NotFound') },
        { path: '*', redirect: '/404' }
    ]
});

// Check for authenticated user (Route Guard)
router.beforeEach((to, from, next) => {
    if (to.matched.some(rec => rec.meta.requiresAuth)) {
        // Check user authentication state
        let user = firebase.auth().currentUser;
        if (user) {
            // User is logged in
            next();
        } else {
            // User is not logged in
            next({ name: 'login' });
        }
    } else {
        next();
    }
});

// Check for non-authenticated 'guest' user (Route Guard)
router.beforeEach((to, from, next) => {
    if (to.matched.some(rec => rec.meta.requiresGuest)) {
        // Check user authentication state
        let user = firebase.auth().currentUser;
        if (!user) {
            // User is logged out
            next();
        } else {
            // User logged in
            next({ name: 'home' });
        }
    } else {
        next();
    }
});

export default router;
