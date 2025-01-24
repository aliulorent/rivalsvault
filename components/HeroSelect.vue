<script setup lang="ts">
const { char } = defineProps(['char']);
</script>
<template>
    <div class="relative w-[244px] h-[440px] overflow-hidden p-0 m-4 hover:scale-110">
        <h3 class="absolute bottom-10 left-2 z-40 text-center font-bold text-white">{{ char.name }}</h3>
        <svg width="244" height="440" class="z-30 absolute opacity-70" id="charImage">
            <rect x="0" y="340" width="242" height="100" fill="black"></rect>
        </svg>
        <NuxtImg provider="cloudflare" :src="char.image_path" loading="lazy" class="absolute object-cover w-[540px] h-[540px] overflow-clip top-0 left-0 right-0 mx-auto z-20" id="charImage"/>
        <NuxtImg provider="cloudflare" :src="'/common/img_herolist_herocard_normalbg.webp'" loading="lazy" class="absolute top-0 left-0 z-10 w-[244px] h-[440px]"/>
    </div>
</template>
<style>
#charImage{
    clip-path: polygon(0 27px, 242px 0%, 242px 412px, 0% 440px);
}
</style>