<template>
  <header
    class="bg-gray-900 sm:flex sm:justify-between items-center sm:items-center sm:px-4 sm:py-3"
  >
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div>
        <div class="text-white text-3xl font-thin">
          Cameron
          <span class="text-blue-500">|Reece</span>
        </div>
      </div>
      <div class="sm:hidden">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
        >
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            ></path>
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <nav
      :class="isOpen ? 'block' : 'hidden'"
      @click="isOpen = !isOpen"
      class="px-2 pt-2 pb-4 sm:flex sm:p-0"
    >
      <nuxt-link
        to="/"
        class="block group focus:bg-blue-600 px-2 py-1 text-white font-thin rounded hover:bg-gray-800 hover:text-white"
      >Home</nuxt-link>
      <a
        href="/#work"
        class="mt-1 group focus:bg-blue-500 block px-2 py-1 text-white font-thin rounded hover:bg-gray-800 hover:text-white sm:mt-0 sm:ml-2"
      >My Work</a>
      <a
        href="/#skills"
        class="mt-1 group focus:bg-blue-500 block px-2 py-1 text-white font-thin rounded hover:bg-gray-800 hover:text-white sm:mt-0 sm:ml-2"
      >Skills</a>
      <nuxt-link
        to="/contact"
        class="mt-1 group focus:bg-blue-500 block px-2 py-1 text-white font-thin rounded hover:bg-gray-800 hover:text-white sm:mt-0 sm:ml-2"
      >Contact</nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  }
};
</script>