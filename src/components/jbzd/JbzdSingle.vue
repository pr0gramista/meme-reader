<template>
  <div>
    <loading-error :error="error" :loading="loading" />

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
