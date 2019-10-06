import Home from './views/Home.vue';
import Admin from './views/Admin.vue';

const ROUTES: any = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requireBeAdmin: false,
    },
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: {
      requireBeAdmin: true,
    },
  },
];

export default ROUTES;
