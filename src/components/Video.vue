<template>
  <div class="video-placeholder" @click="showPlayer">
    <video v-if="playerVisible" autoplay muted controls loop>
      <source :src="src">
    </video>
    <span v-if="!playerVisible" class="text-hint">Click to play the video</span>
  </div>
</template>

<script>
export default {
  name: 'Video',
  data () {
    return {
      clicked: false
    }
  },
  methods: {
    showPlayer () {
      this.clicked = true
    }
  },
  props: {
    autoplay: Boolean,
    src: String
  },
  computed: {
    playerVisible () {
      return this.autoplay || this.clicked
    }
  }
}
</script>

<style scoped>
.video-placeholder {
  width: 100%;
  min-height: 300px;
}

.text-hint {
  display: block;
  text-align: center;
  width: 100%;
  padding-top: 125px;
  font-size: 2em;
}
</style>
