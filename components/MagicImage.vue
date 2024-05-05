<template>
<div :style="containerStyle" class="container">
  <div :style="dynamicStyle1" class="square1 saturate-50"></div>
  <div v-if="exist.includes(2)" :style="dynamicStyle2" class="square2 bg-blue-300"></div>
  <div v-if="exist.includes(3)" :style="dynamicStyle3" class="square3 bg-green-200"></div>
  <div v-if="exist.includes(4)" :style="dynamicStyle4" class="square4 bg-blue-300"></div>
</div>
</template>

<script lang="ts" setup>

const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    required: false,
    default: 250
  },
  height: {
    type: Number,
    required: false,
    default: 250
  },
  stroke: {
    type: Number,
    required: false,
    default: 0.03
  },
  exist: {
    type: Array,
    required: false,
    default: [2,3,4]
  }
});

var shift = props.width * props.stroke;

var containerStyle = `
  width: ${props.width}px;
  height: ${props.height}px;
`

var dynamicStyle1 = `
   mask-image: url(${props.imageUrl});
   background-image: url(${props.imageUrl});
`
var dynamicStyle2 = `
   mask-image: url(${props.imageUrl});
   transform: translate(${shift}px, ${shift}px);
`
var dynamicStyle3 = `
   mask-image: url(${props.imageUrl});
   transform: translate(-${shift}px, -${shift}px);
`
var dynamicStyle4 = `
   mask-image: url(${props.imageUrl});
   transform: translate(-${shift}px, ${shift}px);
`
</script>

<style scoped>

.container {
  position: relative;
}

.square1, .square2, .square3, .square4 {
  position: absolute;
  width: 100%;
  height: 100%;
  mask-position: center;
  mask-size: contain;
  mask-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.square1 {
  z-index: 100;
}
</style>