<template>
                    <li>
                        <NuxtLink ref="homeLink" class="btn" :to="links.home">
                            <BasicMenuItem title="Home" icon="home" :unfolded="isUnfolded(links.home)" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink ref="o_nasLink" class="btn" :to="links.oNas">
                            <BasicMenuItem title="O nas" icon="group" :unfolded="isUnfolded(links.oNas)" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink ref="produktyLink" class="btn" :to="links.produkty">
                            <BasicMenuItem title="Produkty" icon="colors" :unfolded="isUnfolded(links.produkty)" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink ref="uslugiLink" class="btn" :to="links.uslugi">
                            <BasicMenuItem title="Usługi" icon="format_paint" :unfolded="isUnfolded(links.uslugi)" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink ref="galeriaLink" class="btn" :to="links.galeria">
                            <BasicMenuItem title="Galeria" icon="photo_camera" :unfolded="isUnfolded(links.galeria)" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink ref="kontaktLink" class="btn" :to="links.kontakt">
                            <BasicMenuItem title="Kontakt" icon="call" :unfolded="isUnfolded(links.kontakt)" />
                        </NuxtLink>
                    </li>
</template>

<script lang="ts" setup>
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const props = defineProps({
  unfolded: {
    type: Boolean,
    required: true,
  }
});

const route = useRoute();

function isUnfolded(elementPath: string) {
    if (props.unfolded === true) return true;
    else if (elementPath === route.path) {
        return true; 
    } else {
        return false;
 
 
    }
}

onMounted(() => {
  const { $gsap } = useNuxtApp()

    $gsap.from('.basic_menu_item', {
        stagger: 0.05,
        rotate: -45,
        duration: 0.2,
        ease: 'power1'
    })
})

</script>

<style>

</style>