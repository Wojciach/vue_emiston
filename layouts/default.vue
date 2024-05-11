<template>
    <header class="shadow-sm bg-white flex items-center flex-col md:flex-row justify-around md:justify-between overflow-hidden">
        <NuxtLink to="/" class="flex flex-row items-center">
            <img class="mx-5 size-12" src="/static/img_source/302233880_579894940361629_7555201057463987984_n.webp" />
            <div class="text-2xl text-blue-900 font-semibold">Emiston</div>
        </NuxtLink>
        <transition name="slide-fade" mode="out-in">
        <nav
            class="container mx-auto p-4 font-bold flex justify-center md:justify-end flex-row mb-2"
            v-if="!menuOpen"
            key="menu"
        >
            <ul
                class="flex gap-4 transition-all duration-200 flex-row flex-wrap justify-center"
                :class="{'translate-y-full': menuOpen, 'translate-y-0': !menuOpen}"
            >
                <li><NuxtLink class="btn" to="/">Home</NuxtLink></li>
                <li> <NuxtLink class="btn" to="/o-nas">O nas</NuxtLink></li>
                <li><NuxtLink class="btn" to="/produkty">Produkty</NuxtLink></li>
                <li><NuxtLink class="btn" to="/uslugi">Usługi</NuxtLink></li>
                <li><NuxtLink class="btn" to="/galeria">Galeria</NuxtLink></li>
                <li><NuxtLink class="btn" to="/contact">Kontakt</NuxtLink></li>
            </ul>
            
            <!-- <button @click="toggleMenu" class="hover:bg-gray-200 material-symbols-outlined ml-2 p-0 text-blue-900">menu</button> -->
        </nav>
        </transition>
        <button @click="toggleMenu" class="hover:bg-gray-200 material-symbols-outlined ml-2 mr-4 p-0 text-blue-900">menu</button>
        
    </header>
    <!-- Output page content -->
    <div class="mx-4 md:mx-28" >
        <NuxtPage />
    </div>
</template>

<script setup>

    const name =  'DefaultLayout';
    useHead({
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
                crossorigin: ''
            }
        ]
    })
    const menuOpen = ref(false);
    const toggleMenu = () => {
        menuOpen.value = !menuOpen.value;
        console.log("menu open: " + menuOpen.value)
    }

</script>

<style>
    .btn {
        @apply bg-white shadow-md text-blue-900 p-2 text-xs font-normal rounded-full border-blue-900 border-2
        hover:bg-gray-200;
    }

    .btn.router-link-active, .btn.router-link-exact-active {
        @apply bg-blue-900 text-white;
    }

    .material-symbols-outlined {
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24
    }

    .translate-y-full {
        transform: translateY(-50px);
        opacity: 0;
        transition: transform 1.3s ease, opacity 0.3s ease;
    }
    .translate-y-0 {
        transform: translateY(0);
        opacity: 1;
        transition: transform 1.3s ease, opacity 0.3s ease;
    }

    .slide-fade-enter-active, .slide-fade-leave-active {
        transition: transform 0.3s ease, opacity 0.3s ease;
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateY(-50px);
        opacity: 0;
    }
    .slide-fade-enter-to, .slide-fade-leave {
        transform: translateY(0);
        opacity: 1;
    }

</style>


