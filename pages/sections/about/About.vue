<template lang="">
    <div class="flex flex-col md:flex-row flex-1 min-w-full space-x-6">
        <div class="flex-1 rounded shadow-sm bg-white dark:bg-gray-800 mb-10">
            <h2 class="w-full p-8 pb-1 dark:text-white">Sobre mim</h2>
            <div class="mx-8 bg-blue-500 px-10 h-2 w-1 rounded"></div>
            <div class="px-8 py-4">
                <p class="text-gray-700 dark:text-gray-300 text-base text-justify">
                    Sou formada em Pedagogia e sou pós-graduada em Administração da Educação com Ênfase em Pedagogia Empresarial, Gestão Escolar e Neuropsicopedagogia. Durante minha formação, aprendi sobre os processos de ensino e aprendizagem, bem como sobre o desenvolvimento humano em suas diferentes fases. Ao longo desses anos de atuação, pude contribuir para a formação de muitos alunos e para a melhoria da qualidade da educação em diferentes contextos. Sou apaixonada pelo desenvolvimento humano, viso o crescimento de empresas e de pessoas.
                </p>
            </div>
            <div class="bg-slate-50 dark:bg-gray-900 dark:border-x-2 dark:border-gray-800 md:px-6 pt-4 pb-20">
                <h4 class="w-full p-8 pb-5 dark:text-white">Com o que eu trabalho?</h4>
                <div class="px-8 flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 md:space-x-7">                    
                    <SectionsAboutCardWork title="Mentoria" description="Processo de orientação e aconselhamento profissional." data-aos="fade-up" class="card-work">
                        <template #icon>
                            <img src="~/assets/images/video-call.png" class="w-14" />
                        </template>
                    </SectionsAboutCardWork>
                    <SectionsAboutCardWork title="Consultoria" description="Assessoria especializada em práticas educacionais para empresas e organizações." data-aos="fade-up" data-aos-delay="100" class="card-work">
                        <template #icon>
                            <img src="~/assets/images/consultant.png" class="w-14" />
                        </template>
                    </SectionsAboutCardWork>
                    <SectionsAboutCardWork title="Avaliação" description="Análise de demandas para planejamento de programas de capacitação." data-aos="fade-up" data-aos-delay="200" class="card-work">
                        <template #icon>
                            <img src="~/assets/images/report.png" class="w-14" />
                        </template>
                    </SectionsAboutCardWork>
                </div>
            </div>
            <SectionsTestimonials></SectionsTestimonials>
        </div>
    </div>
</template>
<script>
export default {
    mounted() { }
}
</script>
<style lang="scss">
.card-work {
    @apply basis-1/2;
}
.wiggle {
    animation: float 3s ease-in-out infinite;

    &:nth-child(2) {
        animation-delay: 500ms;
    }

    &:nth-child(3) {
        animation-delay: 1000ms;
    }
}

@keyframes float {
    0% {
        transform: translatey(0px);
        --tw-shadow: 0 20px 27px 0 rgba(0, 0, 0, 0.05);
        --tw-shadow-colored: 0 20px 27px 0 var(--tw-shadow-color);
        box-shadow: 0 0 #0000, 0 20px #0000, 0 20px 27px 0 rgb(0 0 0 / 5%);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    50% {
        transform: translatey(-20px);
        --tw-shadow: 0 20px 27px 0 rgba(0, 0, 0, 0.05);
        --tw-shadow-colored: 0 20px 27px 0 var(--tw-shadow-color);
        box-shadow: 0 0 #0000, 0 0 #0000, 0 20px 27px 0 rgb(0 0 0 / 5%);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    100% {
        transform: translatey(0px);
        --tw-shadow: 0 20px 27px 0 rgba(0, 0, 0, 0.05);
        --tw-shadow-colored: 0 20px 27px 0 var(--tw-shadow-color);
        box-shadow: 0 0 #0000, 0 0 #0000, 0 20px 27px 0 rgb(0 0 0 / 5%);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
}
</style>