module.exports = {
  /*
  ** Headers of the page
  */
  mode: 'spa',
  head: {
    title: 'portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { href: "https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap" },
      { href: "https://use.fontawesome.com/releases/v5.0.13/css/all.css" }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  css: [
    { src: '~/assets/sass/main.sass', lang: 'sass'},
  ],
  loading: { color: '#3B8070' },
  plugins: [
    { src: '~/plugins/i18n', ssr: false }
  ],
  /*
  ** Build configuration
  */
  trailingSlash: true,
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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

