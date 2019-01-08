module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: titleChunk => {
      const title = 'Scaffold Nuxt SPA'
      return titleChunk ? `${titleChunk} - ${title}` : title
    },
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Scaffold Nuxt SPA Description'
      },
      {
        hid: 'og:locale',
        property: 'og:locale',
        content: 'ja_JP'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Scaffold Nuxt SPA'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://example.com'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Scaffold Nuxt SPA'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Scaffold Nuxt SPA Description'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://example.com/images/ogp.jpg'
      },
      {
        name: 'twitter:card',
        content: 'summary'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'apple-touch-icon-precomposed',
        href: '/apple-touch-icon-precomposed.png'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['sanitize.css', './assets/css/base_.styl'],

  /*
  ** Common Style Resources
  */
  styleResources: {
    stylus: [
      './assets/css/setting.styl',
      './assets/css/easings.styl',
      './assets/css/mixins.styl',
      './assets/css/base.styl'
    ]
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/style-resources'],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
