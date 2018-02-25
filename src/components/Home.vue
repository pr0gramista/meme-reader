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
          <router-link to="/thecodinglove">
          <v-card class="thecodinglove">
            <v-card-text class="px-0">The Coding Love</v-card-text>
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
      </v-layout>
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

.jbzd {
  color: white;
  background: #252525;
}

.ngag {
}

.kwejk {
  background: #fac701;
}

.demotywatory {
  color: white;
  background: #2d2222;
}

.mistrzowie {

}
</style>
