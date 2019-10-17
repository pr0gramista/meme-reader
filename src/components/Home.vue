<template>
  <div>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex sm4 xs6>
          <router-link to="/jbzd">
          <v-card class="jbzd">
            <v-card-text class="px-0">Jbzd</v-card-text>
          </v-card>
          </router-link>
        </v-flex>
        <v-flex sm4 xs6>
          <router-link to="/kwejk">
          <v-card class="kwejk">
            <v-card-text class="px-0">Kwejk</v-card-text>
          </v-card>
          </router-link>
        </v-flex>
        <v-flex sm4 xs6>
          <router-link to="/demotywatory">
          <v-card class="demotywatory">
            <v-card-text class="px-0">Demotywatory</v-card-text>
          </v-card>
          </router-link>
        </v-flex>
        <v-flex sm4 xs6>
          <router-link to="/mistrzowie">
          <v-card class="mistrzowie">
            <v-card-text class="px-0">Mistrzowie</v-card-text>
          </v-card>
          </router-link>
        </v-flex>
        <v-flex sm4 xs6>
          <router-link to="/9gag">
          <v-card class="ngag">
            <v-card-text class="px-0">9gag</v-card-text>
          </v-card>
          </router-link>
        </v-flex>
        <v-flex sm4 xs6>
          <router-link to="/9gagnsfw">
          <v-card class="ngag">
            <v-card-text class="px-0">9gag NSFW</v-card-text>
          </v-card>
          </router-link>
        </v-flex>
        <v-flex sm4 xs6>
          <router-link to="/anonimowe">
          <v-card class="anonimowe">
            <v-card-text class="px-0">Anonimowe</v-card-text>
          </v-card>
          </router-link>
        </v-flex>
      </v-layout>
      <div class="memorial">
        Build to browse community owned images without bloatware, adware and stinky UI.
        Made by <a href="https://pr0gramista.pl">pr0gramista</a>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.memorial {
  margin: 10px;
}
</style>
