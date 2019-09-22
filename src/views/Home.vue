<template>
  <div class="buttons" style="padding:36px;">
    <a class="button is-primary is-rounded" @click="loadUnsafe">Call API - Not Logged</a>
    <a class="button is-link is-rounded" @click="loadTest">Call API - Test</a>
    <a class="button is-info is-rounded" @click="loadUser">Call API - USER</a>
    <a class="button is-success is-rounded" @click="loadAdmin">Call API - ADMIN</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UserService from '@/services/UserService';

@Component
export default class Home extends Vue {
  private service: UserService = new UserService();

  private loadTest() {
    this.service.test()
      .then((value: string) => console.log(value))
      .catch((err: any) => console.log(err));
  }

  private loadUnsafe() {
    this.service.unsafe()
      .then((value: string) => console.log(value))
      .catch((err: any) => console.log(err));
  }

  private loadAdmin() {
    this.service.admin()
      .then((value: string) => console.log(value))
      .catch((err: any) => console.log(err));
  }


  private loadUser() {
    this.service.user()
      .then((value: string) => console.log(value))
      .catch((err: any) => console.log(err));
  }
}
</script>
