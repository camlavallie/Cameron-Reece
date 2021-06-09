<template>
  <div>
    <div v-for="person in persons" :key="person.id">
      <div class="m-3">
        <img
          :src="person.mugShot"
          alt="_Summit Wealth Strategies Advisor"
          tabindex="-1"
          class="profile w-64 rounded-full shadow-lg text"
        >

        <Modal2/>
      </div>
      <button @click="isOpen = !isOpen" class="text-blue-500 mt-3 text-xl hover:text-blue-700">
        <span class="underline">{{person.name}}</span>
        <br>
        <span class="text-sm">{{person.role}}</span>
        <br>
        <span class="text-sm">Read More...</span>
      </button>
      <div class="relative">
        <button
          @click="isOpen = false"
          v-if="isOpen"
          tabindex="-1"
          class="h-full w-full bg-black fixed inset-0 h-full bg-black opacity-50 cursor-default"
        ></button>
        <div
          v-if="isOpen && person"
          class="absolute top-auto bg-white mt-3 rounded-lg py-2 right-0 shadow-xl"
        >
          <div class="flex items-center justify-center fixed left-0 bottom-0 w-full h-full">
            <div class="bg-white rounded-lg lg:w-3/4 md:w-3/4 w-10/12">
              <div class="flex flex-col items-start p-4 h-full">
                <div class="flex items-center w-full">
                  <!-- <div class="text-gray-900 font-medium text-lg">ATTENTION</div> -->

                  <svg
                    @click="isOpen = !isOpen"
                    class="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18 18"
                  >
                    <path
                      d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                    ></path>
                  </svg>
                </div>
                <hr>

                <!-- This is one component with small pic up top and text below -->
                <div class="overflow-auto h-64 lg:h-full">
                  <div id="header" class="lg:flex justify-between items mb-4">
                    <div class="flex:none">
                      <div id="header" class="flex items-center flex-wrap justify-center mb-4">
                        <img
                          alt="_Summit Wealth Strategies Advisor"
                          class="w-40 rounded-full border-2 border-gray-300"
                          src="~/assets/images/angular.jpg"
                        >
                        <div
                          id="header-text"
                          class="leading-5 leading-5 text-center md:text-left lg:text-center md:ml-2"
                        >
                          Nathan
                          <span class>Rowader</span>
                          <h5 id="job" class="font-semibold text-blue-600">San Francisco, CA</h5>
                        </div>
                      </div>
                    </div>
                    <div class="flex text-left mt-3 w-10/12 md:h-auto lg:h-auto">
                      <div class>
                        <p>{{person.about.bio}}</p>

                        <p class="mt-2">{{person.about.bio2}}</p>
                      </div>
                    </div>
                  </div>
                  <div class>
                    <div class="text-center mb-3">
                      <span class="inline-block w-1 h-1 rounded-full bg-blue-500 ml-1"></span>
                      <span class="inline-block w-3 h-1 rounded-full bg-blue-500 ml-1"></span>
                      <span class="inline-block w-40 h-1 rounded-full bg-blue-500"></span>
                      <span class="inline-block w-3 h-1 rounded-full bg-blue-500 ml-1"></span>
                      <span class="inline-block w-1 h-1 rounded-full bg-blue-500 ml-1"></span>
                    </div>
                    <div class="flex justify-center text-left mb-3">
                      <ol>
                        <li>Financial Consultant</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div class="my-3">
                  <!-- Calendly link widget begin -->
                  <!-- <link
                  href="https://assets.calendly.com/assets/external/widget.css"
                  rel="stylesheet"
                >
                <script
                  src="https://assets.calendly.com/assets/external/widget.js"
                  type="text/javascript"
                ></script>
                <a
                  href
                  class="blue-bg my-3 p-3 rounded-full text-white hover:bg-white hover:text-black"
                  onclick="Calendly.initPopupWidget({url: 'https://calendly.com/keith-fedor/introduction-call'});return false;"
                  >Schedule time with me</a>-->
                  <!-- Calendly link widget end -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getPerson } from '~/store/index'
export default {
  data() {
    return {
      isOpen: false,
      persons: [
        {
          id: 1,
          mugShot: require('~/assets/images/angular.jpg'),
          name: 'Nathan',
          role: 'Financial Consultant',
          about: {
            bio:
              'I am a Financial Advisor with 17 years’ experience in financial advisory and investment management. I craft for my clients a comprehensive financial plan that helps them identify their objectives and then execute investment and tax strategies that are: 1) Personalized 2) Risk Managed 3) Tax-Efficient and 4) Highly Predictable.',
            bio2:
              'I can provide significant investment experience to my clients due to my many years as a professional money manager. As a portfolio manager, I was responsible for a multi-asset class high-income portfolio that utilized dividend-paying stocks, real estate, foreign and domestic corporate bonds, and municipal bonds providing an uncommonly high level of current income along with a unique risk management technique. Furthermore, as a senior leader within the multi-asset class portfolio management team, I provided ongoing investment advice to large public corporations, university endowments, and pension plans.'
          }
        },
        {
          id: 2,
          mugShot: require('~/assets/images/angular.jpg'),
          name: 'Doug',
          role: 'Financial Consultant',
          about: {
            bio: 'I am a Financial Advisor',
            bio2:
              'I can provide significant investment experience to my clients due to my many years as a professional money manager. As a portfolio manager, I was responsible for a multi-asset class high-income portfolio that utilized dividend-paying stocks, real estate, foreign and domestic corporate bonds, and municipal bonds providing an uncommonly high level of current income along with a unique risk management technique. Furthermore, as a senior leader within the multi-asset class portfolio management team, I provided ongoing investment advice to large public corporations, university endowments, and pension plans.'
          }
        }
      ],
      methods: {
        created() {
          const handleEscape = e => {
            if (e.key === 'Esc' || e.key === 'Escape') {
              this.isOpen = false
            }
          }
          document.addEventListener('keydown', handleEscape)

          this.$once('hook:beforeDestroy', () => {
            document.removeEventListener('keydown', handleEscape)
          })
        }
      }
    }
  }
}
</script>
<style scoped>
ol {
  list-style: georgian inside require('~/assets/images/angular.jpg');
}
</style>