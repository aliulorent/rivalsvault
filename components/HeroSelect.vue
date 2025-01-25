<script setup lang="ts">
import { NuxtImg } from '#components';

const { char } = defineProps(['char']);
</script>
<template>
    <!-- CHARACTER BANNER FOR EACH HERO. MOST PICTURES ARE ABSOLUTE POSITIONING -->
    <div class="relative w-[244px] h-[440px] overflow-hidden p-0 m-4 hover:scale-110">
        <h3 class="absolute bottom-16 left-2 z-40 text-center font-bold text-white">{{ char.name }}</h3>
        <NuxtImg provider="cloudflare" :src="`/common/bannershadow.webp`" loading="lazy" class="absolute bottom-0 z-30 w-[244px] h-[184px] -mb-[2px]" id="charImage"/>
        <NuxtImg provider="cloudflare" :src="char.image_path" loading="lazy" class="absolute object-cover w-[540px] h-[540px] overflow-clip top-0 left-0 right-0 mx-auto z-20" id="charImage"/>
        <NuxtImg provider="cloudflare" :src="'/common/staticbg.webp'" loading="lazy" class="absolute top-0 left-0 z-10 w-[244px] h-[440px]" id="charImage"/>
    </div>
</template>
<style>
#charImage{
    clip-path: polygon(0 27px, 242px 0%, 242px 412px, 0% 440px);
}
</style>