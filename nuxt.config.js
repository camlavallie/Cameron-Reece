export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
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
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'My Name is Cameron Reece LaVallie and Im a Junior Software Developer, a Bethel School of Technology (Rated #1 in Bootcamps) Graduate. Located in Fort Worth, Texas. React, Angular, Tailwind, Vue, and Nuxt are my jam.'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: './plugins/GoogleAnalytics.js',
      mode: 'client'
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.BASE_URL || 'http://localhost:5000/api/sendToMe'
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:5000/api/sendToMe'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
