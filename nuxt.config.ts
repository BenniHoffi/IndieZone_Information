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
    supabase: {
        url: "https://kklreqfmfnevrdrnbmnb.supabase.co",
        key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrbHJlcWZtZm5ldnJkcm5ibW5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTU4MTIwNjIsImV4cCI6MTk3MTM4ODA2Mn0.9UNv1-ImVAYYS4hkNbDf7mga3HJQDgezn4vJsrQL03E",
    },
    i18n: {
        locales: [
            { code: "en", iso: "en-US", file: "locales/en.json", dir: "ltr" },
            { code: "de", iso: "de-DE", file: "locales/de.json", dir: "ltr" },
        ],
        defaultLocale: "de",
        detectBrowserLanguage: {
            alwaysRedirect: false,
            fallbackLocale: "en",
            redirectOn: "root",
            useCookie: true,
            cookieAge: 365,
            cookieCrossOrigin: false,
            cookieDomain: null,
            cookieKey: "i18n_redirected",
            cookieSecure: false,
        },
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
            meta: [{ name: "description", content: "online stöbern - lokal kaufen" }],
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
