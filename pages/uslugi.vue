<template>
  <div class="mx-14">
    <MyHeader title="Nasze Usługi" />
    <ul class="mt-8">
      <li class="text-center" v-for="(value, key) in services" :key="key">
         <span class="text-blue-900 text-xl mx-2 md:mx-18"> {{ value.name }} </span>
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

</script>

<style scoped>

.myUl {
    list-style-type: disc;
}

</style>