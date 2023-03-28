<template lang="">
    <aside class="side" v-bind:class="{active: active}">
        <ul>
            <slot></slot>
        </ul>
    </aside>
</template>
<script>
export default {
    props: ['active']
}
</script>
<style lang="scss">
.side {
    @apply max-w-68 z-990 fixed inset-y-0 my-4 ml-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white dark:bg-gray-800 p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent;
    &.active {
        @apply  translate-x-0 shadow-soft-xl #{!important}
    }
}
</style>