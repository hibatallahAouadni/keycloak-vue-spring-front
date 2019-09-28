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

  private colorContent = '';
  private contentNotification = '';
  private showNotification = false;

  private loadPrivate() {
    this.service.private()
      .then((value: string) => this.showNotif(value, 'is-success'))
      .catch((err: any) => this.showNotif(this.ERROR_UNAUTHORIZED, 'is-danger'));
  }

  private loadPublic() {
    this.service.public()
      .then((value: string) => this.showNotif(value, 'is-success'))
      .catch((err: any) => this.showNotif(this.ERROR_UNAUTHORIZED, 'is-danger'));
  }

  private loadAdmin() {
    this.service.admin()
      .then((value: string) => this.showNotif(value, 'is-success'))
      .catch((err: any) => this.showNotif(this.ERROR_UNAUTHORIZED, 'is-danger'));
  }


  private loadUser() {
    this.service.user()
      .then((value: string) => this.showNotif(value, 'is-success'))
      .catch((err: any) => this.showNotif(this.ERROR_UNAUTHORIZED, 'is-danger'));
  }

  private showNotif(msg: string, colorContent: string) {
    this.showNotification = true;
    this.contentNotification = msg;
    this.colorContent = colorContent;
  }

  private deleteNotif() {
    this.showNotification = false;
    this.contentNotification = '';
    this.colorContent = '';
  }
}
</script>
