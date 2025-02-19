<script setup lang="ts">
const { skins } = defineProps(['skins']);
const selected = ref();
const colorMap = {
    1: 'border-[#b1c0c9]',
    2: 'border-[#75b1dd]',
    3: 'border-[#c784ff]',
    4: 'border-[#f6a638]',
    5: 'border-[#f65a50]'
}
</script>
<template>
<div class="flex flex-row justify-center bg-slate-900 border-4 border-b-rarity-4 border-t-rarity-3 border-r-rarity-2 border-l-rarity-1">
    <div class="flex flex-col text-white mt-6 gap-1">
        <div v-if="skins.length>0" :class="`flex flex-row items-center justify-start relative min-w-[309px] gap-1 bg-slate-800 border-b-4 border-b-rarity-1`" @click="selected=null">
            <NuxtImg provider="cloudflare" :src="`/icon/${skins[0].hero_id}.webp`" class="w-[64px] h-[64px] z-10" loading="lazy"/>
            <h3>{{"Base Skin"}}</h3>
        </div>
        <div v-for="skin in skins" :class="`flex flex-row items-center justify-start relative min-w-[309px] gap-1 bg-slate-800 border-b-4 ${colorMap[skin.rarity]}`" @click="selected=skin">
            <NuxtImg provider="cloudflare" :src="`/skins/icon/${skin.hero_id}${skin.skin_id}.webp`" class="w-[64px] h-[64px] z-10" loading="lazy"/>
            <h3>{{ skin.skin_name }}</h3>
        </div>
    </div>
    <div class="flex flex-col items-start bg-slate-800 rounded-3xl text-white w-[684px] min-h-[684px]">
        <NuxtImg v-if="selected" provider="cloudflare" :src="`/skins/fullbody/${selected.hero_id}${selected.skin_id}.webp`" class="w-[684px] h-[684px]"/>
        <NuxtImg v-else  provider="cloudflare" :src="`/fullbody/${skins[0].hero_id}.webp`" class="w-[684px] h-[684px]"/>
        <div class="flex text-2xl items-center p-4">
            <NuxtImg v-if="selected" provider="cloudflare" :src="`/common/rarity${selected.rarity}.webp`"/>
            <NuxtImg v-else provider="cloudflare" :src="`/common/rarity1.webp`"/>
            <h3 v-if="selected">{{ selected.skin_name }}</h3>
            <h3 v-else>{{ "Base Skin" }}</h3>
        </div>
        <p v-if="selected" class="p-4">{{ selected.skin_desc }}</p>
        <h3 v-if="selected" class="p-4">{{ selected.appearance }}</h3>
    </div>
</div>
</template>