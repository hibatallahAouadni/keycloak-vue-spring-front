<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
        <v-container grid-list-sm fluid>
          <v-layout row wrap>
            <v-flex v-for="i in heroes" :key="i.name" xs4 d-flex>
              <v-list-tile :key="i.name" avatar>
              <v-list-tile-avatar>
                <img :src="i.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="i.name"></v-list-tile-title>
                <v-list-tile-sub-title v-html="i.realName + ' - ' + i.age"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
            </v-flex>
          </v-layout>
        </v-container>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeroesService from '@/services/HeroesService';
import HeroesEntity from '@/models/HeroesEntity';

@Component
export default class Heroes extends Vue {
  private service: HeroesService = new HeroesService();
  private heroes: HeroesEntity[] = [];

  private created() {
    this.service.getAll()
      .then((res: HeroesEntity[]) => {
        this.heroes = res;
      });
      // .catch()
  }
}
</script>
