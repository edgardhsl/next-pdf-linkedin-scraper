<template lang="">
    <div class="flex flex-col md:flex-row flex-1 md:items-center min-w-full md:h-screen space-x-6">
        <div class="w-full mt-30 md:pt-0 md:w-fit flex md:items-center z-10 dark:text-gray-300">
            <div class="h-fit self-center">
                <h5 class="dark:text-white">—<span class="w-1.5"></span> Olá</h5>
                <h1 class="tracking-tighter dark:text-white">Eu sou a <span class="text-blue-500">Stephanie</span>.</h1>
                <hr class="w-3/5 my-4">
                <p>Sou formada em Pedagogia, especializada em Pedagogia Empresarial. <br /> Que tal conhecer melhor o meu trabalho?</p>
                <hr class="w-3/5 my-4">
                <Button color="info" :href="'#sobre-mim'">Visualizar CV</Button>
            </div>
        </div>
        <div class="-translate-x-24 -translate-y-20 2xl-max:mt-28 grow relative h-90 md:h-5/6 scale-[0.4] md:scale-1 transform-gpu md:transform-none z-9">
            <span class="wiggle absolute top-80 2xl-max:top-80 2xl-max:right-82 rounded-full bg-white dark:bg-gray-800 p-6 z-10">
                <span class="text-8xl 2xl-max:text-4xl">🚀</span>
            </span>
            <span class="wiggle delay-500 shadow-soft-xl absolute top-32 left-36 2xl-max:top-44 2xl-max:left-16 rounded-full bg-white dark:bg-gray-800 p-6 z-10">
                <span class="text-8xl 2xl-max:text-4xl">💡</span>
            </span>
            <span class="wiggle delay-1000 shadow-soft-xl absolute top-8 left-96 2xl-max:top-16 2xl-max:left-48 rounded-full bg-white dark:bg-gray-800 p-6 z-10">
                <span class="text-8xl 2xl-max:text-4xl">🧩</span>
            </span>
            <span class="absolute top-64 left-64 2xl-max:top-56 2xl-max:left-36"> 
                <div class="shadow-soft-xl rounded-full bg-white dark:bg-gray-800 absolute z-10 2xl-max:w-64 2xl-max:h-64">                    
                    <div class="overflow-hidden rounded-full h-full">
                        <img src="~/assets/images/IMG_20230306_211000_219-removebg-preview.png" class="h-full" />
                    </div>
                </div>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        this.$onWheel();
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