<template>
    <div class="relative">
        <h4 class="w-full p-3 md:p-8 pb-0 flex">
            Depoimentos e recomendações
        </h4>
        <!-- <img src="~/assets/images/feedback.png" class="h-32 absolute right-10 -top-10 rotate-12"> -->
        <div ref="lottie" class="h-28 md:h-36 absolute -right-10 -top-14 md:right-10 md:-top-12 rotate-12"></div>
        <section class="grid grid-cols-1 gap-8 p-3 md:p-8 lg:grid-cols-2 xl:grid-cols-3">
            <SectionsTestimonialsCard></SectionsTestimonialsCard>
            <SectionsTestimonialsCard></SectionsTestimonialsCard>
            <SectionsTestimonialsCard></SectionsTestimonialsCard>
        </section>
    </div>
</template>
<script>
export default {
    mounted() {
        this.$lottie.loadAnimation({
            container: this.$refs.lottie, // the dom element that will contain the animation
            loop: true,
            autoplay: true,
            path: new URL('/lottie/115241-feedback.json', import.meta.url).href, // the path to the animation json
        })
    }
}
</script>
<style lang="">
    
</style>