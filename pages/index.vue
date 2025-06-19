<template>
  <div class="container">
    <div>
      <JumboOne />
      
      <div class="my-24" id="work">
        <h1 class="text-3xl lg:text-5xl font-thin">Recent Work</h1>
        <JumboTwo />
      </div>
      <div class="inset-x-0 bottom-0 relative trasnparent-25">
        <JumboButtons />
      </div>

      <div class="my-24" id="skills">
        <h1 class="text-3xl lg:text-5xl font-thin">My Favorite Things!</h1>
        <JumboThree />
        <div class="mb-4">
          <svg
            class="inline-block fill-current text-grey h-24 w-24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M11.933 13.069s7.059-5.094 6.276-10.924a.465.465 0 0 0-.112-.268.436.436 0 0 0-.263-.115C12.137.961 7.16 8.184 7.16 8.184c-4.318-.517-4.004.344-5.974 5.076-.377.902.234 1.213.904.959l2.148-.811 2.59 2.648-.793 2.199c-.248.686.055 1.311.938.926 4.624-2.016 5.466-1.694 4.96-6.112zm1.009-5.916a1.594 1.594 0 0 1 0-2.217 1.509 1.509 0 0 1 2.166 0 1.594 1.594 0 0 1 0 2.217 1.509 1.509 0 0 1-2.166 0z"
              class="text-gray-900"
            ></path>
          </svg>
        </div>
        <p class="text-2xl text-grey-900 hover:border-b-2 font-medium mb-4">
          Skies The Limit
        </p>
        <div>
          <a
            href="https://docs.google.com/document/d/1bMCzmpW2__NSs59VDNH47VQ5mH7soQ0UVL50XLG7WfY/edit?usp=sharing"
            target="_blank"
          >
            <button
              class="bg-gray-900 hover:bg-white border-b-2 hover:border-gray-900 hover:text-gray-900 text-white font-bold py-2 px-4 rounded-lg mb-8"
            >
              Resume 🚀
            </button>
            <a
              href="/contact"
              class="bg-gray-900 hover:bg-white border-b-2 hover:border-gray-900 hover:text-gray-900 text-white font-bold py-2 px-4 rounded-lg mb-8"
              >Contact Me ✏️</a
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JumboOne from '~/components/JumboOne.vue'
import JumboTwo from '~/components/JumboTwo.vue'
import JumboThree from '~/components/JumboThree.vue'
import JumboFour from '~/components/JumboFour.vue'
import JumboFive from '~/components/JumboFive.vue'
import JumboButtons from '~/components/JumboButtons.vue'

export default {
  components: {
    JumboOne,
    JumboTwo,
    JumboThree,
    JumboFour,
    JumboFive,
    JumboButtons
  },
  head: {
    title: 'Cameron Reece',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'My Name is Cameron Reece LaVallie and Im a Junior Software Developer, a Bethel School of Technology (Rated #1 in Bootcamps) Graduate. Located in Fort Worth, Texas. React, Angular, Tailwind, Vue, and Nuxt are my jam.'
      }
    ]
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}

body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
