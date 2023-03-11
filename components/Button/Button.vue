<template lang="">
    <button type="button" class="button" v-bind:class="(color || 'primary')" v-on:click="onClick()">    
        <slot v-if="$slots.default"></slot>
        <template v-if="!$slots.default">BUTTON</template>
    </button>
</template>
<script>
export default {
    props: ['label', 'color', 'href'],
    methods: {
        onClick() {
            if(this.href) {
                return location.href = this.href;
            }
        }
    },
}
</script>
<style lang="scss">
    .button {
        @apply inline-block px-6 py-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl;
        
        &.primary {
            @apply from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs;
        }
        &.secondary {
            @apply from-slate-600 to-slate-300 uppercase align-middle transition-all rounded-lg cursor-pointer leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs text-white
        }
        &.info {
            @apply from-blue-600 to-cyan-400 uppercase align-middle transition-all rounded-lg cursor-pointer leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs text-white
        }
        &.success {
            @apply from-green-600 to-lime-400 uppercase align-middle transition-all rounded-lg cursor-pointer leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs text-white;
        }
        &.warn {
            @apply from-red-600 to-rose-400 uppercase align-middle transition-all rounded-lg cursor-pointer leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs text-white;
        }
        &.warn2 {
            @apply from-red-500 to-yellow-400 uppercase align-middle transition-all rounded-lg cursor-pointer leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs text-white
        }
    }
</style>