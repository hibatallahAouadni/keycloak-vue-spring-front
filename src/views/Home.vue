<template>
  <div class="home">
    <v-parallax dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
    <v-layout align-center column justify-center>
      <h1 class="display-2 font-weight-thin mb-3">Heroes-Vue</h1>
      <h4 class="subheading">Heroes website build in Vue.js</h4>
    </v-layout>
  </v-parallax>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>
