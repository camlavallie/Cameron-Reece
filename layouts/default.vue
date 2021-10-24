<template>
  <div id="top-page">
    <Nav />
    <nuxt />
    <!-- <TagManager /> -->
    <div
      v-if="isOpen"
      class="fixed bottom-0 left-0 lg:flex items-center p-4 bg-gray-100 shadow-sm justify-center w-full"
    >
      <div class="text-5xl pb-2 leading-none">
        🍪
      </div>
      <div class="lg:mx-8">
        <p>
          Can I use cookies for analytics? Read
          <nuxt-link class="text-link" to="/privacy-policy"
            >the privacy policy</nuxt-link
          >
          for more information.
        </p>
      </div>
      <div class="flex justify-center mt-4 lg:mt-0">
        <div
          class="button ml-2 md:ml-0 cursor-pointer p-1 border border-1 border-black rounded hover:bg-black hover:text-white"
          @click="accept"
        >
          I Agree
        </div>
        <div
          class="button ml-6 cursor-pointer text-2xl hover:text-6xl hover:font-bold font-semibold text-red-500 hover:text-black "
          @click="deny"
        >
          &times;
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from '~/components/Nav'
import Footer from '~/components/Footer'
import Vue from 'vue'
// import Buefy from "buefy";
// import 'buefy/dist/buefy.css'
// import TagManager from '~/components/TagManager.vue'
import { bootstrap } from 'vue-gtag'
export default {
  components: {
    Nav,
    Footer
    // TagManager
  },
  data() {
    return {
      isOpen: false
    }
  },
  mounted() {
    if (!this.getGDPR() === true) {
      this.isOpen = true
    }
  },
  methods: {
    getGDPR() {
      if (process.browser) {
        return localStorage.getItem('GDPR:accepted', true)
      }
    },
    accept() {
      if (process.browser) {
        bootstrap().then(gtag => {
          this.isOpen = false
          localStorage.setItem('GDPR:accepted', true)
          location.reload()
        })
      }
    },
    deny() {
      if (process.browser) {
        this.isOpen = false
        localStorage.setItem('GDPR:accepted', false)
      }
    }
  }
}
</script>

<style>
html,
body {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
