<template lang="">
    <div class="flex flex-col md:flex-row items-center p-4 bg-white rounded-lg shadow-xs">
        <div class="p-3 mr-4">
            <slot name="icon"></slot>
        </div>
        <div>
            <p class="text-lg font-semibold text-gray-700">
                {{ title }}
            </p>
            <p class="mb-2 text-sm font-medium text-gray-600 text-justify md:text-left">
                {{ description }}
            </p>
        </div>
    </div>
</template>
<script>
export default {
    props: ['title', 'description', 'imgSrc']
}
</script>
<style lang="">
    
</style>