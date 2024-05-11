<template>
  <section class="mx-1 md:mx-10 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="md:col-span-2 col-span-1 mx-1">
        <p>Potrzebujesz solidnego partnera budowlanego, który dostarczy nie tylko <NuxtLink to="/uslugi" class="link">sprzęt</NuxtLink>, ale i <NuxtLink to="/o-nas" class="link">doświadczenie</NuxtLink>?</p> <p> Nasza firma jest gotowa sprostać Twoim wymaganiom! Specjalizujemy się w szerokim zakresie usług, od budowy dróg i chodników po układanie masy bitumicznej.</p>
        <p>
          Dysponujemy różnorodnym <NuxtLink to="/uslugi" class="link">sprzętem budowlanym</NuxtLink> , w tym minikoparkami, koparkami kołowymi i koparko-ładowarkami, aby zrealizować każde zadanie.
          </p>
      </div>
      <!-- <img class="col-span-1" src="../img_source/lorry.png"> -->
      <div class="col-span-1 flex justify-center items-start" >
        <MagicImage
          :imageUrl="lorryUrl"
          :maskUrl="lorryUrlMask"
          width="300px"
          height="300px"
          shift="3%"
          :exist="[2,3]"
        />
        <!-- <img src="/img_source/lorry.png"> -->
      </div>
    </section>
    <section class="mx-1 md:mx-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="col-span-1 flex justify-center items-start order-2 md:order-1">
            <MagicImage
              :imageUrl="koparka_samaUrl"
              :maskUrl="koparka_samaUrlMask"
              width="300px"
              height="300px"
              shift="3.5%"
              :exist="[2,3]" />
              <!-- <img src="/img_source/koparka_sama.png"> -->
        </div>
        <div class="col-span-1 md:col-span-2 order-1 md:order-2" ><p>
          <NuxtLink class="link" to="/produkty">
          Dodatkowo, dostarczamy wysokiej jakości materiały sypkie, takie jak piach, kamienie otoczka do drenażu czy kamień bazaltowy i granitowy. 
          </NuxtLink>
        </p>
        <p>Zaufaj naszemu doświadczeniu i możliwościom - zapraszamy do owocnej współpracy!</p>
      </div>
      </section>
</template>

<script setup>
    import lorryUrl from '/static/img_source/lorry.jpg';
    import lorryUrlMask from '/static/img_source/lorryMask.png';
    import koparka_samaUrl from '/static/img_source/koparka_sama.jpg';
    import koparka_samaUrlMask from '/static/img_source/koparka_samaMask.png';
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