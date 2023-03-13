<template lang="">
    <li class="side-item" :class="{ active: active }">
        <a class="anchor" v-bind:href="href">
            <div class="icon">
                <span class="material-icons md-18">{{icon}}</span>
            </div>
            <span class="label"><slot></slot></span>
        </a>
    </li>
</template>
<script lang="ts">
export default {
    props: ['href', 'icon'],
    mounted() {
        this.getActive();
        window.addEventListener('hashchange', () => this.getActive(), false);
    },
    data() {
        return {
            active: false
        }
    },
    methods: {
        getActive() {
            this.active = (window.location.hash === this.href);
            this.$emit('hash-change');
        }
    }
}
</script>
<style lang="scss">
.side-item {
    @apply mt-0.5 w-full;

    &.active {
        .anchor {
            @apply shadow-soft-xl rounded-lg bg-white;

            .icon {
                @apply bg-gradient-to-tl from-blue-700 to-blue-400 shadow-soft-2xl text-white;
            }
        }
    }

    .anchor {
        @apply py-2.7 text-sm my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors;

        .icon {
            min-width: 12px;
            min-height: 12pxpx;
            @apply shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center p-2;
        }

        .label {
            @apply ml-1 duration-300 opacity-100 pointer-events-none ease-soft;
        }
    }
}
</style>