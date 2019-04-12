<template>
  <div id="app">
    <router-view/>

    <v-navigation-drawer permanent absolute>
      <v-toolbar flat class="transparent">
        <v-list v-if="authenticated" class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{user.username}} - [{{user.role}}]</v-list-tile-title>
              <v-list-tile-title>{{user.email}}</v-list-tile-title>
            </v-list-tile-content>

            <v-btn flat icon color="grey" @click="logout">
              <v-icon>favorite</v-icon>
            </v-btn>
          </v-list-tile>
        </v-list>
        <v-list-tile v-else @click="onNavClick(loginRoute.path)">
          <v-list-tile-action>
            <v-icon>{{ loginRoute.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ loginRoute.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider />
        <v-list-tile v-for="l in links" :key="l.name" @click="onNavClick(l.path)">
          <v-list-tile-action>
            <v-icon>{{ l.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ l.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ROUTES from './routes';
import UserEntity from './models/UserEntity';

@Component
export default class App extends Vue {
  private loginRoute: any = ROUTES[2];
  private links: any = [
    ROUTES[0], ROUTES[1],
  ];

  private authenticated = false;
  private user: UserEntity = new UserEntity();

  private mounted() {
    try {
      if(Vue.prototype.$keycloak.token !== null) {
        this.authenticated = true;
        this.user.username = Vue.prototype.$keycloak.userName;
        this.user.role = Vue.prototype.$keycloak.tokenParsed.realm_access.roles[0];
        this.user.email = Vue.prototype.$keycloak.tokenParsed.email;
      } else {
        console.log('Not logged')
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
  /* color: #2c3e50; */
  overflow: hidden;
}

</style>
