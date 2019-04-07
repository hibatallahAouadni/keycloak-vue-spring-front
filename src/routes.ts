import Home from './views/Home.vue';
import Heroes from './views/Heroes.vue';
import Login from './views/Login.vue';

const ROUTES: any = [
  {
    path: '/',
    name: 'Home',
    icon: 'dashboard',
    component: Home,
  },
  {
    path: '/heroes',
    name: 'Heroes',
    icon: 'face',
    component: Heroes,
  },
  {
    path: '/login',
    name: 'Login',
    icon: 'power',
    component: Login,
  },
  {
    path: '/logout',
    name: 'Logout',
    icon: 'power_off',
    component: Login,
  },
];

export default ROUTES;
