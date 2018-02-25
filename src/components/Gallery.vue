<template>
    <div class="gallery">
        <div class="slides">
            <div v-for="(url, i) in content.urls" :key="url" class="slide" v-bind:class="{ active: i == slide }">
                <img :src="url" />
            </div>
        </div>
        <v-btn class="gallery-nav"
              absolute
              fab
              right
              color="transparent"
              @click="moveRight"
            >
              <v-icon>chevron_right</v-icon>
        </v-btn>
        <v-btn class="gallery-nav"
              absolute
              fab
              left
              color="transparent"
              @click="moveLeft"
            >
              <v-icon>chevron_left</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
  name: 'Gallery',
  data () {
    return {
      slide: 0
    }
  },
  computed: {
    numberOfSlides: function () {
      return this.content.urls.length
    }
  },
  methods: {
    moveRight () {
      this.slide++
      if (this.slide >= this.numberOfSlides) {
        this.slide = 0
      }
    },
    moveLeft () {
      this.slide--
      if (this.slide < 0) {
        this.slide = this.numberOfSlides - 1
      }
    }
  },
  props: {
    content: {}
  }
}
</script>

<style scoped>
.gallery-nav {
  position: absolute;
  top: 100px;
}

.gallery {
  position: relative;
}

.slide {
  display: none;
}

.slide.active {
  display: block;
}
</style>
