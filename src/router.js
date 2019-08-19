import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import Projects from './views/Projects';
import Contact from './views/Contact';
import NotFound from './components/NotFound';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            meta: { layout: 'cover' },
            component: Home
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        // 404 Page
        { path: '/404', component: NotFound },
        { path: '*', redirect: '/404' }
    ]
});
