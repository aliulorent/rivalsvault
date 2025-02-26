// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  runtimeConfig:{
    public:{
      cloudflare: 'https://cdn.rivalsvault.com'
    }
  },
  googleFonts:{
    families:{
      "Nunito Sans": true,
      Teko: true,
    }
  }, 
  nitro: {
    preset: "cloudflare-pages",
    prerender:{
      autoSubfolderIndex: false
    }
  },
  image: {
    cloudflare: {
      baseURL: 'https://cdn.rivalsvault.com'
    }
  },
  tailwindcss:{
    exposeConfig:true,
    config:{
      theme:{
        extend:{
          colors:{
            'rarity-1': '#b1c0c9',
            'rarity-2': '#75b1dd',
            'rarity-3': '#c784ff',
            'rarity-4': '#f6a638',
            'rarity-5': '#f65a50',
          }
        }
      }
    }
  },
  modules: [
    "nitro-cloudflare-dev",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    '@nuxtjs/google-fonts',
  ]
})