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

  public created() {
    // document.addEventListener('DOMContentLoaded', () => {

    // // Get all "navbar-burger" elements
    // const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // // Check if there are any navbar burgers
    // if ($navbarBurgers.length > 0) {

    //   // Add a click event on each of them
    //   $navbarBurgers.forEach( (el) => {
    //     el.addEventListener('click', () => {
    //       // Get the target from the "data-target" attribute
    //       const target = el.dataset.target;
    //       const $target = document.getElementById(target);

    //       // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    //       el.classList.toggle('is-active');
    //       if ($target !== null) {
    //         $target.classList.toggle('is-active');
    //       }
    //     });
    //   });
    // }

  // });
  }

  private logIn() {
    Vue.prototype.$keycloak.loginFn();
    console.log('Log In action !');
  }

  private logOut() {
    Vue.prototype.$keycloak.logoutFn();
  }
}
</script>
