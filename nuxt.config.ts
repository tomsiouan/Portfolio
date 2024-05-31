// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    'nuxt-icon'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],
  // i18n
  i18n: {
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    locales: [
      {
        code: "fr-FR",
        iso: "fr-FR",
        name: "Fr",
        file: "fr-FR.json"
      },
      {
        code: "en-US",
        iso: "en-US",
        name: "En",
        file: "en-US.json"
      }
    ],
    defaultLocale: "fr-FR",
  },
  colorMode: {
    classSuffix: ''
  },
  //TailWindCSS
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
