



<template>
  <footer class="flex justify-center px-4 text-gray-100 bg-gray-800">
    <div class="py-6">
      <h1 class="text-center text-lg font-thin lg:text-2xl">
        “The path of the righteous is level; you, the Upright One, make the way of the righteous smooth. Yes, Lord, walking in the way of your laws, we wait for you; your name and renown are the desire of our hearts. My soul yearns for you in the night; in the morning my spirit longs for you.”
        <br>Isaiah 26:7-9
      </h1>

      <hr class="h-px mt-6 bg-gray-700 border-none">

      <div class="flex flex-col items-center justify-between mt-6 md:flex-row">
        <div>
          <a href="#" class="text-xl text-white hover:text-white font-thin">
            Cameron
            <span class="text-blue-500">|Reece</span>
          </a>
        </div>
        <div class="flex mt-4 md:m-0">
          <div class="-mx-4">
            <a
              href="/"
              class="text-sm text-white hover:text-white hover:bg-gray-900 rounded-md p-2"
            >Home</a>
            <a
              href="/#work"
              class="text-sm text-white hover:text-white hover:bg-gray-900 rounded-md p-2"
            >My Work</a>
            <a
              href="/#skills"
              class="text-sm text-white hover:text-white hover:bg-gray-900 rounded-md p-2"
            >Skills</a>
            <a
              href="/contact"
              class="text-sm text-white hover:text-white hover:bg-gray-900 rounded-md p-2"
            >Contact</a>
            <!-- <a href="/blog" class="px-4 text-sm text-white hover:text-white hover:bg-gray-900 rounded-md p-2">Blog</a> -->
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <p class="text-center text-gray-500 text-xs mt-3 mb-12">
          &copy;{{new Date().getFullYear()}}
          <span class="elena-kathryn font-thin text-xl">
            Cameron
            <span class="text-blue-500">|Reece</span>
          </span> All rights reserved.
          <a class="hover:text-blue-500" href="/privacy">Privacy Policy</a>
        </p>
      </div>
    </div>
  </footer>
</template>
