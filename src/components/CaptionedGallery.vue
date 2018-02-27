<template>
    <div class="gallery">
        <div class="slides">
          <div v-for="(image, i) in content.images" :key="image.url" class="slide" v-bind:class="{ active: i == slide }">
            <div class="captions">
              <h3>{{ image.title }}</h3>
              {{ image.caption }}
            </div>
            <img :src="image.url" />
          </div>
        </div>
        <v-btn class="gallery-nav"
              absolute
              fab
              right
              @click="moveRight"
            >
              <v-icon>chevron_right</v-icon>
        </v-btn>
        <v-btn class="gallery-nav"
              absolute
              fab
              left
              @click="moveLeft"
            >
              <v-icon>chevron_left</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
  name: 'GalleryCaptioned',
  data () {
    return {
      slide: 0
    }
  },
  computed: {
    numberOfSlides: function () {
      return this.content.images.length
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

.application .theme--light.btn:not(.btn--icon):not(.btn--flat), .theme--light .btn:not(.btn--icon):not(.btn--flat),
.application .theme--dark.btn:not(.btn--icon):not(.btn--flat), .theme--dark .btn:not(.btn--icon):not(.btn--flat) {
  background: rgba(0, 0, 0, 0.25);
  color: #FFF;
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

.captions {
  margin: 8px 0;
}
</style>
