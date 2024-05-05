<template>
  <MyHeader title="Nasze Usługi:" />
  <ul>
    <li class="text-center" v-for="(value, key) in services" :key="key">
       <span class="text-blue-900 text-xl"> {{ value.name }} </span> 
        <ul class="m-6 myUl">
          <li class="text-left ml-60 " v-for="(subItem, subIndex) in value.subList" :key="subIndex">
            {{ subItem }}
          </li>
        </ul>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import services from '../resources/texts/services.json';

</script>

<style scoped>

.myUl {
    list-style-type: disc;
}

</style>