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

const LOAD_WITHIN = 1200

export default {
  name: 'InfiteScrollingPage',
  data () {
    return {
      loading: false,
      memes: null,
      error: null,
      nextPage: null,
      autoplay: false
    }
  },
  created () {
    this.fetchFirstData()
    this.autoplay = Cookies.get('autoplay') === 'true'

    this.$root.$on('autoplayChanged', this.changeAutoplay)

    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    handleScroll (event) {
      const height = document.body.clientHeight
      const scrolledBottomPointY = window.innerHeight + window.scrollY

      if (height - scrolledBottomPointY < LOAD_WITHIN) {
        this.fetchNextData()
      }
    },
    changeAutoplay (isEnabled) {
      this.autoplay = isEnabled
    },
    fetchFirstData () {
      this.loading = true
      this.error = null

      const url = API + '/' + this.page

      axios.get(url)
        .then((r) => {
          const response = camelCase(r, { deep: true })
          this.memes = response.data.memes
          this.nextPage = response.data.nextPageUrl
          this.loading = false
        })
        .catch((error) => {
          console.log(error)
          this.loading = false
          this.error = error
        })
    },
    fetchNextData () {
      if (this.loading) {
        return
      }

      this.loading = true
      this.error = null

      axios.get(API + this.nextPage)
        .then((r) => {
          const response = camelCase(r, { deep: true })
          this.memes = this.memes.concat(response.data.memes)
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
