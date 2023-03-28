<template>
    <h2 class="w-full pb-1 dark:text-white">Meus artigos...</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
        <div v-if="posts" v-for="( item, index) in posts">
            <SectionsPostsCard data-aos="fade-up" :data-aos-delay="50 * (index + 1)"
                :img="item.image" :href="item.link" :title="item.title" :description="item['content:encodedSnippet']" :author="item.creator">
            </SectionsPostsCard>
        </div>
    </div>
</template>
<script>
export default defineNuxtComponent({
    mounted() {         
        this.getMediumPosts();
    },
    methods: {
        async getMediumPosts() {
            fetch('api/medium/feed/araujostephanie')
            .then(res => res.json())
            .then(res => this.posts = res)
        }
    },
    data() {
        return {
            posts: []
        }
    }
});
</script>
<style lang="scss"></style>