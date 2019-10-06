<template>
  <div id="app">
    <div class="columns">
      <Sidebar v-if="authenticated" :email="user.email" :displayName="user.username" :role="user.role" />
      <div class="column">
        <Topbar :authenticated="authenticated" />
        <div>
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ROUTES from './routes';
import UserEntity from './models/UserEntity';
import Topbar from '@/components/Topbar.vue';
import Sidebar from '@/components/Sidebar.vue';

@Component({
  components: {
    Topbar,
    Sidebar,
  },
})
export default class App extends Vue {
  private loginRoute: any = ROUTES[2];
  private links: any = [
    ROUTES[0], ROUTES[1],
  ];

  private authenticated = false;
  private user: UserEntity = new UserEntity();

  private mounted() {
    try {
      if (Vue.prototype.$keycloak.token !== null) {
        this.authenticated = true;
        this.user.username = Vue.prototype.$keycloak.userName;
        this.user.role = Vue.prototype.$keycloak.tokenParsed.realm_access.roles[0];
        this.user.email = Vue.prototype.$keycloak.tokenParsed.email;
      } else {
        console.log('Not logged');
      }
    } catch (e) {
      //
    }
  }

  private logout() {
    try {
      Vue.prototype.$keycloak.logoutFn();
    } catch (e) {
      //
    }
  }

  private onNavClick(path: any): void {
    this.$router.push(path);
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow: hidden;
}
</style>
