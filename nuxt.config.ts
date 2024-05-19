// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/devtools", "@nuxtjs/tailwindcss", "@nuxt/eslint", '@nuxtjs/apollo'],
  apollo: {
    clients: {
      default: {
        httpEndpoint: "http://localhost:8888/wordpress/graphql",
      }
    },
  },
  ssr: true,
  experimental: {
    payloadExtraction: false,
  },
  router: {
    options: {
      strict: false,
    },
  },
  sourcemap: false,
  app: {
    head: {
      title: "Nuxt WordPress Starter",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      script: [],
    },
  },
  css: ["@/assets/css/main.css"],
  runtimeConfig: {
    public: {
      wordpressUrl: "http://localhost:8888/wordpress/graphql",
    },
  },
});