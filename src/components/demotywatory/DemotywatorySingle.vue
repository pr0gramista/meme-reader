<template>
  <div>
    <loading-error :error="error" :loading="loading" />

    <div v-if="meme">
      <article class="meme">
        <a :href="meme.url"><h1>{{ meme.title }}</h1></a>
        <div>
          <img v-if="meme.content.contentType == 'IMAGE' || meme.content.contentType == 'GIF'" :src="meme.content.url">
          <video v-if="meme.content.contentType == 'VIDEO'" muted autoplay controls loop>
            <source :src="meme.content.url">
          </video>
          <ul v-if="meme.content.contentType == 'GALLERY'" class="gallery">
            <button class="btn btn-gallery-nav btn-gallery-nav-left" ng-click="previousSlide(post)">
                <i class="fa fa-angle-left" aria-hidden="true"></i>
            </button>
            <button class="btn btn-gallery-nav btn-gallery-nav-right" ng-click="nextSlide(post)">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
            </button>
            <li v-for="url in meme.content.urls" :key="url" :class="meme.currentSlide == $index ? 'active' : ''">
                <img :src="url">
            </li>
          </ul>
        </div>
        <div class="meta">
          <a class="comments" href="#">Komentarzy: {{ meme.commentAmount }}</a>
          <a class="source" :href="meme.url">Źródło</a>
        </div>
        <div class="comment-section">
          <div v-for="comment in meme.comments" :key="comment.content" class="comment">
            <div ng-if="comment.author != null" class="comment-author"><a :href="comment.author.profileUrl">{{ comment.author.name }}</a></div>
            <div class="comment-content">
                {{ comment.content }}
            </div>
            <div class="comment-responses">
                <div v-for="response in comment.responses" :key="response.content" class="comment-response">
                  <div v-if="response.author != null" class="response-author"><a :href="response.author.profileUrl">{{ response.author.name }}</a></div>
                  <div class="response-content">
                      {{ response.content }}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
<script>
import Single from '@/components/Single.vue'

export default {
  extends: Single,
  data () {
    return {
      page: 'demotywatory'
    }
  }
}
</script>

<style scoped>
</style>
