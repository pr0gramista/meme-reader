<template>
  <div>
    <h1>Jbzd</h1>
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="memes" class="content">
      <h2>{{ memes }}</h2>
    </div>
  </div>
</template>
<script>
import Page from '@/components/Page.vue'

export default {
  extends: Page,
  data () {
    return {
      page: 'jbzd'
    }
  }
}
</script>
