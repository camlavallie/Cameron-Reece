<template>
  <div>
    <!-- component -->
  

    <!-- component -->
<!-- start -->
    <div class="container flex flex-col justify-center items-center mx-auto my-8 py-10">
        <div style="background-image: url(https://images.pexels.com/photos/280193/pexels-photo-280193.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"
            class="max-w-5xl bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center">
        </div>

        <!-- Card -->
        <div class="bg-white -mt-24 shadow-md rounded-lg overflow-hidden">
            <div class="items-center justify-between py-10 px-5 bg-white shadow-2xl rounded-lg mx-auto text-center">
                <div class="px-2 -mt-6">
                    <div class="text-center">
                        <h1 class=" text-3xl text-grey-800 font-thin leading-loose my-3 w-full">Contact Cameron<span class="text-blue-500">|Reece</span></h1>
                        <div class="text-lg text-gray-500">We will respond to your message within 24 hours</div>
                        <div class="w-full text-center">
                            <form action="#">
                                <div class="max-w-sm mx-auto p-1 pr-0 flex items-center">
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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end card -->

    </div>
    <!-- end -->







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
