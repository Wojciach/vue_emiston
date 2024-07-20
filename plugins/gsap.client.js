// plugins/gsap.client.js
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default defineNuxtPlugin(nuxtApp => {
  gsap.registerPlugin(ScrollTrigger)

  nuxtApp.provide('gsap', gsap)
  nuxtApp.provide('ScrollTrigger', ScrollTrigger)
})
