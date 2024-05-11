<template>

  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

  <div class="basic_menu_item">
    <div class="icon_section">
      <span class="material-symbols-outlined">{{ icon }}</span>
    </div>
    <div class="title_section">
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts" setup>


const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'title'
  },
  icon: {
    type: String,
    required: true,
    default: 'title'
  }
});

</script>

<style>
.basic_menu_item {
  @apply flex justify-center items-center;
}
.icon_section {
  @apply flex justify-center items-center border-2 text-white border-blue-900 rounded-full w-10 h-10 bg-blue-900;
}
.title_section {
  z-index: -1;
  transform:  translateX(-6px);
  @apply flex border-2 border-blue-900 border-l-transparent px-2.5 pr-2 bg-white rounded-tr-lg rounded-br-lg;
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}

</style>