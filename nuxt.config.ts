// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Elon's Blog",
      meta: [{ name: "description", content: "Elon's awesome blog" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
