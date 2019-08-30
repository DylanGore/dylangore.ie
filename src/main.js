import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { auth } from '@/firebase/init';
import { firestorePlugin } from 'vuefire';
import VueAnalytics from 'vue-analytics';
import Default from './layouts/Default';
import Cover from './layouts/Cover';

//Firebase
Vue.use(firestorePlugin);

// Google Analytics
const isProd = process.env.NODE_ENV === 'production';

Vue.use(VueAnalytics, {
    id: process.env.VUE_APP_GA_TRACKING_ID,
    router,
    debug: {
        disabled: !isProd,
        sendHitTask: isProd
    },
    beforeFirstHit() {
        Vue.$ga.set('anonymizeIp', true);
    }
});

// Layouts
Vue.component('default-layout', Default);
Vue.component('cover-layout', Cover);

Vue.config.productionTip = false;

let app = null;

// Firebase authentication check
auth.onAuthStateChanged(user => {
    // Initialize app if not created
    if (!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app');
    }

    // Save the current user in the store (if page is refreshed, user stays logged in)
    store.commit('setUser', user);
});
