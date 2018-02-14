<template>
  <div>
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="meme">
      {{ meme }}
    </div>
  </div>
</template>
<script>
import Single from '@/components/Single.vue'

export default {
  extends: Single,
  data () {
    return {
      page: 'jbzd'
    }
  }
}
</script>

<style scoped>
  .meme {
    margin: 10px;
  }
</style>
