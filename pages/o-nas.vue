<template>
  <MyHeader title="O nas" />
  <BasicMenuItem title="home" icon="home" />
  <svg id="woda" xmlns="http://www.w3.org/2000/svg" width="0" height="0">
    <defs>
      <clipPath id="clipPath" clipPathUnits="objectBoundingBox">
        <path id="myPath" :class="{'animation': anime}" d="M0.1,0.1 L0.9,0.1 L0.9,0.9 L0.1,0.9 Z" fill="red" stroke="black" stroke-width="0.02" />
      </clipPath>
    </defs>
  </svg>

<img @click="go" id="image" src="/static/img_source/galeria/chodnik.jpg" />
<MagicImage :imageUrl="chodnikImage" :maskUrl="chodnikMask" />
  
</template>

<script setup>
import chodnikMask from "/static/img_source/galeria/chodnik.png";
import chodnikImage from "/static/img_source/galeria/chodnik.jpg";
import { ref } from 'vue';

var anime = ref(false);
const go = () => {
  anime.value = !anime.value;
  console.log("anime: " + anime);
}
</script>

<style>

#image {
  width: auto;
  height: 400px;
  margin-bottom: 100px;
  clip-path: url(#clipPath);
  mask-size: 100% 100%;
}

#myPath.animation {
  animation: animatePath 2s linear;
}

@keyframes animatePath {
    0% {
      d: path("M0.1,0.1 L0.9,0.1 L0.9,0.1 L0.5,0.9 Z"); /* Start position */
    }
    100% {
      d: path("M0.1,0.1 L0.9,0.1 L0.9,0.9 L0.1,0.9 Z"); /* End position */
    }
}

</style>