import Vue from 'vue';
import axios, { AxiosRequestConfig } from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueKeyCloak from '@dsb-norge/vue-keycloak-js';

Vue.use(VueAxios, axios);
Vue.use(Vuetify);
Vue.use(VueKeyCloak, {
  config: {
    authRealm: 'demo-auth',
    authClientId: 'spring-web',
    authUrl: 'http://localhost:10001/auth',
    logoutRedirectUri: 'http://localhost:8080',
  },
});

Vue.config.productionTip = false;

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers.Authorization = `Bearer ${Vue.prototype.$keycloak.token}`;
  return config;
}, (err: any) => Promise.reject(err));

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
