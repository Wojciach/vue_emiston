<template>
  <div class="flex flex-col items-center justify-center blurIn hider">
    <MyHeader title="Produkty" />
    <article class="flex flex-col max-w-4xl px-5 w-full">
      <section v-for="(image, index) in images" :key="index" class="flex flex-row border-2 border-solid justify-around my-4 py-4">
        <MagicImage2
          class="scale-75 md:scale-100"
          :imageUrl="`/img/kamienie_${index +1}.jpg`"
          :alt="`Image ${image}`"
          width="150px"
          height="150px"
          shift="4%"
          :rounded="true"
          :exist="[2,3]"
        />
        <div class="justify-center flex flex-col items-center">
          <h4 class="text-blue-900 text-xl">Strona w budowie</h4>
          <p>przepraszamy</p>
        </div>
      </section>
    </article>
  </div>

</template>

<script setup>

definePageMeta({
      middleware: ["dynamic-layout"]
})

useHead({
  titleTemplate: '%s - Produkty',
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

var images = ['kamienie1', 'kamienie2', 'kamienie3'];
//images = [kamienie1, kamienie2, kamienie3]
images = ['kamienie1', 'kamienie2', 'kamienie3']

</script>

<style>

</style>