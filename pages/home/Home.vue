<template lang="">
    <div class="flex flex-col md:flex-row flex-1 md:items-center min-w-full md:h-screen">
        <div class="w-full md:w-2/4 flex md:items-center pt-40">
            <div class="h-fit self-center">
                <h5>—<span class="w-1.5"></span> OLÁ</h5>
                <h1>Eu sou a <span class="text-blue-500">Stephanie</span></h1>
                <hr class="w-3/5 my-4">
                <p>Sou formada em Pedagogia, especializada em Pedagogia Empresarial. <br /> Que tal conhecer melhor o meu trabalho?</p>
                <hr class="w-3/5 my-4">
                <Button color="info" :href="'#sobre-mim'">Visualizar CV</Button>
            </div>
        </div>
        <div class="-translate-x-20 -translate-y-20 grow relative h-screen md:h-5/6 scale-[0.4] md:transform-none">
            <span class="wiggle absolute top-80 rounded-full bg-white p-6">
                <span class="text-8xl">🥰</span>
            </span>
            <span class="wiggle delay-500 shadow-soft-xl absolute top-32 left-36 rounded-full bg-white p-6">
                <span class="text-8xl">😍</span>
            </span>
            <span class="wiggle delay-1000 shadow-soft-xl absolute top-8 left-96 rounded-full bg-white p-6">
                <span class="text-8xl">😘</span>
            </span>
            <span class="shadow-soft-xl absolute top-64 left-64 rounded-full bg-white">                
                <div class="overflow-hidden rounded-full">
                    <img src="~/assets/images/IMG_20230306_211000_219-removebg-preview.png" />
                </div>
            </span>
        </div>
    </div>
</template>
<script>
export default {

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