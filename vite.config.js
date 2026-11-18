import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        "fr-index": resolve(__dirname, "fr/index.html"),
        "fr-mentions-legales": resolve(__dirname, "fr/mentions-legales.html"),
        "fr-politique-cookies": resolve(__dirname, "fr/politique-cookies.html"),
        "fr-politique-de-confidentialite": resolve(__dirname, "fr/politique-de-confidentialite.html"),
        "main": resolve(__dirname, "index.html"),
        "nl-cookiebeleid": resolve(__dirname, "nl/cookiebeleid.html"),
        "nl-index": resolve(__dirname, "nl/index.html"),
        "nl-privacybeleid": resolve(__dirname, "nl/privacybeleid.html"),
        "nl-wettelijke-vermeldingen": resolve(__dirname, "nl/wettelijke-vermeldingen.html")
      }
    }
  }
})
