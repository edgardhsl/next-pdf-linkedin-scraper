<template lang="">
    <a :href="href || '#'" target="_blank">
        <div class="card">
            <img v-if="img" class="card-img" v-bind:src="img" alt="Imagem da Postagem 3">
            <div class="card-overlay"></div>
            <div class="card-content">
                <div class="text-center max-w-full">
                <h4 class="text-lg font-bold text-white mb-2">{{title}}</h4>
                <p class="text-sm text-white line-clamp-3">
                    {{description}}
                </p>
                </div>
            </div>
            <span class="absolute text-xs right-2 bottom-2 text-white">Medium por <strong>{{author}}</strong>.</span>
        </div>
    </a>
</template>
<script lang="ts">
export default {
    props: ['author', 'description', 'href', 'img', 'title'],
    methods: {
        imgError() {
            console.log(this)
        }
    },
}
</script>
<style lang="scss">
.card {
    @apply relative rounded-lg overflow-hidden h-52 hover:scale-95 transition-all;
    .card-img {
        @apply rounded-lg min-h-full md:max-w-full;
    }

    .card-overlay {
        @apply absolute inset-0 bg-gray-900 bg-opacity-50;
    }

    .card-content {
        @apply absolute inset-0 flex justify-center items-center p-8 max-w-full;
    }
}
</style>