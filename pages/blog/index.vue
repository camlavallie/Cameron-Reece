<template>
  <div class="container">
    <div class="text-3xl lg:text-5xl font-thin text-center mt-12">
      <p class="text-gray-900">Blog Coming Soon..</p>
      <p class="text-3xl text-gray-500">For now enjoy some beautiful photos!</p>
    </div>
    <b-carousel
      :autoplay="false"
      indicator-custom
      :indicator-inside="false"
      :overlay="gallery"
    >
      <b-carousel-item v-for="(item, i) in 20" :key="i">
        <a @click="switchGallery(true)" class="image ">
          <img :src="getImgUrl(i)" />
        </a>
      </b-carousel-item>
      <span
        v-if="gallery"
        @click="switchGallery(false)"
        class="modal-close is-large"
      />
      <template slot="indicators" slot-scope="props">
        <figure class="al image" :draggable="false">
          <img :draggable="false" :src="getImgUrl(props.i)" :title="props.i" />
        </figure>
      </template>
    </b-carousel>
  </div>
</template>

<script>
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
export default {
  data() {
    return {
      gallery: false
    }
  },
  methods: {
    getImgUrl(value) {
      value += 50
      return `https://picsum.photos/id/10${value}/1230/500`
    },
    switchGallery(value) {
      this.gallery = value
      if (value) {
        return document.documentElement.classList.add('is-clipped')
      } else {
        return document.documentElement.classList.remove('is-clipped')
      }
    }
  }
}
</script>

<style>
.is-active .al img {
  border: 1px solid #fff;
  filter: grayscale(0%);
}
.al img {
  border: 1px solid transparent;
  filter: grayscale(100%);
}
</style>
