import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Layouts
import Default from './layouts/Default';
import NoCSS from './layouts/NoCSS';
Vue.component('default-layout', Default);
Vue.component('nocss-layout', NoCSS);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
