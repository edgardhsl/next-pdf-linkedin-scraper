export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
    buildModules: ['@nuxt/typescript-build', '@nuxtjs/ngrok'],
    ssr: true,
    app: {
        head: {
            title: process.env.WEB_TITLE,
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                { hid: "description", name: "description", content: "Saiba como a Pedagogia Empresarial pode contribuir para o sucesso da sua empresa através do desenvolvimento de competências e habilidades dos colaboradores." },
                { hid: "keywords", name: "keywords", content: "Pedagogia Empresarial, educação corporativa, treinamento de funcionários, desenvolvimento de competências, habilidades profissionais" },
                { hid: "author", name: "author", content: "Stephanie Araújo" },
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
                lang: 'pt-BR',
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
        { src: '~/plugins/active-scroll-listener/active-scroll-listener.client.ts', mode: 'client' }
    ],
    publicRuntimeConfig: {
        public: {
          webTitle: process.env.WEB_TITLE,
          brandTitle: process.env.BRAND_TITLE,
        }
      }
})