import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//Firebase
import { auth } from '@/firebase/init';
import { firestorePlugin } from 'vuefire';

Vue.use(firestorePlugin);

// Layouts
import Default from './layouts/Default';
import Cover from './layouts/Cover';
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
