<template>
  <div>
    <h1>9gag</h1>
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="memes" class="memes">
      <article class="meme" v-for="meme in memes" :key="meme.url">
        <a :href="meme.url"><h1>{{ meme.title }}</h1></a>
        <div>
          <img v-if="meme.content.contentType == 'IMAGE' || meme.content.contentType == 'GIF'" :src="meme.content.url">
          <video v-if="meme.content.contentType == 'VIDEO'" muted autoplay controls loop>
            <source :src="meme.content.url">
          </video>
        </div>
        <div class="meta">
          <a class="comments" :href="meme.url">Comments: {{ meme.commentAmount }}</a>
          <a class="source" :href="meme.url">Source</a>
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
      page: '9gag'
    }
  }
}
</script>

<style scoped>
  .meme {
    margin: 10px;
  }
</style>
