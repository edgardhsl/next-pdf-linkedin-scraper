export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    buildModules: ['@nuxt/typescript-build', '@nuxtjs/ngrok'],
    ssr: true,
    app: {
        head: {
            title: process.env.WEB_TITLE,
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                { hid: "description", name: "description", content: "Nuxt.js project" },
            ],
            link: [
                { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
            ],
            script: [
                /* {
                    src: "https://unpkg.com/eva-icons",
                    type: "text/javascript",
                } */
            ],

            bodyAttrs: {
                class: 'm-0 font-sans antialiased font-normal text-base leading-default bg-gray-50 text-slate-500'
            },

            htmlAttrs: {
                class: 'scroll-smooth'
            }
        },
    },
    components: {
        dirs: [
            '@/components',            
            '@/pages'
        ]
    },
    css: [
        "@/resources/css/styles.css",
    ],
    plugins: [
        ///{ src: '~/plugins/eva-icons/eva-icons.client.ts', mode: 'client' }
    ],
    runtimeConfig: {
        public: {
          webTitle: process.env.WEB_TITLE,
          brandTitle: process.env.BRAND_TITLE,
        }
      }
})