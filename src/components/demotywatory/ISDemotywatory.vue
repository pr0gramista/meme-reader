<template>
  <div class="site">
    <h1>Demotywatory</h1>
    <loading-error :error="error" :loading="loading" />

    <div v-if="memes" class="memes">
      <article class="meme" v-for="meme in memes" :key="meme.url">
        <h2 v-if="meme.content.contentType == 'VIDEO' || meme.content.contentType == 'GALLERY'" :src="meme.content.url">{{ meme.title }}</h2>
        <div>
          <img v-if="meme.content.contentType == 'IMAGE' || meme.content.contentType == 'GIF'" :src="meme.content.url">
          <video-manual v-if="meme.content.contentType == 'VIDEO'" :src="meme.content.url" :autoplay="autoplay" />
        </div>
        <ul v-if="meme.content.contentType == 'GALLERY'" class="gallery">
          <gallery :content="meme.content" />
        </ul>
        <ul v-if="meme.content.contentType == 'CAPTIONED_GALLERY'" class="gallery">
          <gallery-captioned :content="meme.content" />
        </ul>
        <div class="meta">
          <a class="comments" :href="meme.url">Komentarzy: {{ meme.commentCount }}</a>
          <a class="source" :href="meme.url">Źródło</a>
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
      page: 'demotywatory'
    }
  }
}
</script>

<style scoped>
</style>
