<template>
  <div>
    <div class="buttons" style="padding:36px;">
      <a class="button is-primary is-rounded" @click="loadPublic">Get Public content</a>
      <a class="button is-link is-rounded" @click="loadPrivate">Get Private content</a>
      <a class="button is-info is-rounded" @click="loadUser">Get User content</a>
      <a class="button is-success is-rounded" @click="loadAdmin">Get Admin content</a>
    </div>

    <div v-if="showNotification" class="notification" :class="colorContent">
      <button class="delete" @click="deleteNotif"></button>
        {{ contentNotification }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UserService from '@/services/UserService';

@Component
export default class Home extends Vue {
  private service: UserService = new UserService();

  private ERROR_UNAUTHORIZED = 'You haven\'t access to this content';

  private colorContent = 'is-primary';
  private contentNotification = '';
  private showNotification = false;

  private loadPrivate() {
    this.colorContent = 'is-link';
    this.service.private()
      .then((value: string) => this.showNotif(value))
      .catch((err: any) => this.showNotif(this.ERROR_UNAUTHORIZED));
  }

  private loadPublic() {
    this.colorContent = 'is-primary';
    this.service.public()
      .then((value: string) => this.showNotif(value))
      .catch((err: any) => this.showNotif(this.ERROR_UNAUTHORIZED));
  }

  private loadAdmin() {
    this.colorContent = 'is-success';
    this.service.admin()
      .then((value: string) => this.showNotif(value))
      .catch((err: any) => this.showNotif(this.ERROR_UNAUTHORIZED));
  }


  private loadUser() {
    this.colorContent = 'is-info';
    this.service.user()
      .then((value: string) => this.showNotif(value))
      .catch((err: any) => this.showNotif(this.ERROR_UNAUTHORIZED));
  }

  private showNotif(msg: string) {
    this.showNotification = true;
    this.contentNotification = msg;
  }

  private deleteNotif() {
    this.showNotification = false;
    this.contentNotification = '';
  }
}
</script>
