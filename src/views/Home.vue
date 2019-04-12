<template>
  <div class="home">
    <v-parallax dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
    <v-layout align-center column justify-center>
      <h1 class="display-2 font-weight-thin mb-3">Heroes-Vue</h1>
      <h4 class="subheading">Heroes website build in Vue.js</h4>
    </v-layout>
    <div>
      <v-btn color="success" @click="loadTest">Test</v-btn>
      <v-btn color="error" @click="loadUnsafe">Unsafe</v-btn>
      <v-btn color="warning">Warning</v-btn>
      <v-btn color="info">Info</v-btn>
    </div>
  </v-parallax>


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
}
</script>
