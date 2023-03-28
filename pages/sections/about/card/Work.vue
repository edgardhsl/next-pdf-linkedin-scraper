<template lang="">
    <div class="flex flex-col md:flex-row items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-xs">
        <div class="p-3 mr-4">
            <slot name="icon"></slot>
        </div>
        <div>
            <p class="text-lg font-semibold text-gray-700 dark:text-white">
                {{ title }}
            </p>
            <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-500">
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