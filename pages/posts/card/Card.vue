<template lang="">
    <a href="#">
        <div class="relative rounded-lg overflow-hidden h-52">
            <img class="card-img" v-bind:src="img" alt="Imagem da Postagem 3">
            <div class="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
            <div class="absolute inset-0 flex justify-center items-center p-8 max-w-full">
                <div class="text-center max-w-full">
                <h4 class="text-lg font-bold text-white mb-4">{{title}}</h4>
                <p class="text-sm text-white line-clamp-3">
                    {{description}}
                </p>
                </div>
            </div>
            <span class="absolute text-xs right-2 bottom-2 text-white">Medium por <strong>Stephanie</strong>.</span>
        </div>
    </a>
</template>
<script lang="ts">
export default {
    props: ['img', 'title', 'description']
}
</script>
<style lang="scss">
    .card-img {
        @apply rounded-lg min-h-full md:max-w-full;
    }
</style>