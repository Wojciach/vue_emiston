<template>
  <div class="flex flex-col items-center">
    <img class="object-cover w-full h-36" src="/stock/stock3.jpg" />
    <div class="max-w-4xl mx-5 blurIn hider">
      <MyHeader class="mb-1" title="O nas" />
      <div class="flex flex-col justify-center items-center">
        <p
          class="text-center"
          v-for="(paragraph, index) in opis" :key="index"
        >
          {{ paragraph }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import opis from '~/resources/texts/o_nas.json';

definePageMeta({
      middleware: ["dynamic-layout"],
})

useHead({
  titleTemplate: '%s - O nas',
})

onMounted(() => {
      const { $gsap, $ScrollTrigger } = useNuxtApp()
      document.getElementsByClassName("hider")[0].classList.remove('hider');
      $gsap.from('.blurIn', {
            duration: 0.7,
            ease: "power1",
            opacity: 0,
            filter: 'blur(20px)',
      })
})

</script>

<style>

</style>