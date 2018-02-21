<template>
  <div>
    <loading-error :error="error" :loading="loading" />

    <div v-if="meme">
      {{ meme }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { API } from '@/config.js'

export default {
  name: 'Single',
  data () {
    return {
      loading: false,
      meme: null,
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
      const url = API + '/' + this.page + '/' + id

      this.error = null
      this.loading = true

      axios.get(url)
        .then((response) => {
          this.meme = response.data
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
