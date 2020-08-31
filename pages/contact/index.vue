<template>
  <div>
    <!-- component -->
    <div class="mx-auto max-w-6xl p-12">
      <div class="flex flex-col md:flex-row justify-center">
        <div class="md:w-1/2 max-w-md flex flex-col justify-center px-1">
          <div class="md:text-4xl text-xl font-black uppercase">Contact Me</div>
          <div class="text-xl mt-4">Have a question? Message me and I will be in touch!</div>
        </div>
        <div class="md:w-1/2 flex justify-start mt-5 md:justify-end w-full md:w-1/2">
          <form
            action="https://formspree.io/mlepkqzj"
            method="POST"
            id="contact-me"
            class="w-full mx-auto max-w-3xl bg-white shadow p-8 text-gray-700"
              novalidate="true"
               @submit="checkForm"
          >
            <h2 class="w-full my-2 text-3xl font-bold leading-tight my-5"></h2>
            <!-- name field -->
            <div class="flex flex-wrap mb-6">
                <p v-if="errors.length">
    <b class="font-medium">Please correct the following error(s):</b>
    <ul>
      <li  v-for="error in errors" class="text-red-700">{{ error }}</li>
    </ul>
  </p>
              <div class="relative w-full appearance-none label-floating">
                <input
                  class="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                  id="name"
                  type="text"
                  placeholder="Your name"
                  v-model="name"
                  name="name"
                >
                <label
                  for="name"
                  class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
                >Your name</label>
              </div>
            </div>
            <!-- email field -->
            <div class="flex flex-wrap mb-6">
              <div class="relative w-full appearance-none label-floating">
                <input
                  class="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  placeholder="Your email"
                  v-model="email"
                  name="_replyto"
                >
                <label
                  for="name"
                  class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
                >Your email</label>
              </div>
            </div>
            <!-- Message field -->
            <div class="flex flex-wrap mb-6">
              <div class="relative w-full appearance-none label-floating">
                <textarea
                  class="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                  id="message"
                       v-model="message"
                  type="text"
                  name="message"
                  placeholder="Message..."
                ></textarea>
                <label
                  for="message"
                  class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text"
                >Message...</label>
              </div>
            </div>

            <div class>
              <button
                class="w-full shadow bg-gray-800 hover:bg-gray-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
                value="Send"
              >Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      errors: [],
      name: null,
      message: null,
      email: null,
      movie: null
    };
  },
  methods: {
    checkForm: function(e) {
      this.errors = [];

      if (!this.name) {
        this.errors.push("Name required.");
      }
      if (!this.message) {
        this.errors.push("Message required.");
      }
      if (!this.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      }

      if (!this.errors.length) {
        return true;
      }

      e.preventDefault();
    },
    validEmail: function(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>
