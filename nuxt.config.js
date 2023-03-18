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
                { hid: "description", name: "description", content: "Como a Pedagogia Empresarial pode contribuir para o sucesso da sua empresa desenvolvendo as competências e habilidades dos colaboradores." },
                { hid: "keywords", name: "keywords", content: "Pedagogia Empresarial, educação corporativa, treinamento de funcionários, desenvolvimento de competências, habilidades profissionais" },
                { hid: "author", name: "author", content: process.env.BRAND_TITLE },
            ],
            link: [
                { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
                { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/aos@next/dist/aos.css' }
            ],
            script: [
                { src: "https://unpkg.com/aos@next/dist/aos.js", type: "text/javascript", body: true },
                {
                    innerHTML: `
                document.addEventListener('DOMContentLoaded', (e)=> {        
                    AOS.init({
                        disable: function() {
                            return /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);
                        }
                    });
                })
                `, type: "text/javascript", body: true
                }
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
    ignore: [
        '~/pages/sections/**'
    ],
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
        { src: '~/plugins/active-scroll-listener/active-scroll-listener.client.ts', mode: 'client' },
        { src: '~/plugins/lottie-web/lottie-web.client.ts', mode: 'client' }
    ],
    publicRuntimeConfig: {
        public: {
            webTitle: process.env.WEB_TITLE,
            brandTitle: process.env.BRAND_TITLE,
        }
    }
})
