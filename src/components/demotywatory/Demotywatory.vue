<template>
  <div class="site">
    <h1>Demotywatory</h1>
    <loading-error :error="error" :loading="loading" />

    <div v-if="memes" class="memes">
      <article class="meme" v-for="meme in memes" :key="meme.url">
        <div>
          <img v-if="meme.content.contentType == 'IMAGE' || meme.content.contentType == 'GIF'" :src="meme.content.url">
          <video v-if="meme.content.contentType == 'VIDEO'" muted autoplay controls loop>
            <source :src="meme.content.url">
          </video>
        </div>
        <div class="meta">
          <a class="comments" :href="'#' + meme.viewUrl">Komentarzy: {{ meme.commentAmount }}</a>
          <a class="source" :href="meme.url">Źródło</a>
        </div>
      </article>
    </div>
  </div>
</template>
<script>
import Page from '@/components/Page.vue'

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
