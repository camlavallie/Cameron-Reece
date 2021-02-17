<template>
  <div class="container">
    <div>
      <JumboOne/>

      <div class="my-24" id="work">
        <h1 class="text-3xl lg:text-5xl font-thin">Recent Work</h1>
        <JumboTwo/>
      </div>
      <div class="sticky flex text-left bg-opacity-25 top-0 left-0 trasnparent-25">
        <JumboButtons/>
      </div>

      <div class="mb-24" id="skills">
        <h1 class="text-3xl lg:text-5xl font-thin">My Favorite Things!</h1>
        <JumboThree/>
      </div>

      <div>
        <JumboFour/>
      </div>
      <div class="mt-12 mb-24">
        <JumboFive/>
      </div>
    </div>
  </div>
</template>

<script>
import JumboOne from "~/components/JumboOne.vue";
import JumboTwo from "~/components/JumboTwo.vue";
import JumboThree from "~/components/JumboThree.vue";
import JumboFour from "~/components/JumboFour.vue";
import JumboFive from "~/components/JumboFive.vue";
import JumboButtons from "~/components/JumboButtons.vue";

export default {
  components: {
    JumboOne,
    JumboTwo,
    JumboThree,
    JumboFour,
    JumboFive,
    JumboButtons
  }
};
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
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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
