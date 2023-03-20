<template>
  <Side :active="isOpen">
    <div class="h-19.5">
      <i class="absolute top-0 right-0 hidden p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 xl:hidden"
        sidenav-close="" aria-hidden="true"></i>
      <a class="block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700" href="#home">
        <img src="~/assets/images/leadership.png"
          class="inline h-full max-w-full transition-all duration-200 ease-nav-brand max-h-8" alt="main_logo">
        <span class="ml-1 font-semibold transition-all duration-200 ease-nav-brand">Stephanie Araújo</span>
      </a>
    </div>
    <Separator></Separator>
    <SideItem href="#sobre-mim" icon="face" v-on:hash-change="isOpen = false">Sobre mim</SideItem>
    <SideItem href="#postagens" icon="moving" v-on:hash-change="isOpen = false">A Pedagogia Empresarial</SideItem>
    <SideItem href="#page3" icon="collections_bookmark" v-on:hash-change="isOpen = false">Portfólio</SideItem>
    <SideItem href="#contato" icon="mail" v-on:hash-change="isOpen = false">Contato</SideItem>
  </Side>
  <main class="overflow-hidden px-6" ref="el">

    <div class="top-action">
      <button class="button">
        <div class="icon">
          <Icon v-if="!isOpen" v-on:click="isOpen = true">menu</Icon>
          <Icon v-if="isOpen" v-on:click="isOpen = false">clear_all</Icon>
        </div>
        <span class="label">
          <slot></slot>
        </span>
      </button>
    </div>
    <div class="md:container md:mx-auto">
      <Page id="home">
        <SectionsHome></SectionsHome>
      </Page>
      <Page id="sobre-mim">
        <SectionsAbout></SectionsAbout>
      </Page>
      <Page id="postagens">
        <SectionsPosts></SectionsPosts>
      </Page>
      <Page id="contato">
        <SectionsContact></SectionsContact>
      </Page>
    </div>
  </main>
  <SectionsFooter></SectionsFooter>
</template>
<style lang="scss">
main {
  &:after {
    content: ' ';
    display: block;
    position: fixed;
    left: 70px;
    top: 140px;
    width: 100%;
    height: 100%;
    opacity: 0.03;
    z-index: -10;
    background-image: url('~/assets/images/744404.svg');
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: right top;

  }

  @apply ease-soft-in-out xl:ml-72 relative rounded-xl overflow-hidden transition-all duration-200;
  scroll-behavior: smooth;

  .top-action {
    @apply z-20 fixed py-5 w-[calc(100%_-_2rem)] flex justify-end md:hidden;
  
    .button {
      @apply text-blue-500 text-2xl py-2.7 text-sm my-0 flex items-center whitespace-nowrap px-4 transition-colors;

      .icon {
            min-width: 12px;
            min-height: 12pxpx;
            @apply shadow-sm mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center text-center p-2;
        }
    }
  }
}
</style>
<script lang="ts">
export default {
  setup() {
  },
  mounted() {
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggle(bool: boolean) {
      this.isOpen = bool ?? !this.isOpen;
    }
  },
}
</script>