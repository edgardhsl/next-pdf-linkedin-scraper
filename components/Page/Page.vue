<template lang="">
    <div class="page">
        <slot></slot>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
    .page {
        @apply md:min-h-screen min-w-full;
    }
</style>