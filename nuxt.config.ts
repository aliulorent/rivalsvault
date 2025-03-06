// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  routeRules:{
    // '/**': { swr: 3600 }
  },
  app:{
    head:{
      titleTemplate: '%s %separator %siteName',
      templateParams:{
        siteName:'Rivals Vault',
        separator:'-'
      }
    }
  },
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
            'text': {
              50: 'rgb(241, 240, 245)',
              100: 'rgb(226, 224, 235)',
              200: 'rgb(197, 194, 214)',
              300: 'rgb(168, 163, 194)',
              400: 'rgb(139, 133, 173)',
              500: 'rgb(110, 102, 153)',
              600: 'rgb(88, 82, 122)',
              700: 'rgb(66, 61, 92)',
              800: 'rgb(44, 41, 61)',
              900: 'rgb(22, 20, 31)',
              950: 'rgb(11, 10, 15)',
            },
            'background': {
              50: 'rgb(240, 239, 245)',
              100: 'rgb(224, 223, 236)',
              200: 'rgb(193, 191, 217)',
              300: 'rgb(163, 159, 198)',
              400: 'rgb(132, 128, 179)',
              500: 'rgb(101, 96, 159)',
              600: 'rgb(81, 77, 128)',
              700: 'rgb(61, 57, 96)',
              800: 'rgb(40, 38, 64)',
              900: 'rgb(20, 19, 32)',
              950: 'rgb(10, 10, 16)',
            },
            'primary': {
              50: 'rgb(240, 240, 245)',
              100: 'rgb(224, 224, 235)',
              200: 'rgb(193, 193, 215)',
              300: 'rgb(162, 162, 195)',
              400: 'rgb(132, 132, 174)',
              500: 'rgb(101, 101, 154)',
              600: 'rgb(81, 81, 123)',
              700: 'rgb(60, 60, 93)',
              800: 'rgb(40, 40, 62)',
              900: 'rgb(20, 20, 31)',
              950: 'rgb(10, 10, 15)',
            },
            'secondary': {
              50: 'rgb(245, 240, 243)',
              100: 'rgb(235, 224, 231)',
              200: 'rgb(215, 193, 207)',
              300: 'rgb(195, 162, 183)',
              400: 'rgb(174, 132, 159)',
              500: 'rgb(154, 101, 135)',
              600: 'rgb(123, 81, 108)',
              700: 'rgb(93, 60, 81)',
              800: 'rgb(62, 40, 54)',
              900: 'rgb(31, 20, 27)',
              950: 'rgb(15, 10, 13)',
            },
            'accent': {
              50: 'rgb(245, 240, 240)',
              100: 'rgb(235, 224, 226)',
              200: 'rgb(215, 193, 197)',
              300: 'rgb(195, 162, 168)',
              400: 'rgb(174, 132, 139)',
              500: 'rgb(154, 101, 110)',
              600: 'rgb(123, 81, 88)',
              700: 'rgb(93, 60, 66)',
              800: 'rgb(62, 40, 44)',
              900: 'rgb(31, 20, 22)',
              950: 'rgb(15, 10, 11)',
            },
          }
        }
      }
    }
  },
  scripts: {
    registry: {
      googleTagManager: {
        id: 'GTM-PHNGSSJ3'
      }
    }
  },
  modules: [
    "nitro-cloudflare-dev",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
    '@nuxt/scripts'
  ]
})