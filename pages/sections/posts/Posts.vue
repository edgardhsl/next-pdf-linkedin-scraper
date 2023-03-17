<template>
    <h2 class="w-full pb-1">Meus artigos...</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-4">
        <div v-for="( item, index) in posts">
            <SectionsPostsCard :img="`https://picsum.photos/600/300/?blur?id=${index}`" :title="item.titulo"
                :description="item.descricao"></SectionsPostsCard>
        </div>
    </div>
</template>
<script>
export default {
    mounted() { },
    data() {
        return {
            posts: [
                {
                    "titulo": "A importância da Pedagogia Empresarial para o desenvolvimento de equipes",
                    "descricao": "Como a Pedagogia Empresarial pode contribuir para o crescimento de empresas e profissionais."
                },
                {
                    "titulo": "Os principais desafios da Pedagogia Empresarial na atualidade",
                    "descricao": "Análise dos obstáculos que a Pedagogia Empresarial enfrenta para ser aplicada com efetividade nas organizações."
                },
                {
                    "titulo": "Tendências da Pedagogia Empresarial: o que esperar para o futuro",
                    "descricao": "As principais inovações e mudanças que estão acontecendo na Pedagogia Empresarial e como elas afetam as empresas."
                },
                {
                    "titulo": "Como a Pedagogia Empresarial pode ser aplicada na gestão de pessoas",
                    "descricao": "Exemplos práticos de como a Pedagogia Empresarial pode ser usada para desenvolver habilidades e competências dos colaboradores."
                },
                {
                    "titulo": "Pedagogia Empresarial: uma abordagem para a aprendizagem organizacional",
                    "descricao": "Como a Pedagogia Empresarial pode ser usada para promover a cultura de aprendizagem nas empresas e aumentar a efetividade do treinamento e desenvolvimento."
                }
            ]
        }
    }
}
</script>
<style lang="scss"></style>