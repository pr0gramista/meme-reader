<template>
  <v-app id="app" :dark="darkMode">
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
        <v-list-tile @click="go('jbzd')">
          <v-list-tile-content>
            <v-list-tile-title>Jbzd</v-list-tile-title>
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
        <v-list-tile>
          <v-list-tile-content>
              <v-switch 
                label="Dark mode"
                v-model="darkMode">
              </v-switch>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark app scroll-off-screen>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title><router-link to="/" class="site-name">Meme reader</router-link></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    <v-footer color="indigo darken-2 white--text" height="64">
      <v-container>Made with hate to bloatware and adware. Brought to you by <a class="indigo--text text--lighten-3" href="https://github.com/pr0gramista/meme-reader">@pr0gramista</a></v-container>
    </v-footer>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: null,
    darkMode: false
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

<style scoped>
a.site-name {
  text-decoration: none;
  color: inherit;
}
</style>
