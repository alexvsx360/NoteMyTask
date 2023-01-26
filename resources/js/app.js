require('./bootstrap');
import Vue from 'vue';
import store from './src/store';
import router from './src/plugins/router';
import vuetify from './src/plugins/vuetify';
import axios from './src/http';
import App from './src/App.vue';
// Http Client Config
Vue.prototype.$http = axios;

const isLocal = (window.location.hostname == 'localhost') || (window.location.hostname == '127.0.0.1');

Vue.config.productionTip = false;
Vue.config.silent = !isLocal; // true in production
Vue.config.devtools = !!isLocal; // false in production

Vue.component('app-component', App);
new Vue({
    store,
    router,
    vuetify,
}).$mount('#app');
