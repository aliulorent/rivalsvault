<script setup lang="ts">
import { NuxtImg } from '#components';

const { char } = defineProps(['char']);
const goToHero = () =>{
    return navigateTo(`${char.slug}`)
}

</script>
<template>
    <!-- CHARACTER BANNER FOR EACH HERO. MOST PICTURES ARE ABSOLUTE POSITIONING -->
    <div class="hero-container relative w-[244px] h-[440px] overflow-hidden p-0 m-4 cursor-pointer" @click="goToHero">
        <h3 class="hero-name absolute bottom-16 left-3 z-40 text-center text-white font-[Teko] font-[400] text-3xl">{{ char.hero_name }}</h3>
        <NuxtImg provider="cloudflare" :src="`/common/bannershadow.webp`" loading="lazy" class="text-shadow absolute bottom-0 z-30 w-[244px] h-[184px] -mb-[2px]"/>
        <NuxtImg provider="cloudflare" :src="`/fullbody/${char.hero_id}.webp`" loading="lazy" class="hero-img absolute object-cover w-[540px] h-[540px] overflow-clip top-0 left-0 right-0 mx-auto z-20"/>
        <NuxtImg provider="cloudflare" :src="'/common/staticbg.webp'" loading="lazy" class="static-bg absolute top-0 left-0 z-10 w-[244px] h-[440px]"/>
    </div>
</template>
<style>
.hero-container{
    clip-path: polygon(0 27px, 242px 0%, 242px 412px, 0% 440px);
}
.hero-container:hover .hero-img{
    transform: scale(1.05);
    transition-duration: 200ms;
    transition-timing-function: ease-in-out;
}

</style>