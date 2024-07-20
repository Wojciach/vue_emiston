<template>
  <div class="flex flex-col items-center justify-center blurIn hider">
    <MyHeader title="Nasze Usługi" />
    <ul class="max-w-4xl mx-5 border-2 border-solid">
      <li class="text-center" v-for="(value, key) in services" :key="key">
         <span class="text-blue-900 text-xl"> {{ value.name }} </span>
          <ul class="m-6 myUl">
            <li class="text-left ml-10 md:ml-60 " v-for="(subItem, subIndex) in value.subList" :key="subIndex">
              {{ subItem }}
            </li>
          </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import services from '../resources/texts/services.json';

definePageMeta({
      middleware: ["dynamic-layout"]
})

useHead({
  titleTemplate: '%s - Usługi',
})

onMounted(() => {
      const { $gsap, $ScrollTrigger } = useNuxtApp();
      document.getElementsByClassName("hider")[0].classList.remove('hider');
      $gsap.from('.blurIn', {
            duration: 0.7,
            ease: "power1",
            opacity: 0,
            filter: 'blur(20px)',
      })
})

</script>

<style scoped>

.myUl {
    list-style-type: disc;
}

</style>