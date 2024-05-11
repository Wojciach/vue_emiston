<template>
  <MyHeader title="Produkty" />
  <article class="flex flex-col">
    <section v-for="(image, index) in images" :key="index" class="flex flex-row border-2 border-solid justify-around m-4 p-4">
      <MagicImage
        class="scale-75 md:scale-100"
        :imageUrl="image"
        :alt="`Image ${image}`"
        width="250px"
        height="250px"
        shift="4%"
        :rounded="true"
        :exist="[2,3]"
      />
      <div class="justify-center flex flex-col items-center">
        <h4 class="text-blue-900 text-xl">Nazwa produktu</h4>
        <p>Ops produktu</p>
      </div>
    </section>
  </article>

</template>

<script setup>
import kamienie1 from '/static/img_source/kamienie_1.jpg';
import kamienie2 from '/static/img_source/kamienie_2.jpg';
import kamienie3 from '/static/img_source/kamienie_3.jpg';

var images = [];
images = [kamienie1, kamienie2, kamienie3]

</script>

<style>

</style>