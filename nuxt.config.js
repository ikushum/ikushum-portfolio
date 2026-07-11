const SITE_URL = 'https://ishansubedi.com'
const OG_IMAGE = SITE_URL + '/og-image.png'

export default {
  env: {
    SITE_URL,
    GOOGLE_ANALYTICS_MEASUREMENT_ID: process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID,
    ENABLE_ANALYTICS: process.env.ENABLE_ANALYTICS
  },

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%sIshan Subedi',
    title: 'Ishan Subedi — Product Engineer',
    // NOTE: data-theme is intentionally NOT set here. vue-meta re-applies
    // htmlAttrs on every client-side (SPA) route change, which would clobber
    // the user's chosen theme. The inline head script below sets data-theme
    // before first paint from ?theme / localStorage / prefers-color-scheme.
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#161513' },
      { name: 'author', content: 'Ishan Subedi' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Ishan Subedi is a product engineer who takes founders from idea to shipped product — design, full-stack build, deployment. One person, the whole product.'
      },

      // Open Graph defaults (pages override title/description/url)
      { hid: 'og:site_name', property: 'og:site_name', content: 'Ishan Subedi' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:locale', property: 'og:locale', content: 'en_US' },
      { hid: 'og:url', property: 'og:url', content: SITE_URL },
      { hid: 'og:image', property: 'og:image', content: OG_IMAGE },
      { hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', property: 'og:image:height', content: '630' },
      { hid: 'og:image:alt', property: 'og:image:alt', content: 'Ishan Subedi — Product Engineer' },

      // Twitter
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@ikushum' },
      { hid: 'twitter:image', name: 'twitter:image', content: OG_IMAGE },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@ikushum' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'mask-icon', href: '/favicon.svg', color: '#f2793a' },
      { rel: 'preconnect', href: 'https://api.fontshare.com', crossorigin: true },
      { rel: 'preconnect', href: 'https://cdn.fontshare.com', crossorigin: true },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      {
        rel: 'stylesheet',
        href:
          'https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=switzer@300,400,500,600,700&display=swap'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap'
      }
    ],
    script: [
      {
        // Set the theme before first paint to avoid a flash, and flag JS for
        // progressive-enhancement (reveal animations only run when JS is on).
        innerHTML:
          "(function(){try{var q=new URLSearchParams(location.search).get('theme');var t=(q==='light'||q==='dark')?q:localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}document.documentElement.classList.add('js');})();",
        type: 'text/javascript'
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },

  loading: { color: '#f2793a', throttle: 0 },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/design.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' },
    { src: '~plugins/reveal.client.js', mode: 'client' },
    { src: '~plugins/motion.client.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/content'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#d64d1e'
        },
        dark: {
          primary: '#f2793a'
        }
      }
    }
  },

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-vsc-dark-plus.css'
      }
    }
  },

  generate: {
    async routes () {
      const { $content } = require('@nuxt/content')
      const journals = await $content('journals').only(['slug']).fetch()

      return journals.map(journal => `/journals/${journal.slug}`)
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // Lenis ships untranspiled ESM (class fields); run it through babel.
    transpile: ['lenis'],
    // The bundled postcss-preset-env custom-properties polyfill can't parse
    // modern color syntax (oklch(), color-mix()). Disable it — every target
    // browser resolves CSS custom properties natively.
    postcss: {
      preset: {
        features: {
          'custom-properties': false,
          'color-mix': false,
          'oklab-function': false
        }
      }
    }
  }
}
