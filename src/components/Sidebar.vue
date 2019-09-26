<template>
  <div class="column is-one-quarter sidebar is-hidden-touch">
    <aside class="menu">
      <div class="media" style="padding:0 12px 0 12px;">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ displayName }}</p>
          <p class="subtitle is-6">{{ email }} - [{{ role }}]</p>
        </div>
      </div>
      <p class="menu-label">
      </p>
      <ul class="menu-list">
        <li><a>Home</a></li>
        <li><a>Admin section</a></li>
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