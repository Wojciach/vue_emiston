<template>
  <div class="mx-10 grid grid-cols-3 gap-4">
      <div class="col-span-2">
        <p>Potrzebujesz solidnego partnera budowlanego, który dostarczy nie tylko <NuxtLink to="/uslugi" class="link">sprzęt</NuxtLink>, ale i <NuxtLink to="/o-nas" class="link">doświadczenie</NuxtLink>?</p> <p> Nasza firma jest gotowa sprostać Twoim wymaganiom! Specjalizujemy się w szerokim zakresie usług, od budowy dróg i chodników po układanie masy bitumicznej.</p>
        <p>
          Dysponujemy różnorodnym <NuxtLink to="/uslugi" class="link">sprzętem budowlanym</NuxtLink> , w tym minikoparkami, koparkami kołowymi i koparko-ładowarkami, aby zrealizować każde zadanie.
          </p>
      </div>
      <!-- <img class="col-span-1" src="../img_source/lorry.png"> -->
      <div class="col-span-1 flex justify-center items-start" >
        <MagicImage
          imageUrl="_nuxt/img_source/lorry.png"
          :width="300"
          :height="300"
          :stroke="0.035"
          :exist="[2,3]"
        />
      </div>
  </div>
  <div class="mx-10 grid grid-cols-3 gap-4">
      <div class="col-span-1 flex justify-center">
          <MagicImage
            imageUrl="_nuxt/img_source/koparka_sama.png"
            :width="300"
            :height="300"
            :stroke="0.02"
            :exist="[2,3]" />
      </div>
        <div class="col-span-2"><p>
          <NuxtLink class="link" to="/products">
          Dodatkowo, dostarczamy wysokiej jakości materiały sypkie, takie jak piach, kamienie otoczka do drenażu czy kamień bazaltowy i granitowy. 
          </NuxtLink>
        </p>
        <p>Zaufaj naszemu doświadczeniu i możliwościom - zapraszamy do owocnej współpracy!</p>
      </div>
  </div>
</template>

<script setup>
    definePageMeta({
        layout: 'default'
    })
</script>

<style>
p {
  @apply my-6;
}
.link {
  @apply text-blue-900 font-bold;
}
</style>