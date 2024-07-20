import { meta } from "./composables/meta";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
  plugins: [
    { src: '~/plugins/gsap.client.js', mode: 'client' },
  ],
  build: {
    transpile: ['vue-gtag-next']
  },
  app: {
    pageTransition: { name: 'fader', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'pl',
      },
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=G-9QK1J5QGDG`,
          async: true,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9QK1J5QGDG');
          `,
          type: 'text/javascript',
        },
      ],
      title: 'Emiston',
      charset: 'utf-8',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: meta.description },
        { name: 'keywords', content: meta.keywords },
        { name: 'author', content: 'Emiston' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'Pace budowlane' },
        { property: 'og:description', content: meta.description },
        { property: 'og:image', content: 'https://emiston.polbiz.net/baner/baner.jpg' },
        { property: 'og:url', content: 'https://emiston.polbiz.net/' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: meta.description },
        { name: 'twitter:description', content: meta.description },
        { name: 'twitter:image', content: 'https://emiston.polbiz.net/baner/baner.jpg' },
        { name: 'geo.placename', content: 'Lubin, Poland' },
        { name: 'geo.region', content: 'PL-DS' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Pace budowlane' },
        
        
        // Add more meta tags as needed
      ],
      link:  [
        { rel: 'icon', type: 'image/x-icon', href: '/logo/logoFB.png' },
      ]
    }
  },
  css: [
    '~/assets/styles/main.css' // Reference your global CSS file here
  ],
})