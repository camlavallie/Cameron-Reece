<template>
  <div class="rounded overflow-hidden shadow-lg bg-white">
    <div class="w-full">
      <img
        src="https://images.pexels.com/photos/92904/pexels-photo-92904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        class="w-full rounded"
      />
    </div>
    <div class="px-2 pb-5 text-center">
      <h1 class="text-4xl text-gray-800 text-thin mt-3 font-thin">
        Cameron Reece LaVallie
      </h1>
      <p class="text-2xl text-gray-800 text-thin mb-3 font-thin">
        I built this site with
        <span class="text-blue-500 font-semibold">Nuxt | VueJS</span>
      </p>
      <div class="flex flex-wrap justify-center items-center">
        <img
          class="w-48 m-1 rounded-full md:mr-4 lg:mr-4"
          src="~assets/images/NewCam.jpg"
        />
        <div class="text-sm mt-3 md:mt-0 lg:mt-0">
          <p class="text-gray-900 leading-none text-xl font-thin">
            Graphic Designer ~ Email & Web Developer ~
            <span class="font-thin text-gray-700">Fort Worth, Texas</span>
          </p>
          <p class="text-gray-600 mt-3 font-thin">
            <span class="pr-1">
              <a
                class="text-underline"
                target="blank"
                href="https://reactjs.org/"
                >#ReactJS</a
              >
            </span>
            <span class="pr-1">
              <a
                class="text-underline"
                target="blank"
                href="https://angularjs.org/"
                >#AngularJS</a
              >
            </span>
            <span class="pr-1">
              <a class="text-underline" target="blank" href="https://vuejs.org/"
                >#VueJS</a
              >
            </span>
            <span class="pr-1">
              <a
                class="text-underline"
                target="blank"
                href="https://nuxtjs.org/"
                >#NuxtJS</a
              >
            </span>
          </p>
        </div>
      </div>
    </div>
    <hr />
    <div class="flex flex-wrap justify-center text-center font-thin">
      <div class="m-12">
        <p>
          Bachelors
          <br />
          <span class="text-blue-500 italic font-bold">(Graphic Design)</span>
        </p>
        <div class>
          <a href="https://www.evangel.edu/" target="_blank" class>
            <img
              class="w-48 rounded-lg origin-center transform hover:scale-75"
              src="~/assets/images/Evangel-logo.png"
              alt
            />
          </a>
          <p class="underline">Evangel University Grad!</p>
        </div>
      </div>
      <div class="m-12">
        <p class>
          Certified
          <br />
          <span class="text-blue-500 italic font-bold"
            >(Software Developer)</span
          >
        </p>
        <div class>
          <a href="https://betheltech.net/" target="_blank" class>
            <img
              class="w-48 rounded-lg origin-center transform hover:scale-75"
              src="~/assets/images/bethel-tech-logo.jpg"
              alt
            />
          </a>
          <p class="mt-2 underline">Bethel Tech Grad!</p>
        </div>
      </div>
    </div>
  </div>
</template>
