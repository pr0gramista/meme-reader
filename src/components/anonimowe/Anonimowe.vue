<template>
  <div class="site">
    <h1>Anonimowe</h1>
    <loading-error :error="error" :loading="loading" />

    <div v-if="memes" class="memes">
      <article class="meme" v-for="meme in memes" :key="meme.url">
        <a :href="meme.url"><h1>{{ meme.title }}</h1></a>
        <div>
          {{ meme.content.text }}
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
      page: 'anonimowe'
    }
  }
}
</script>

<style scoped>
.meme {
  font-size: 1.2em;
}
</style>
