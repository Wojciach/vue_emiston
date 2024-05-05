<template>
  <article class="flex flex-col items-center">
  <MyHeader title="Kontakt" />
   <ul>
      <li class="text-center" v-for="(value, key) in contact" :key="key">
        {{ value }}
      </li>
   </ul>
  </article>
</template>

<script lang="ts" setup>

import contactData from '../resources/texts/contact.json';

const contact = contactData;


</script>

<style>

</style>
