<script setup lang="ts">
const { skins } = defineProps(['skins']);
const selected = ref();
const selectedIndex = ref();
const colorMap = {
    1: 'border-b-[#b1c0c9]',
    2: 'border-b-[#75b1dd]',
    3: 'border-b-[#c784ff]',
    4: 'border-b-[#f6a638]',
    5: 'border-b-[#f65a50]'
}
const handleSelect = (index: number | null) =>{
    if(index!=null){
        selected.value = skins[index];
    }
    else{
        selected.value = null;
    }
    selectedIndex.value = index;
}
const selectedCol = "bg-slate-800";
const notSelectedCol = "bg-slate-900/50";
</script>
<template>
<div class="h-screen pt-14 flex justify-center items-center relative select-none">
    <NuxtImg provider="cloudflare" :src="`/herobg/img_herogallery_silhouette_${skins[0].hero_id}_bg.webp`" draggable="false" class="absolute bottom-0 left-0 h-full overflow-x-hidden z-1"/>
    <div class="flex flex-row justify-center z-10">
        <!-- SKIN SELECTION -->
        <div class="flex flex-col text-white gap-2 font-[Teko] text-2xl uppercase bg-slate-900/40 rounded-l-md">
            <div v-if="skins.length>0" :class="`flex flex-row items-center justify-start min-w-[310px] cursor-pointer gap-2 bg-slate-800 border-b-4 border-b-rarity-1 rounded-l-md ${selectedIndex == null ? selectedCol : notSelectedCol}`" @click="handleSelect(null)">
                <NuxtImg provider="cloudflare" :src="`/icon/${skins[0].hero_id}.webp`" draggable="false" class="w-[64px] h-[64px] z-10" loading="lazy"/>
                <h3>{{"Base Skin"}}</h3>
            </div>
            <div v-for="(skin, index) in skins" :class="`flex flex-row items-center justify-start pr-4 min-w-[310px] cursor-pointer gap-2 bg-slate-800 border-b-4 rounded-l-md ${colorMap[skin.rarity]} ${index == selectedIndex ? selectedCol : notSelectedCol}`" @click="handleSelect(index)">
                <NuxtImg provider="cloudflare" :src="`/skins/icon/${skin.hero_id}${skin.skin_id}.webp`" draggable="false" class="w-[64px] h-[64px] z-10" loading="lazy"/>
                <h3>{{ skin.skin_name }}</h3>
            </div>
        </div>
        <!-- SELECTED SKIN -->
        <div class="flex flex-col items-start bg-slate-800 text-white w-[50%] max-w-[684px] rounded-md rounded-tl-none z-20">
            <NuxtImg v-if="selected" provider="cloudflare" :src="`/skins/fullbody/${selected.hero_id}${selected.skin_id}.webp`" draggable="false" class="w-full"/>
            <NuxtImg v-else  provider="cloudflare" :src="`/fullbody/${skins[0].hero_id}.webp`" draggable="false" class="w-full"/>
            <hr>
            <div class="flex text-4xl font-[Teko] uppercase items-center px-4 mt-2">
                <NuxtImg v-if="selected" provider="cloudflare" :src="`/common/rarity${selected.rarity}.webp`"/>
                <NuxtImg v-else provider="cloudflare" :src="`/common/rarity1.webp`"/>
                <h1>{{ selected ? selected.skin_name : "Base Skin" }}</h1>
            </div>
            <p class="px-4 py-2 font-[Nunito-sans] h-[5lh] overflow-y-scroll">{{ selected?.skin_desc }}</p>
            <p class="px-4 py-2 font-[Nunito-sans] h-[2lh] overflow-y-scroll">{{ selected?.appearance }}</p>
        </div>
    </div>
</div>
</template>