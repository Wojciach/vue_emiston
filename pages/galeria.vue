<template>
  <div class="flex flex-col justify-center items-center">
    <div class="grid gap-4 auto-grid place-items-center mt-4 mb-12 w-full hider max-w-4xl mx-5">
      <div class="hover:scale-110 transition-all duration-75" v-for="(item, index) in data" :key="index">
        <MagicImage2
          class="object-cover w-full h-full galleryImageItem"
          :imageUrl="`/galeria/${filesList[index]}.jpg`"
          rounded
          shift="3%"
          :animate="true"
          :exist="[2,3]"
          width="200px"
          height="200px"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import data from "/static/img_source/galeria/galleryList.json";
import filesList from '~/assets/filesList.json';

onMounted(() => {
  const { $gsap, $ScrollTrigger } = useNuxtApp()
  document.getElementsByClassName("hider")[0].classList.remove('hider');
  if($gsap) {
      $gsap.from('.galleryImageItem', {
          duration: 0.7,
          ease: "Power4.easeIn",
          scale: 0.01,
          opacity: 0,
          filter: 'blur(10px)',
          stagger: {
            each: 0.1,
            from: 'random',
            grid: 'auto',
          }
      })
  } 
})

definePageMeta({
      middleware: ["dynamic-layout"]
})

useHead({
  titleTemplate: '%s - Galeria',
})

</script>

<style scoped>

/* .hider {
  visibility: hidden;
} */

.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}


</style>