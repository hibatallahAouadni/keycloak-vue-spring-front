<template>
  <div class="admin-section">
    <h1 class="title">Admin Section</h1>
    <h2 class="subtitle">Only user with admin's role can be here.</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Admin extends Vue {
}
</script>

<style scoped>
.admin-section{
  padding: 54px 0 0 0;
}
</style>