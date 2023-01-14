import { fileURLToPath } from "url"
import { resolve, dirname } from "node:path"
import VueI18nPlugin from "@intlify/unplugin-vue-i18n"

import en from "./locales/en.json"
import de from "./locales/de.json"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss",
        "@formkit/nuxt",
        "@nuxtjs/i18n",
        "@nuxtjs/color-mode",
        "@vueuse/nuxt",
        "@formkit/nuxt",
        "@nuxtjs/i18n",
        "@nuxtjs/supabase",
    ],
    i18n: {
        locales: [
            { code: "en", iso: "en-US", file: "locales/en.json", dir: "ltr" },
            { code: "de", iso: "de-DE", file: "locales/de.json", dir: "ltr" },
        ],
        defaultLocale: "de",
        baseUrl: "https://indiezone.de",
        vueI18n: {
            legacy: false,
            globalInjection: true,
            locale: "de",
            fallbackLocale: "en",
            messages: { en, de },
        },
    },
    app: {
        head: {
            title: "IndieZone",
            viewport: "width=device-width, initial-scale=1, maximum-scale=1",
            charset: "utf-8",
            htmlAttrs: { lang: "de" },
            meta: [{ name: "description", content: "online stöbern - lokal kaufen" }, {}],
            link: [{ rel: "icon", href: "/favicons/favicon.ico" }],
        },
    },
    colorMode: {
        preference: "system",
        fallback: "light",
        dataValue: "theme",
        classSuffix: "",
        storageKey: "nuxt-color-mode",
        componentName: "ColorScheme",
    },
    build: { transpile: ["@heroicons/vue"] },
    vite: {
        plugins: [
            VueI18nPlugin.vite({
                include: [resolve(dirname(fileURLToPath(import.meta.url)), "./locales/*.json")],
                defaultSFCLang: "yaml",
            }),
        ],
    },
})
