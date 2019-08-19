import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Layouts
import Default from './layouts/Default';
import Cover from './layouts/Cover';
Vue.component('default-layout', Default);
Vue.component('cover-layout', Cover);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
