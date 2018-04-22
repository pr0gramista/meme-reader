// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import LoadingErrorView from '@/components/LoadingErrorView.vue'
import Gallery from '@/components/Gallery.vue'
import GalleryCaptioned from '@/components/CaptionedGallery.vue'
import Video from '@/components/Video.vue'
import './assets/style.scss'
import './assets/main.styl'

Vue.use(Vuetify)
Vue.component('loading-error', LoadingErrorView)
Vue.component('gallery', Gallery)
Vue.component('gallery-captioned', GalleryCaptioned)
Vue.component('video-manual', Video)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
