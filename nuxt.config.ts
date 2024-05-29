// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/i18n',
    'nuxt-icon'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],
  //TailWindCSS
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
