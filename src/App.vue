<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      app
      hide-overlay
    >
      <v-list>
        <v-list-tile @click="go('')">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="go('kwejk')">
          <v-list-tile-content>
            <v-list-tile-title>Kwejk</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="go('demotywatory')">
          <v-list-tile-content>
            <v-list-tile-title>Demotywatory</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="go('mistrzowie')">
          <v-list-tile-content>
            <v-list-tile-title>Mistrzowie</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="go('thecodinglove')">
          <v-list-tile-content>
            <v-list-tile-title>The Coding Love</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="go('9gag')">
          <v-list-tile-content>
            <v-list-tile-title>9gag</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark app scroll-off-screen>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title><router-link to="/">Meme reader</router-link></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer color="indigo">
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  },
  methods: {
    go: function (site) {
      this.$router.push({ 'path': '/' + site })
    }
  }
}
</script>

<style>
</style>
