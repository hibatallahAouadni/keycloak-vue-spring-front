import Vue from 'vue';
import axios, { AxiosRequestConfig } from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import VueKeyCloak from '@dsb-norge/vue-keycloak-js';
import 'bulma/css/bulma.css';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

function tokenInterceptor() {
  axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${Vue.prototype.$keycloak.token}`;
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
}

Vue.use(VueKeyCloak, {
  config: {
    authRealm: 'test',
    authClientId: 'test-web',
    authUrl: 'http://localhost:10001/auth',
    logoutRedirectUri: 'http://localhost:8443',
  },
  init: {
    onLoad: 'check-sso',
  },
  onReady: () => {
    if (Vue.prototype.$keycloak.authenticated) {
      tokenInterceptor();
    }

    new Vue({
      router,
      render: (h) => h(App),
    }).$mount('#app');
  },
});
