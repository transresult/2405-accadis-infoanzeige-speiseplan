// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    "/api/**": {
      cors: true,
    },
  },
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  ssr: false,
  typescript: {
    shim: false,
  },
  css: ["vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.min.css", "~/assets/scss/main.scss"],
  build: {
    transpile: ["vuetify"],
  },
  runtimeConfig: {
    crm: {
      baseURL: "",
      authToken: "",
      leadSourceId: "",
      lifecycleStageId: "",
      contactStatusId: "",
    },
    cms: {
      auth: "",
      baseURL: "",
    },
  },
});
