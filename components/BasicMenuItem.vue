<template>

  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

  <div class="basic_menu_item">
    <div class="icon_section">
      <span class="material-symbols-outlined">{{ icon }}</span>
    </div>
    <transition name="trans" mode="out-in">
    <div v-if="unfolded" class="title_section">
      {{ title }}
    </div>
  </transition>
  </div>
</template>

<script lang="ts" setup>

const titleVisible = ref(true);

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
  },
  unfolded: {
    type: Boolean,
    required: false,
    default: true
  }
});

</script>

<style>
.basic_menu_item {
  position: relative;
  @apply flex justify-center items-center font-normal;
}

.basic_menu_item:hover .icon_section {
  transform: scale(1.1);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3)
}

.basic_menu_item:hover .title_section {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3)
}

.icon_section {
  @apply flex justify-center items-center border-2 text-white border-blue-900 rounded-full w-10 h-10 bg-blue-900;
}

.title_section {
  position: relative;
  z-index: -1;
  transform:  translateX(-7px);
  @apply flex whitespace-nowrap border-blue-900 border-l-transparent py-0.5 px-2.5 pr-2 bg-white rounded-tr-md rounded-br-md text-sm;
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24,
}



.trans-leave-to,
.trans-enter-from {
  opacity: 0;
  transform: translateX(-40px);
}

.trans-leave-from,
.trans-enter-to {
  opacity: 1;
  transform: translateX(-6px);
}

.trans-leave-active {
  transition: all 0;
}


.trans-enter-active {
  transition: all 0.3s;
}

</style>