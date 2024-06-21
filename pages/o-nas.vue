<template>
  <div>
    <img class="object-cover w-full h-36" src="/stock/stock3.jpg" />
    <MyHeader class="mb-1" title="O nas" />
    <div class="flex flex-col justify-center items-center">
      <p
        class="w-5/6 text-center"
        v-for="(paragraph, index) in opis" :key="index"
      >
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import opis from '~/resources/texts/o_nas.json';

definePageMeta({
      middleware: ["dynamic-layout"],
})

useHead({
  titleTemplate: '%s - O nas',
})

var anime = ref(false);
const go = () => {
  anime.value = !anime.value;
  console.log("anime: " + anime);
}
</script>

<style>

</style>