<template>
  <h1 class="text-center text-5xl text-blue-900 mt-4 mb-2 font-emilogo tracking-m">{{ title }}</h1>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String
})

</script>

<style>

</style>