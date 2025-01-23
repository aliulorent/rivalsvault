// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  nitro: {
    preset: "cloudflare-pages"
  },
  image: {
    cloudflare: {
      baseURL: 'https://pub-7a06cbd97379439d8b7b3f390b203724.r2.dev'
    }
  },
  modules: ["nitro-cloudflare-dev", "@nuxt/image", "@nuxtjs/tailwindcss"]
})