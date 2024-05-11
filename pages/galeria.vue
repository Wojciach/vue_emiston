<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center mb-12">
    <div class="hover:scale-110 transition-all duration-75 " v-for="(item, index) in data" :key="index">
      <MagicImage
        class="object-cover w-full h-full"
        :imageUrl="gallery[index]"
        :maskUrl="galleryMask[index]"
        shift="3%"
        :animate="true"
        :exist="[2,3]"
      />
    </div>
</div>
</template>

<script setup>
import data from "/static/img_source/galeria/galleryList.json";

import { gallery } from '/static/img_source/galeria/gallery.tsx';
import { galleryMask } from '/static/img_source/galeria/gallery.tsx';

</script>

<style>

</style>