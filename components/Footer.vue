<template>
  <footer class="flex flex-col justify-center items-center bg-blue-900 relative">
    <nav class="font-myCustom tracking-m w-full my-2">
        <ul id="footerList" class="text-white flex flex-row flex-wrap justify-center pt-1">
            <li><NuxtLink :to="links.home">Home</NuxtLink></li>
            <li><NuxtLink :to="links.oNas">O nas</NuxtLink></li>
            <li><NuxtLink :to="links.produkty">Produkty</NuxtLink></li>
            <li><NuxtLink :to="links.uslugi">Usługi</NuxtLink></li>
            <li><NuxtLink :to="links.galeria">Galeria</NuxtLink></li>
            <li><NuxtLink :to="links.kontakt">Kontakt</NuxtLink></li>
        </ul>
    </nav>
    <NuxtLink
      to="https://polbiz.net/"
      target="_blank"
      rel="noopener noreferrer"
      class="relative italic text-xs md:whitespace-nowrap text-gray-300 mb-1 text-center rounded-full opacity-50 hover:opacity-100"> made by polbiz.net
    </NuxtLink>
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