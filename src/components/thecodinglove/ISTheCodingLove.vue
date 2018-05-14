<template>
  <div class="site">
    <h1>The Coding Love</h1>
    <loading-error :error="error" :loading="loading" />

    <div v-if="memes" class="memes">
      <article class="meme" v-for="meme in memes" :key="meme.url">
        <a :href="meme.url"><h1>{{ meme.title }}</h1></a>
        <div>
          <img v-if="meme.content.contentType == 'IMAGE' || meme.content.contentType == 'GIF'" :src="meme.content.url">
        </div>
      </article>
    </div>
  </div>
</template>
<script>
import Page from '@/components/InfiniteScrollingPage.vue'

export default {
  extends: Page,
  data () {
    return {
      page: 'thecodinglove'
    }
  }
}
</script>

<style scoped>
</style>
