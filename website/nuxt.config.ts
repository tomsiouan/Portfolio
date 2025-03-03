// https://nuxt.com/docs/api/configuration/nuxt-config
import {config} from "dotenv";

require('dotenv').config();

const envFile = process.env.NODE_ENV === 'production' ? '/home/sephix/.env.prod' : '.env.dev';
config({ path: envFile });

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  srcDir: 'src/',

  css: [
    '~/assets/css/main.css',
    '~/assets/css/transitions.css'
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    'nuxt-icon',
    '@hypernym/nuxt-anime',
    ['nuxt-mail', {
      message: {
        to: process.env.NUXT_MAIL_TO,
      },
      smtp: {
        secure: process.env.NODE_ENV === 'production',
        host: process.env.NUXT_SMTP_HOST,
        port: process.env.NUXT_SMTP_PORT,
        auth: {
          user: process.env.NUXT_SMTP_USER,
          pass: process.env.NUXT_SMTP_PASSWORD,
        }
      },
    }],
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Tom SIOUAN',
      meta: [
        {
          name: 'description',
          content: 'Site présentant mon portfolio.',
        },
      ]
    },
  },

  // i18n
  i18n: {
    lazy: true,
    compilation: {
      strictMessage: false,
    },
    baseUrl: 'https://www.tomsiouan.fr',
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    defaultLocale: "fr",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: 'fr'
    },
    locales: [
      {
        code: "fr",
        iso: "fr-FR",
        name: "Fr",
        file: "fr-FR.json"
      },
      {
        code: "en",
        iso: "en-US",
        name: "En",
        file: "en-US.json"
      }
    ],
  },

  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },

  //TailWindCSS
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},

    },
  },

  compatibilityDate: '2024-10-28',
})