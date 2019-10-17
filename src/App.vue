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
        <v-list-tile @click="go('9gag')">
          <v-list-tile-content>
            <v-list-tile-title>9gag</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="go('9gagnsfw')">
          <v-list-tile-content>
            <v-list-tile-title>9gag NSFW</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="go('anonimowe')">
          <v-list-tile-content>
            <v-list-tile-title>Anonimowe</v-list-tile-title>
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
        <v-list-tile>
          <v-list-tile-content>
              <v-switch
                label="Auto play"
                v-model="autoplay">
              </v-switch>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
              <v-switch
                label="Infinite scrolling"
                v-model="infiniteScrolling">
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
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  name: 'App',
  data: () => ({
    drawer: null,
    darkMode: false,
    autoplay: false,
    infiniteScrolling: false
  }),
  props: {
    source: String
  },
  methods: {
    go: function (site) {
      if (this.infiniteScrolling) {
        this.$router.push({ 'path': '/' + site + '/scrolling' })
      } else {
        this.$router.push({ 'path': '/' + site })
      }
    }
  },
  watch: {
    darkMode: function (isEnabled, wasEnabled) {
      Cookies.set('dark', isEnabled, { expires: 2000 })
    },
    autoplay: function (isEnabled, wasEnabled) {
      this.$root.$emit('autoplayChanged', isEnabled)
      Cookies.set('autoplay', isEnabled, { expires: 2000 })
    },
    infiniteScrolling: function (isEnabled, wasEnabled) {
      this.$root.$emit('infiniteScrollingChanged', isEnabled)
      Cookies.set('infiniteScrolling', isEnabled, { expires: 2000 })
    }
  },
  created () {
    this.darkMode = Cookies.get('dark') === 'true'
    this.autoplay = Cookies.get('autoplay') === 'true'
    this.infiniteScrolling = Cookies.get('infiniteScrolling') === 'true'
  }
}
</script>

<style scoped>
a.site-name {
  text-decoration: none;
  color: inherit;
}
</style>
