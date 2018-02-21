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

export default {
  name: 'Page',
  data () {
    return {
      loading: false,
      memes: null,
      error: null,
      page: this.$route.params.page
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      const id = this.$route.params.id
      let url = API + '/' + this.page
      if (id != null) {
        url += '/page/' + id
      }

      this.error = null
      this.loading = true

      axios.get(url)
        .then((response) => {
          this.memes = response.data.memes
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
