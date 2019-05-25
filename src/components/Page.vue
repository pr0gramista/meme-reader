<template>
  <div>
    <loading-error :error="error" :loading="loading" />

    <div v-if="memes" class="content">
      <h2>{{ memes }}</h2>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { API } from '@/config.js'
import Cookies from 'js-cookie'
import camelCase from 'camelcase-keys'

export default {
  name: 'Page',
  data () {
    return {
      loading: false,
      memes: null,
      error: null,
      nextPage: null,
      page: this.$route.params.page,
      autoplay: false
    }
  },
  created () {
    this.fetchData()
    this.autoplay = Cookies.get('autoplay') === 'true'

    this.$root.$on('autoplayChanged', this.changeAutoplay)
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    changeAutoplay (isEnabled) {
      this.autoplay = isEnabled
    },
    fetchData () {
      const id = this.$route.params.id
      let url = API + '/' + this.page
      if (id != null) {
        url += '/page/' + id
      }

      this.error = null
      this.loading = true

      this.$vuetify.goTo(0, {
        duration: 500,
        easing: 'easeInOutCubic'
      })

      axios.get(url)
        .then((r) => {
          const response = camelCase(r, { deep: true })
          this.memes = response.data.memes
          console.log(response)
          this.nextPage = response.data.nextPageUrl
          this.loading = false
        })
        .catch((error) => {
          console.log(error)
          this.loading = false
          this.error = error
        })
    }
  }
}
</script>

<style scoped>

</style>
