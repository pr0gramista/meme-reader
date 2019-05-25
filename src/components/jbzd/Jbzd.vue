<template>
  <div class="site">
    <h1>Jbzd</h1>
    <loading-error :error="error" :loading="loading" />

    <div v-if="memes" class="memes">
      <article class="meme" v-for="meme in memes" :key="meme.url">
        <a :href="meme.url"><h1>{{ meme.title }}</h1></a>
        <div>
          <img v-if="meme.content.contentType == 'IMAGE'" :src="meme.content.url" />
          <video-manual v-if="meme.content.contentType == 'VIDEO'" :src="meme.content.url" :autoplay="autoplay" />
        </div>
        <ul v-if="meme.content.contentType == 'GALLERY'" class="gallery">
          <gallery :content="meme.content" />
        </ul>
        <div class="meta">
          <a class="comments" :href="meme.url">Komentarzy: {{ meme.commentCount }}</a>
          <a class="source" :href="meme.url">Źródło</a>
        </div>
      </article>
    </div>
    <div class="text-xs-center" v-if="nextPage">
      <v-btn color="normal" large :to="nextPage">Następna strona</v-btn>
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

<style scoped>
</style>
