<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
    <div class="hover:scale-110 transition-all duration-75 " v-for="(item, index) in data" :key="index">
      <MagicImage class="object-cover w-full h-full" :imageUrl="'_nuxt/img_source/galeria/' + item"/>
    </div>
</div>
</template>

<script lang="ts" setup>
import data from "../img_source/galeria/galleryList.json";
</script>

<style>

</style>