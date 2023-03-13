<template lang="">
    <div class="flex flex-col md:flex-row flex-1 min-w-full md:h-screen space-x-6">
        <div class="flex-1 rounded overflow-hidden shadow-sm bg-white mb-10">
            <h2 class="w-full p-8 pb-1">Sobre mim</h2>
            <div class="mx-8 bg-blue-500 px-10 h-2 w-1 rounded"></div>
            <div class="px-8 py-4">
                <p class="text-gray-700 text-base text-justify">
                    Sou graduada em Pedagogia pela Universidade X e atuo na área há X anos. Durante minha formação, aprendi sobre os processos de ensino e aprendizagem, bem como sobre o desenvolvimento humano em suas diferentes fases. Ao longo desses anos de atuação, pude contribuir para a formação de muitos alunos e para a melhoria da qualidade da educação em diferentes contextos. Acredito que a Pedagogia é uma área essencial para o desenvolvimento da sociedade e sinto-me realizada em fazer parte dessa profissão.
                </p>
            </div>
            <div class="bg-slate-50 md:px-6 pt-4 pb-20">
                <h4 class="w-full p-8 pb-5">Com o que eu trabalho?</h4>
                <div class="px-8 flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 md:space-x-7">                    
                    <AboutCardWork title="Mentoria" description="Processo de orientação e aconselhamento profissional." class="basis-1/2">
                        <template #icon>
                            <img src="~/assets/images/video-call.png" class="w-14" />
                        </template>
                    </AboutCardWork>
                    <AboutCardWork title="Consultoria" description="Assessoria especializada em práticas educacionais para empresas e organizações." class="basis-1/2">
                        <template #icon>
                            <img src="~/assets/images/consultant.png" class="w-14" />
                        </template>
                    </AboutCardWork>
                    <AboutCardWork title="Avaliação" description="Análise de demandas para planejamento de programas de capacitação." class="basis-1/2">
                        <template #icon>
                            <img src="~/assets/images/report.png" class="w-14" />
                        </template>
                    </AboutCardWork>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        this.$onWheel(() => console.log('atualizado'));
    }
}
</script>
<style lang="scss">
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