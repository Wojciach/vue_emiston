<template>
  <div class="overflow-hidden hider flex flex-col justify-center items-center">
    <div class="baner flex flex-col justify-center items-center relative w-full h-80">
      <div class="overlay"></div>
      <p class="md:w-1/2 text-2xl text-center italic font-semibold text-gray-100 motto">
        <span class="px-2">W każdej realizowanym przez nas projekcie łączymy solidność z najwyższym profesjonalizmem, a fundamentem naszych działań jest zaufanie klientów.</span>
      </p>
    </div>
    <div class="max-w-4xl mx-5">
      <section class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div id="text1" class="md:col-span-2 col-span-1 mx-1 z-10 text">
            <p>Potrzebujesz solidnego partnera budowlanego, który dostarczy nie tylko <NuxtLink :to="links.uslugi" class="link">sprzęt</NuxtLink>, ale i <NuxtLink :to="links.oNas" class="link">doświadczenie</NuxtLink>?</p> <p> Nasza firma jest gotowa sprostać Twoim wymaganiom! Specjalizujemy się w szerokim zakresie usług, od budowy dróg i chodników po układanie masy bitumicznej.</p>
            <p>
              Dysponujemy różnorodnym <NuxtLink :to="links.uslugi" class="link">sprzętem budowlanym</NuxtLink> , w tym minikoparkami, koparkami kołowymi i koparko-ładowarkami, aby zrealizować każde zadanie.
            </p>
          </div>
          <!-- <img class="col-span-1" src="../img_source/lorry.png"> -->
          <div id="ciezarowka" class="col-span-1 flex justify-center items-start z-0" >
            <MagicImage
              :imageUrl="lorryUrl"
              :maskUrl="lorryUrlMask"
              width="300px"
              height="300px"
              shift="3%"
              :exist="[2,3]"
            />
            <!-- <img src="/img_source/lorry.png"> -->
          </div>
        </section>
        <section class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div id="koparka" class="col-span-1 flex justify-center items-start order-2 md:order-1">
                <MagicImage
                  :imageUrl="koparka_samaUrl"
                  :maskUrl="koparka_samaUrlMask"
                  width="300px"
                  height="300px"
                  shift="3.5%"
                  :exist="[2,3]" />
                  <!-- <img src="/img_source/koparka_sama.png"> -->
            </div>
            <div id="text2" class="col-span-1 md:col-span-2 order-1 md:order-2 text" >
              <p>
                <NuxtLink class="link" :to="links.produkty">
                Dodatkowo, dostarczamy wysokiej jakości materiały sypkie, takie jak piach, kamienie otoczka do drenażu czy kamień bazaltowy i granitowy.
                </NuxtLink>
            </p>
            <p>Zaufaj naszemu doświadczeniu i możliwościom - zapraszamy do owocnej współpracy!</p>
          </div>
          </section>
    </div>
  </div>
</template>

<script setup>
    import lorryUrl from '~/static/img_source/lorry.jpg';
    import lorryUrlMask from '~/static/img_source/lorryMask.png';
    import koparka_samaUrl from '~/static/img_source/koparka_sama.jpg';
    import koparka_samaUrlMask from '~/static/img_source/koparka_samaMask.png';

    

    definePageMeta({
      middleware: ["dynamic-layout"],
    })

    useHead({
      titleTemplate: '%s - Strona Główna',
    })

    onMounted(() => {
      const { $gsap, $ScrollTrigger } = useNuxtApp()
      document.getElementsByClassName("hider")[0].classList.remove('hider');

      $gsap.from('.motto', {
          duration: 0.7,
          ease: "bounce",
          x: 400,
          opacity: 0,
          filter: 'blur(10px)',
          scrollTrigger: {
            trigger: '.motto',
            toggleActions: 'play reverse play reverse',
            start: 'top bottom',
            end: 'top top',
            scrub: false,
            markers: false
          }
      })

      $gsap.from('#ciezarowka', {
          duration: 0.5,
          ease: "back",
          scale: 0.5,
          opacity: 0,
          transformOrigin: "center right",
          scrollTrigger: {
            trigger: '#ciezarowka',
            toggleActions: 'play reverse play reverse',
            start: 'top bottom',
            end: 'top top',
            scrub: false,
            markers: false
          }
      })

      $gsap.from('#koparka', {
          duration: 0.7,
          ease: "bounce",
          rotateX: 90,
          //scale: 0.5,
          opacity: 0.5,
          transformOrigin: "center left",
          scrollTrigger: {
            trigger: '#koparka',
            toggleActions: 'play reverse play reverse',
            start: 'top bottom',
            end: 'top top',
            scrub: false,
            markers: false
          }
      })

      const paragraphs = document.querySelectorAll('section .text');
      paragraphs.forEach((paragraph, index) => {
      $gsap.from(paragraph, {
          duration: 0.8,
          ease: "Power4.easeIn",
          opacity: 0,
          filter: 'blur(10px)',
          y: (index == 1) ? 50 : 50,
          transformOrigin: "bottom center",
          scrollTrigger: {
            trigger: paragraph,
            toggleActions: 'play reverse play reverse',
            start: 'top bottom',
            end: 'bottom top',
            scrub: false,
            markers: false
          }
      })
    })

    })



</script>

<style>
p {
  @apply my-6;
}
.link {
  @apply text-blue-900 font-bold;
}

.baner {
  background-image: url("../stock/stock2.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #172554; /* Black with 50% opacity */
  pointer-events: none;
  opacity: 0.7;/* Make sure the overlay doesn't block interactions with the image */
}

/* .hider {
  visibility: hidden;
} */

</style>