<template>
  <div class="rounded overflow-hidden shadow-lg bg-white">
    <div class="w-full">
      <img
        src="https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        class="w-full rounded"
      >
    </div>
    <div class="px-2 pb-5">
      <h1
        class="text-4xl justify-center text-gray-800 text-thin mt-3 font-thin"
      >Cameron Reece LaVallie</h1>
      <p class="text-2xl justify-center text-gray-800 text-thin mb-3 font-thin">
        I built this site with
        <span class="text-blue-500 font-semibold">Nuxt | VueJS</span>
      </p>
      <div class="flex flex-wrap justify-center items-center">
        <img class="w-48 rounded-full mr-3 md:mr-4 lg:mr-4" src="~assets/images/NewCam.jpg">
        <div class="text-sm mt-3 md:mt-0 lg:mt-0">
          <p class="text-gray-900 leading-none text-xl font-thin">
            Junior Developer ~
            <span class="font-thin text-gray-700">Fort Worth, Texas</span>
          </p>
          <p class="text-gray-600 mt-3 font-thin">
            <span class="pr-1">
              <a class="text-underline" target="blank" href="https://reactjs.org/">#ReactJS</a>
            </span>
            <span class="pr-1">
              <a class="text-underline" target="blank" href="https://angularjs.org/">#AngularJS</a>
            </span>
            <span class="pr-1">
              <a class="text-underline" target="blank" href="https://vuejs.org/">#VueJS</a>
            </span>
            <span class="pr-1">
              <a class="text-underline" target="blank" href="https://nuxtjs.org/">#NuxtJS</a>
            </span>
          </p>
        </div>
      </div>
    </div>
    <hr>
    <div class="p-3 w-1/3 float-right text-right font-thin">
      <div>
        <p>Certified Software Developer</p>
        <div class="float-right">
          <a href="https://betheltech.net/" target="_blank" class>
            <img
              class="w-48 rounded-lg origin-center transform hover:scale-75"
              src="~/assets/images/bethel-tech-logo.jpg"
              alt
            >
          </a>
          <p>Bethel Tech Grad!</p>
        </div>
      </div>
    </div>
  </div>
</template>
