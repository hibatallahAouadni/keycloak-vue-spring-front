import Vue from 'vue';
import Router, { Route, RouteRecord } from 'vue-router';
import ROUTES from './routes';

Vue.use(Router);

const router = new Router({
  routes: ROUTES,
});

// TODO:
// router.beforeEach((to: Route, from: Route, next: any) => {
//   if (to.matched.some((record: RouteRecord) => record.meta.requireBeAdmin)) {
//     if (Vue.prototype.$keycloak.authenticated) {
//       if (Vue.prototype.$keycloak.tokenParsed.realm_access.roles[0] === 'ADMIN') {
//         next();
//       } else {
//         alert('You are not allow to go in the admin section');
//       }
//     } else {
//       alert('You are not authenticated');
//     }
//   } else {
//     next();
//   }
// });


export default router;
