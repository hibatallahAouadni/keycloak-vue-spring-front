<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a v-if="authenticated" class="button is-primary" @click="logOut">
              <strong>Log out</strong>
            </a>
            <a v-else class="button is-primary" @click="logIn">
              <strong>Log in</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Topbar extends Vue {

  @Prop({default: false})
  private authenticated!: boolean;

  private logIn() {
    Vue.prototype.$keycloak.loginFn();
  }

  private logOut() {
    Vue.prototype.$keycloak.logoutFn();
  }
}
</script>
