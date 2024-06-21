<template>
  <footer class="flex flex-row justify-between items-top bg-blue-900 h-14 relative">
    <NuxtLink
      to="https://polbiz.net/"
      target="_blank"
      rel="noopener noreferrer"
      class="relative italic text-xs md:whitespace-nowrap text-gray-300 self-end text-center m-2 ml-0 rounded-full md:px-3 opacity-50 hover:opacity-100"> made by polbiz.net
    </NuxtLink>
    <nav class="font-myCustom tracking-m  w-full">
        <ul id="footerList" class="text-white flex flex-row flex-wrap justify-center pt-1">
            <li><NuxtLink :to="links.home">Home</NuxtLink></li>
            <li><NuxtLink :to="links.oNas">O nas</NuxtLink></li>
            <li><NuxtLink :to="links.produkty">Produkty</NuxtLink></li>
            <li><NuxtLink :to="links.uslugi">Usługi</NuxtLink></li>
            <li><NuxtLink :to="links.galeria">Galeria</NuxtLink></li>
            <li><NuxtLink :to="links.kontakt">Kontakt</NuxtLink></li>
        </ul>
    </nav>
  </footer>
</template>

<script lang="ts" setup>


</script>

<style scoped>

#footerList li {
  @apply mx-4;
}
#footerList li:hover {
  @apply text-gray-300;
}

.router-link-active,
.router-link-exact-active {
  @apply text-gray-400;
}



</style>