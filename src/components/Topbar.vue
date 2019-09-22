<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Home
        </a>

        <a class="navbar-item">
          Documentation
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            More
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              About
            </a>
            <a class="navbar-item">
              Jobs
            </a>
            <a class="navbar-item">
              Contact
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
      </div>

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
