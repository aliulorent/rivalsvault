<script setup lang="ts">
import { NuxtImg } from '#components';
const runtime = useRuntimeConfig();

const { char } = defineProps<{char: charactersQuery}>();
const goToHero = () =>{
    return navigateTo(`${char.slug}`)
}

</script>
<template>
    <!-- CHARACTER BANNER FOR EACH HERO. MOST PICTURES ARE ABSOLUTE POSITIONING -->
    <div class="hero-container relative w-[244px] h-[440px] overflow-hidden p-0 m-4 cursor-pointer" @click="goToHero">
        <h3 class="hero-name absolute bottom-16 left-3 z-40 text-center font-[Teko] text-white text-3xl">{{ char.hero_name }}</h3>
        <NuxtImg :src="`${runtime.public.cloudflare}/common/bannershadow.webp`" loading="lazy" draggable="false" width="244" height="184" class="text-shadow absolute bottom-0 z-30 w-[244px] h-[184px] -mb-[2px]"/>
        <NuxtImg :src="`${runtime.public.cloudflare}/fullbody/${char.hero_id}.webp`" loading="lazy" draggable="false" width="244" height="540" class="hero-img absolute object-cover w-[540px] h-[540px] overflow-clip top-0 left-0 right-0 mx-auto z-20"/>
        <NuxtImg :src="`${runtime.public.cloudflare}/common/staticbg.webp`" loading="lazy" draggable="false" width="244" height="440" class="static-bg absolute top-0 left-0 z-10 w-[244px] h-[440px]"/>
    </div>
</template>
<style>
.hero-container{
    clip-path: polygon(0 27px, 242px 0%, 242px 412px, 0% 440px);
}
.hero-container:hover .hero-img{
    transform: scale(1.03);
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;
}
</style>