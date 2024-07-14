<template>
  <article class="flex flex-col items-center mt-4 mb-16 mx-4">
    <MyHeader class="mb-1 md:mb-12" title="Kontakt" />
    <div class="flex flex-col md:flex-row w-full justify-center items-center">
      <MagicImage2
        class="rounded-lg hidden md:block"
        :exist="[2,3]"
        imageUrl="/img/shipping-container-office.jpg"
        rounded
        width="200px"
        height="200px"
      />
      <ul class="m-4 mx-10 ">
          <li
            class="text-center first:text-blue-900 first:text-3xl first:font-bold first:mb-2 first:font-emilogo first:tracking-m"
            v-for="(value, key) in contactData" :key="key">
            {{ value }}
          </li>
      </ul>
      <div class="map border-blue-900 border-2 rounded-2xl">
        <iframe
          class="border-blue-900 border-2 rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4974.885135818273!2d16.255508093562895!3d51.43166570787496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f120!3m3!1m2!1s0x470f6589e24e33c9%3A0x69fb3b10132bcbd!2sEMISTON%20Pastuszka%20Roboty%20Ziemne%20Budowa%20dr%C3%B3g%20chodnik%C3%B3w%20Rozbi%C3%B3rki!5e0!3m2!1sen!2spl!4v1716635878299!5m2!1sen!2spl"
          width="100%"
          height="250"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import contactData from '../resources/texts/contact.json';

definePageMeta({
      middleware: ["dynamic-layout"]
})

useHead({
  titleTemplate: '%s - Kontakt',
})

</script>

<style>

</style>
