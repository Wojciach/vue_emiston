<template>
    <header class="shadow-sm bg-white flex items-center justify-around">
        <NuxtLink to="/" class="flex flex-row items-center">
            <img class="mx-5 size-12" src="../img_source/302233880_579894940361629_7555201057463987984_n.webp" />
            <div class="text-2xl text-blue-900 font-semibold hidden sm:block">Emiston</div>
        </NuxtLink>
        <nav class="container mx-auto p-4 font-bold flex justify-end">
            <ul class="flex gap-4">
                <li><NuxtLink class="btn" to="/">Home</NuxtLink></li>
                <li> <NuxtLink class="btn" to="/o-nas">O nas</NuxtLink></li>
                <li><NuxtLink class="btn" to="/produkty">Produkty</NuxtLink></li>
                <li><NuxtLink class="btn" to="/uslugi">Usługi</NuxtLink></li>
                <li><NuxtLink class="btn" to="/galeria">Galeria</NuxtLink></li>
                <li><NuxtLink class="btn" to="/contact">Kontakt</NuxtLink></li>
            </ul>
            <span @click="toggleMenu" class="material-symbols-outlined ml-2 p-0 text-blue-900 bg-green-100">menu</span>
            
        </nav>
        
    </header>
    <!-- Output page content -->
    <div class="mx-28" >
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
    let menuOpen = false;
    const toggleMenu = () => {
        menuOpen = !menuOpen;
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
</style>


