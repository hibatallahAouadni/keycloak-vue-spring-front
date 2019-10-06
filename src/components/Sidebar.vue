<template>
  <div class="column is-one-quarter sidebar is-hidden-touch">
    <aside class="menu">
      <div class="media" style="padding:0 12px 0 12px;">
        <div class="media-content">
          <p class="title is-4">{{ displayName }}</p>
          <p class="subtitle is-6 tag">{{ email }}</p>
          <p v-if="role === 'ADMIN'" class="tag is-danger">{{ role }}</p>
          <p v-else class="tag is-info">{{ role }}</p>
        </div>
      </div>
      <p class="menu-label">
      </p>
      <ul class="menu-list">
        <li><router-link to="/">Home section</router-link></li>
        <li><router-link to="/admin">Admin section</router-link></li>
      </ul>
    </aside>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Sidebar extends Vue {

  @Prop({default: 'Unknow name'})
  private displayName!: string;

  @Prop({default: 'Unknow email'})
  private email!: string;


  @Prop({default: 'Unknow role'})
  private role!: string;
}
</script>

<style scoped>
.sidebar {
  margin: 24px 0 0 0;
}
</style>